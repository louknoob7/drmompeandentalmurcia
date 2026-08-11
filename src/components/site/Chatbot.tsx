import { useCallback, useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Mic, Send, Volume2, VolumeX, X, MessageSquareHeart } from "lucide-react";

import { responderChat } from "@/lib/chat.functions";
import { crearCita } from "@/lib/citas.functions";
import { CLINICA } from "@/lib/clinica";

type Mensaje = { role: "user" | "assistant"; content: string };

const BIENVENIDA =
  "Hola 👋 Soy el asistente virtual de la Clínica Dental Dres. Mompeán, disponible las 24 horas. Puedo darte información sobre horarios y tratamientos, o ayudarte a agendar tu cita ahora mismo, aunque estemos cerrados.";

const ERROR_AMABLE = `Ahora mismo no puedo completar esto, puedes llamarnos al ${CLINICA.telefono} o escribirnos por WhatsApp y te atenderemos en cuanto abramos.`;

const CITA_RE = /\[\[CITA\]\]([\s\S]*?)\[\[\/CITA\]\]/;


type Reconocedor = {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  start: () => void;
  stop: () => void;
  onresult: ((event: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
  onend: (() => void) | null;
  onerror: (() => void) | null;
};

export function Chatbot() {
  const [abierto, setAbierto] = useState(false);
  const [mensajes, setMensajes] = useState<Mensaje[]>([{ role: "assistant", content: BIENVENIDA }]);
  const [texto, setTexto] = useState("");
  const [pensando, setPensando] = useState(false);
  const [escuchando, setEscuchando] = useState(false);
  const [vozActiva, setVozActiva] = useState(false);
  const [soportaVoz, setSoportaVoz] = useState(false);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const recognitionRef = useRef<Reconocedor | null>(null);
  const temporizadoresRef = useRef<{ silencio: ReturnType<typeof setTimeout> | null; maximo: ReturnType<typeof setTimeout> | null }>({ silencio: null, maximo: null });

  const enviarChat = useServerFn(responderChat);
  const guardarCita = useServerFn(crearCita);

  useEffect(() => {
    const w = window as unknown as { SpeechRecognition?: unknown; webkitSpeechRecognition?: unknown };
    setSoportaVoz(Boolean(w.SpeechRecognition || w.webkitSpeechRecognition));
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [mensajes, pensando, abierto]);

  // Detener la grabación si se cierra el chat o se empieza a escribir.
  useEffect(() => {
    if (!abierto && escuchando) {
      recognitionRef.current?.stop();
      setEscuchando(false);
    }
  }, [abierto, escuchando]);

  const limpiarTemporizadores = useCallback(() => {
    if (temporizadoresRef.current.silencio) clearTimeout(temporizadoresRef.current.silencio);
    if (temporizadoresRef.current.maximo) clearTimeout(temporizadoresRef.current.maximo);
    temporizadoresRef.current = { silencio: null, maximo: null };
  }, []);

  const hablar = useCallback((frase: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(frase);
    utter.lang = "es-ES";
    const voz = window.speechSynthesis.getVoices().find((v) => v.lang.startsWith("es"));
    if (voz) utter.voice = voz;
    window.speechSynthesis.speak(utter);
  }, []);

  const enviar = useCallback(
    async (contenido: string) => {
      const limpio = contenido.trim();
      if (!limpio || pensando) return;
      const historial: Mensaje[] = [...mensajes, { role: "user", content: limpio }];
      setMensajes(historial);
      setTexto("");
      setPensando(true);

      try {
        const respuesta = await enviarChat({ data: { mensajes: historial.slice(-20) } });
        if (!respuesta.ok || !respuesta.texto) {
          // Temporal: mostramos el error real del servidor para diagnóstico.
          const detalle = `Error del servidor: ${"status" in respuesta ? respuesta.status : "?"} - ${
            "error" in respuesta ? respuesta.error : "sin detalle"
          }`;
          setMensajes([...historial, { role: "assistant", content: detalle }]);
          if (vozActiva) hablar(ERROR_AMABLE);
          return;
        }

        let visible = respuesta.texto;
        const match = CITA_RE.exec(respuesta.texto);
        if (match) {
          visible = respuesta.texto.replace(CITA_RE, "").trim();
          try {
            const datos = JSON.parse(match[1] ?? "{}") as Record<string, string>;
            const guardada = await guardarCita({
              data: {
                nombre: datos["nombre"] ?? "",
                telefono: datos["telefono"] ?? "",
                tratamiento: datos["tratamiento"] ?? "",
                fecha_preferida: datos["fecha_preferida"] ?? "",
                franja_horaria: datos["franja_horaria"] ?? "",
                mensaje: datos["mensaje"] ?? "",
                origen: "chatbot_voz",
              },
            });
            if (!guardada.ok) visible = ERROR_AMABLE;
          } catch {
            visible = ERROR_AMABLE;
          }
        }

        setMensajes([...historial, { role: "assistant", content: visible }]);
        if (vozActiva) hablar(visible);
      } catch {
        setMensajes([...historial, { role: "assistant", content: ERROR_AMABLE }]);
        if (vozActiva) hablar(ERROR_AMABLE);
      } finally {
        setPensando(false);
      }
    },
    [enviarChat, guardarCita, hablar, mensajes, pensando, vozActiva],
  );

  // Grabación estilo WhatsApp: empieza al pulsar el micro y solo termina
  // cuando el usuario pulsa enviar (o cancela cerrando/escribiendo).
  const finalesRef = useRef("");
  const parcialRef = useRef("");
  const grabandoRef = useRef(false);
  const enviarAlTerminarRef = useRef(false);
  const procesadosRef = useRef(0);

  // Pequeños efectos de sonido (grabar / enviar) con Web Audio.
  const sonido = useCallback((tipo: "grabar" | "enviar") => {
    if (typeof window === "undefined") return;
    const Ctx =
      (window as unknown as { AudioContext?: typeof AudioContext; webkitAudioContext?: typeof AudioContext })
        .AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;
    try {
      const ctx = new Ctx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      const t = ctx.currentTime;
      if (tipo === "grabar") {
        osc.frequency.setValueAtTime(660, t);
        osc.frequency.exponentialRampToValueAtTime(880, t + 0.12);
      } else {
        osc.frequency.setValueAtTime(880, t);
        osc.frequency.exponentialRampToValueAtTime(520, t + 0.14);
      }
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.14, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
      osc.connect(gain).connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.2);
      osc.onended = () => void ctx.close();
    } catch {
      /* ignorar */
    }
  }, []);


  const cerrarReconocedor = useCallback(() => {
    grabandoRef.current = false;
    limpiarTemporizadores();
    try {
      recognitionRef.current?.stop();
    } catch {
      /* ignorar */
    }
  }, [limpiarTemporizadores]);

  // Cancelar sin enviar
  const detenerGrabacion = useCallback(() => {
    enviarAlTerminarRef.current = false;
    finalesRef.current = "";
    parcialRef.current = "";
    cerrarReconocedor();
    setEscuchando(false);
  }, [cerrarReconocedor]);

  // Terminar y enviar lo dicho
  const enviarGrabacion = useCallback(() => {
    enviarAlTerminarRef.current = true;
    sonido("enviar");
    cerrarReconocedor();
    setEscuchando(false);
  }, [cerrarReconocedor, sonido]);


  const iniciarGrabacion = useCallback(() => {
    const w = window as unknown as {
      SpeechRecognition?: new () => Reconocedor;
      webkitSpeechRecognition?: new () => Reconocedor;
    };
    const Ctor = w.SpeechRecognition ?? w.webkitSpeechRecognition;
    if (!Ctor) return;

    finalesRef.current = "";
    parcialRef.current = "";
    procesadosRef.current = 0;
    enviarAlTerminarRef.current = false;
    grabandoRef.current = true;

    const crear = () => {
      const rec = new Ctor();
      rec.lang = "es-ES";
      rec.interimResults = true;
      rec.continuous = true;
      procesadosRef.current = 0;

      rec.onresult = (event) => {
        const resultados = event.results as unknown as ArrayLike<
          ArrayLike<{ transcript: string }> & { isFinal?: boolean }
        >;
        let interinos = "";
        // Solo procesamos los resultados nuevos: si recorremos todos en cada
        // evento, las frases finales se duplican una y otra vez.
        for (let i = procesadosRef.current; i < resultados.length; i += 1) {
          const r = resultados[i];
          const t = (r?.[0]?.transcript ?? "").trim();
          if (r?.isFinal) {
            if (t) finalesRef.current += `${t} `;
            procesadosRef.current = i + 1;
          } else if (t) {
            interinos += `${t} `;
          }
        }
        parcialRef.current = interinos.trim();
      };


      rec.onend = () => {
        // El navegador corta el reconocimiento solo: si el usuario sigue
        // grabando, lo reanudamos para que dure hasta que pulse enviar.
        if (grabandoRef.current) {
          finalesRef.current += parcialRef.current ? `${parcialRef.current} ` : "";
          parcialRef.current = "";
          try {
            crear();
          } catch {
            grabandoRef.current = false;
            setEscuchando(false);
          }
          return;
        }
        const frase = `${finalesRef.current} ${parcialRef.current}`.trim();
        finalesRef.current = "";
        parcialRef.current = "";
        setEscuchando(false);
        if (enviarAlTerminarRef.current && frase) void enviar(frase);
        enviarAlTerminarRef.current = false;
      };

      rec.onerror = () => {
        if (grabandoRef.current) return; // onend se encargará de reanudar
        setEscuchando(false);
      };

      recognitionRef.current = rec;
      rec.start();
    };

    try {
      crear();
      sonido("grabar");
      setEscuchando(true);
    } catch {
      grabandoRef.current = false;
      setEscuchando(false);
    }
  }, [enviar, sonido]);



  const alternarMicro = useCallback(() => {
    if (escuchando) enviarGrabacion();
    else iniciarGrabacion();
  }, [escuchando, enviarGrabacion, iniciarGrabacion]);


  const alternarVoz = () => {
    setVozActiva((v) => {
      if (v && typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      } else if (!v) {
        hablar(BIENVENIDA);
      }
      return !v;
    });
  };

  return (
    <>
      {!abierto ? (
        <button
          type="button"
          onClick={() => setAbierto(true)}
          aria-label="Abrir el asistente dental IA"
          className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-asistente-gradient py-2 pl-2 pr-5 text-primary-foreground shadow-soft transition-transform hover:scale-105"
        >
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-card/20">
            <MessageSquareHeart className="size-6" aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold leading-tight">Asistente Dental IA</span>
        </button>
      ) : null}


      {abierto ? (
        <div className="fixed bottom-5 right-5 z-50 flex h-[min(78vh,560px)] w-[min(92vw,384px)] flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <div className="flex items-center gap-3 bg-hero-gradient px-4 py-3">
            <div className="grid size-9 shrink-0 place-items-center rounded-full bg-card/20 text-primary-foreground">
              <MessageSquareHeart className="size-5" aria-hidden="true" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-primary-foreground">
                Asistente virtual
              </p>
              <p className="truncate text-xs text-primary-foreground/80">Disponible 24 h</p>
            </div>
            <button
              type="button"
              onClick={alternarVoz}
              aria-label={vozActiva ? "Desactivar lectura en voz alta" : "Activar lectura en voz alta"}
              className="grid size-9 place-items-center rounded-full text-primary-foreground hover:bg-card/20"
            >
              {vozActiva ? <Volume2 className="size-5" /> : <VolumeX className="size-5" />}
            </button>
            <button
              type="button"
              onClick={() => setAbierto(false)}
              aria-label="Cerrar el asistente"
              className="grid size-9 place-items-center rounded-full text-primary-foreground hover:bg-card/20"
            >
              <X className="size-5" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {mensajes.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-3.5 py-2.5 text-sm text-primary-foreground"
                    : "max-w-[90%] whitespace-pre-line text-sm leading-relaxed text-foreground"
                }
              >
                {m.content}
              </div>
            ))}
            {pensando ? (
              <p className="text-sm italic text-muted-foreground">
                {escuchando ? "Pensando..." : "Escribiendo..."}
              </p>
            ) : null}
            {escuchando ? (
              <div className="flex items-center gap-3 rounded-2xl bg-primary-soft px-3.5 py-2.5">
                <span className="relative grid size-4 place-items-center">
                  <span className="absolute size-4 rounded-full bg-primary/40 animate-pulse-ring" />
                  <span className="size-2 rounded-full bg-primary" />
                </span>
                <span className="text-sm font-medium text-primary">
                  Grabando... pulsa enviar cuando termines
                </span>
              </div>
            ) : null}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (escuchando) enviarGrabacion();
              else if (texto.trim()) {
                sonido("enviar");
                void enviar(texto);
              }
            }}

            className="flex items-center gap-2 border-t border-border px-3 py-3"
          >
            {soportaVoz ? (
              <button
                type="button"
                onClick={escuchando ? detenerGrabacion : alternarMicro}
                aria-label={escuchando ? "Cancelar grabación" : "Hablar con el asistente"}
                className={
                  escuchando
                    ? "grid size-10 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground"
                    : "grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-primary hover:bg-primary-soft"
                }
              >
                {escuchando ? (
                  <X className="size-5" aria-hidden="true" />
                ) : (
                  <Mic className="size-5" aria-hidden="true" />
                )}
              </button>
            ) : null}

            <input
              value={texto}
              disabled={escuchando}
              onChange={(e) => setTexto(e.target.value)}
              placeholder={escuchando ? "Grabando audio..." : "Escribe tu mensaje..."}
              aria-label="Mensaje para el asistente virtual"
              className="min-w-0 flex-1 rounded-full border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring disabled:opacity-70"
            />
            <button
              type="submit"
              disabled={pensando || (!escuchando && !texto.trim())}
              aria-label={escuchando ? "Enviar audio" : "Enviar mensaje"}
              className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground disabled:opacity-50"
            >
              <Send className="size-4" aria-hidden="true" />
            </button>

          </form>
        </div>
      ) : null}
    </>
  );
}
