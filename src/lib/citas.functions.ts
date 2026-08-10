import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const CitaSchema = z.object({
  nombre: z.string().trim().min(2).max(100),
  telefono: z.string().trim().min(6).max(30),
  tratamiento: z.string().trim().max(120).optional().default(""),
  fecha_preferida: z.string().trim().max(120).optional().default(""),
  franja_horaria: z.string().trim().max(120).optional().default(""),
  mensaje: z.string().trim().max(1000).optional().default(""),
  origen: z.string().trim().max(50).optional().default("chatbot_voz"),
});

export const crearCita = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => CitaSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("citas_chatbot").insert({
      nombre: data.nombre,
      telefono: data.telefono,
      tratamiento: data.tratamiento || null,
      fecha_preferida: data.fecha_preferida || null,
      franja_horaria: data.franja_horaria || null,
      mensaje: data.mensaje || null,
      origen: data.origen || "chatbot_voz",
      estado: "pendiente_confirmacion",
    });
    if (error) {
      console.error("Error guardando cita:", error.message);
      return { ok: false as const };
    }
    return { ok: true as const };
  });

function passwordValida(password: string) {
  const esperada = process.env["ADMIN_CITAS_PASSWORD"] ?? "mompean2025";
  return password === esperada;
}

export const listarCitas = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => z.object({ password: z.string() }).parse(data))
  .handler(async ({ data }) => {
    if (!passwordValida(data.password)) {
      return { ok: false as const, citas: [] };
    }
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: citas, error } = await supabaseAdmin
      .from("citas_chatbot")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(300);
    if (error) {
      console.error("Error listando citas:", error.message);
      return { ok: false as const, citas: [] };
    }
    return { ok: true as const, citas: citas ?? [] };
  });

export const actualizarEstadoCita = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) =>
    z
      .object({
        password: z.string(),
        id: z.string().uuid(),
        estado: z.enum(["pendiente_confirmacion", "confirmada", "rechazada"]),
      })
      .parse(data),
  )
  .handler(async ({ data }) => {
    if (!passwordValida(data.password)) return { ok: false as const };
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin
      .from("citas_chatbot")
      .update({ estado: data.estado })
      .eq("id", data.id);
    if (error) {
      console.error("Error actualizando cita:", error.message);
      return { ok: false as const };
    }
    return { ok: true as const };
  });
