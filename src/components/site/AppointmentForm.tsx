import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2 } from "lucide-react";

import { crearCita } from "@/lib/citas.functions";
import { CLINICA, TRATAMIENTOS } from "@/lib/clinica";
import { ctaClasses } from "@/components/site/ui";

const FRANJAS = [
  "Mañana temprano (8:30 - 10:30)",
  "Media mañana (10:30 - 12:30)",
  "Mediodía (12:30 - 14:30)",
  "Me adapto a lo que haya",
];

export function AppointmentForm() {
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [fallo, setFallo] = useState(false);
  const [errores, setErrores] = useState<{ nombre?: string; telefono?: string }>({});
  const guardar = useServerFn(crearCita);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nombre = String(form.get("nombre") ?? "").trim();
    const telefono = String(form.get("telefono") ?? "").trim();

    const nuevos: { nombre?: string; telefono?: string } = {};
    if (nombre.length < 2) nuevos.nombre = "Necesitamos tu nombre para poder llamarte.";
    if (telefono.replace(/\D/g, "").length < 9)
      nuevos.telefono = "Escribe un teléfono válido, es la forma más rápida de confirmarte.";
    setErrores(nuevos);
    if (Object.keys(nuevos).length > 0) return;

    setEnviando(true);
    setFallo(false);
    try {
      const res = await guardar({
        data: {
          nombre,
          telefono,
          tratamiento: String(form.get("tratamiento") ?? ""),
          fecha_preferida: String(form.get("dia") ?? ""),
          franja_horaria: String(form.get("franja") ?? ""),
          mensaje: `${String(form.get("email") ?? "")} · ${String(form.get("mensaje") ?? "")}`.trim(),
          origen: "formulario_web",
        },
      });
      if (res?.ok) {
        setEnviado(true);
      } else {
        setFallo(true);
      }
    } catch {
      setFallo(true);
    } finally {
      setEnviando(false);
    }
  };

  if (enviado) {
    return (
      <div className="rounded-3xl border border-mint bg-mint/30 p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-mint-foreground" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl font-bold text-foreground">
          Gracias, te contactaremos en menos de 24 h para confirmar tu cita
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Hemos recibido tu solicitud. Si prefieres adelantarlo, puedes llamarnos o escribirnos por
          WhatsApp y lo dejamos cerrado al momento.
        </p>
        <button
          type="button"
          onClick={() => setEnviado(false)}
          className={`${ctaClasses("outline")} mt-6`}
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium text-foreground">
            Nombre completo *
          </label>
          <input
            id="nombre"
            name="nombre"
            maxLength={100}
            className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
            placeholder="María García"
          />
          {errores.nombre ? (
            <p className="mt-1.5 text-xs text-destructive">{errores.nombre}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="telefono" className="mb-1.5 block text-sm font-medium text-foreground">
            Teléfono *
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            maxLength={20}
            className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
            placeholder="600 00 00 00"
          />
          {errores.telefono ? (
            <p className="mt-1.5 text-xs text-destructive">{errores.telefono}</p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          maxLength={255}
          className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
          placeholder="maria@email.com"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="tratamiento" className="mb-1.5 block text-sm font-medium text-foreground">
            Tratamiento de interés
          </label>
          <select
            id="tratamiento"
            name="tratamiento"
            className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
          >
            {TRATAMIENTOS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="dia" className="mb-1.5 block text-sm font-medium text-foreground">
            Día preferido
          </label>
          <input
            id="dia"
            name="dia"
            className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
            placeholder="Ej. el próximo martes"
            maxLength={100}
          />
        </div>
      </div>

      <div>
        <label htmlFor="franja" className="mb-1.5 block text-sm font-medium text-foreground">
          Franja horaria preferida
        </label>
        <select
          id="franja"
          name="franja"
          className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
        >
          {FRANJAS.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium text-foreground">
          Mensaje (opcional)
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          maxLength={1000}
          className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
          placeholder="Cuéntanos qué te preocupa o qué necesitas. Sin tecnicismos, como tú lo dirías."
        />
      </div>

      {fallo ? (
        <p role="alert" className="rounded-xl border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
          No hemos podido enviar tu solicitud. Llámanos al {CLINICA.telefono} o escríbenos por
          WhatsApp y te damos cita al momento.
        </p>
      ) : null}

      <button type="submit" disabled={enviando} className={`${ctaClasses("accent")} w-full`}>
        {enviando ? "Enviando..." : "Solicitar mi cita"}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Al enviar aceptas nuestra política de privacidad. Solo usamos tus datos para gestionar tu
        cita.
      </p>
    </form>
  );
}
