import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const MensajeSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().max(4000),
});

const SYSTEM_PROMPT = `Eres el asistente virtual de la "Clínica Dental Dres. Mompeán", en Murcia (España). Hablas siempre en español, con un tono cercano, tranquilizador y profesional, pensado para personas que pueden tener miedo al dentista. Respuestas breves (máximo 4 frases) porque a menudo se leen en voz alta.

FORMATO DE LAS RESPUESTAS:
Escribe siempre en párrafos muy cortos, de 1 o 2 frases cada uno, separados por un salto de línea en blanco. Si la respuesta es larga (por ejemplo, explicar un tratamiento o varias opciones), divídela en varios párrafos breves o en una lista corta con guiones, una idea por línea. Nunca escribas bloques largos de texto seguido. No uses asteriscos, negritas ni markdown: solo texto plano con saltos de línea. Puedes usar como máximo UN emoji por respuesta (y solo si aporta calidez); nunca dos o más, y nunca en respuestas sobre urgencias o dolor.

DATOS DE LA CLÍNICA:
- Dirección: C. Calderón de la Barca, 14, Piso 4ºA, 30001 Murcia.
- Teléfono y WhatsApp: 678 69 98 33.
- Horario: lunes a jueves de 8:30 a 14:30. Viernes, sábado y domingo cerrado.
- Servicios: Invisalign y ortodoncia invisible, odontología estética (carillas, blanqueamiento, diseño de sonrisa), implantes, odontología pediátrica, odontología con sedación y urgencias dentales.
- Valoración: 5,0 estrellas con 18 reseñas en Google.

FUNCIONAMIENTO 24/7:
Tú estás disponible las 24 horas, todos los días, aunque la clínica esté cerrada. Si el usuario escribe de noche, en fin de semana o fuera de horario, explícale que puede dejar su cita solicitada y que quedará como "pendiente de confirmación": el equipo la confirmará al abrir, el próximo día laborable (lunes a jueves de 8:30 a 14:30).

URGENCIAS:
Si el usuario describe dolor agudo, un flemón, un golpe o un diente roto, y estamos fuera de horario, recomiéndale directamente llamar al 678 69 98 33 o escribir por WhatsApp, en lugar de agendar una cita normal. Dale también un consejo básico de primeros auxilios dentales.

AGENDAMIENTO DE CITAS:
Puedes agendar citas. Para ello necesitas recoger, de forma conversacional y pidiendo un dato cada vez: nombre completo, teléfono, tratamiento de interés y día/franja horaria preferida. Cuando tengas los cuatro datos, RESUME y pide confirmación explícita: "¿Confirmas que quieres agendar tu cita para [tratamiento] el [día] por la [franja]?".
Solo cuando el usuario confirme claramente (sí, confirmo, adelante...), responde con tu mensaje de confirmación al usuario Y añade AL FINAL del mensaje, en una línea aparte, este bloque exacto:
[[CITA]]{"nombre":"...","telefono":"...","tratamiento":"...","fecha_preferida":"...","franja_horaria":"...","mensaje":"..."}[[/CITA]]
Nunca escribas ese bloque antes de la confirmación explícita ni lo menciones al usuario.
Tu mensaje de confirmación debe seguir este modelo: "¡Listo! He registrado tu solicitud de cita para [tratamiento] el [día]. El equipo te llamará al [teléfono] en cuanto abramos (L-J de 8:30 a 14:30) para confirmar el hueco definitivo. Si es urgente, puedes escribirnos ya por WhatsApp al 678 69 98 33."

No des diagnósticos médicos ni precios cerrados: para eso invita a una primera visita de valoración.`;

export const responderChat = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) =>
    z.object({ mensajes: z.array(MensajeSchema).max(40) }).parse(data),
  )
  .handler(async ({ data }) => {
    const apiKey = process.env["GEMINI_API_KEY"];
    if (!apiKey) {
      console.error("Falta la variable de entorno GEMINI_API_KEY en el servidor.");
      return { ok: false as const, texto: "" };
    }

    const ahora = new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" });
    const preferido = process.env["GEMINI_MODEL"];
    const modelos = [
      ...(preferido ? [preferido] : []),
      "gemini-2.5-flash",
      "gemini-flash-latest",
      "gemini-2.0-flash",
    ].filter((m, i, a) => a.indexOf(m) === i);

    const cuerpo = JSON.stringify({
      systemInstruction: {
        parts: [{ text: `${SYSTEM_PROMPT}\n\nFecha y hora actual en Murcia: ${ahora}.` }],
      },
      contents: data.mensajes.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      })),
      generationConfig: {
        maxOutputTokens: 2400,
        temperature: 0.7,
        // Sin "thinking": si el modelo razona, agota los tokens y devuelve texto vacío.
        thinkingConfig: { thinkingBudget: 0 },
      },
    });

    let ultimoStatus = 0;
    for (const modelo of modelos) {
      try {
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent`,
          {
            method: "POST",
            headers: { "x-goog-api-key": apiKey, "Content-Type": "application/json" },
            body: cuerpo,
          },
        );

        if (!res.ok) {
          ultimoStatus = res.status;
          console.error(
            `Error de la API de Gemini (${modelo}):`,
            res.status,
            await res.text().catch(() => ""),
          );
          // 400/404 suelen ser modelo no disponible para esta clave: probamos el siguiente.
          if (res.status === 400 || res.status === 404) continue;
          return { ok: false as const, texto: "", status: res.status };
        }

        const json = (await res.json()) as {
          candidates?: {
            finishReason?: string;
            content?: { parts?: { text?: string }[] };
          }[];
          promptFeedback?: { blockReason?: string };
        };
        const candidato = json.candidates?.[0];
        const texto = (candidato?.content?.parts ?? [])
          .map((p) => p.text ?? "")
          .join("")
          .trim();

        if (!texto) {
          console.error(
            `Respuesta vacía de Gemini (${modelo}). finishReason=${candidato?.finishReason ?? "?"} block=${json.promptFeedback?.blockReason ?? "-"}`,
          );
          continue;
        }
        return { ok: true as const, texto };
      } catch (error) {
        console.error(`Fallo llamando al asistente (${modelo}):`, error);
      }
    }

    return { ok: false as const, texto: "", ...(ultimoStatus ? { status: ultimoStatus } : {}) };
  });

