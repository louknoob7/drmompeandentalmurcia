import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useCallback, useState } from "react";
import { CalendarCheck, Check, Lock, RefreshCw, X } from "lucide-react";

import { actualizarEstadoCita, listarCitas } from "@/lib/citas.functions";

type Cita = {
  id: string;
  created_at: string;
  nombre: string;
  telefono: string;
  tratamiento: string | null;
  fecha_preferida: string | null;
  franja_horaria: string | null;
  mensaje: string | null;
  origen: string | null;
  estado: string;
};

export const Route = createFileRoute("/admin-citas")({
  head: () => ({
    meta: [
      { title: "Panel de citas | Clínica Dental Dres. Mompeán" },
      {
        name: "description",
        content:
          "Panel interno de la Clínica Dental Dres. Mompeán para revisar y confirmar las solicitudes de cita recibidas por el asistente virtual.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Panel de citas | Dres. Mompeán" },
      {
        property: "og:description",
        content: "Gestión interna de solicitudes de cita del asistente virtual.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AdminCitas,
});

const ESTADOS: Record<string, string> = {
  pendiente_confirmacion: "Pendiente",
  confirmada: "Confirmada",
  rechazada: "Rechazada",
};

function badge(estado: string) {
  if (estado === "confirmada") return "bg-primary-soft text-primary";
  if (estado === "rechazada") return "bg-destructive/10 text-destructive";
  return "bg-secondary text-foreground/80";
}

function AdminCitas() {
  const [password, setPassword] = useState("");
  const [autenticado, setAutenticado] = useState(false);
  const [citas, setCitas] = useState<Cita[]>([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  const pedirCitas = useServerFn(listarCitas);
  const cambiarEstado = useServerFn(actualizarEstadoCita);

  const cargar = useCallback(
    async (clave: string) => {
      setCargando(true);
      setError("");
      try {
        const res = await pedirCitas({ data: { password: clave } });
        if (!res.ok) {
          setError("Contraseña incorrecta o error al cargar las citas.");
          setAutenticado(false);
          return;
        }
        setCitas(res.citas as Cita[]);
        setAutenticado(true);
      } catch {
        setError("No se han podido cargar las citas. Inténtalo de nuevo.");
      } finally {
        setCargando(false);
      }
    },
    [pedirCitas],
  );

  const marcar = async (id: string, estado: "confirmada" | "rechazada") => {
    const res = await cambiarEstado({ data: { password, id, estado } });
    if (res.ok) {
      setCitas((prev) => prev.map((c) => (c.id === id ? { ...c, estado } : c)));
    }
  };

  if (!autenticado) {
    return (
      <section className="mx-auto flex w-full max-w-md flex-col justify-center px-5 py-20 sm:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
          <div className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary">
            <Lock className="size-6" aria-hidden="true" />
          </div>
          <h1 className="mt-5 font-display text-2xl font-bold text-foreground">Panel de citas</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Acceso reservado al equipo de la clínica.
          </p>
          <form
            className="mt-6 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              void cargar(password);
            }}
          >
            <label className="block text-sm font-medium text-foreground" htmlFor="clave">
              Contraseña
            </label>
            <input
              id="clave"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            {error ? <p className="text-sm text-destructive">{error}</p> : null}
            <button
              type="submit"
              disabled={cargando || !password}
              className="w-full rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:brightness-110 disabled:opacity-50"
            >
              {cargando ? "Comprobando..." : "Entrar"}
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="grid size-11 place-items-center rounded-2xl bg-primary-soft text-primary">
            <CalendarCheck className="size-6" aria-hidden="true" />
          </div>
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground">Solicitudes de cita</h1>
            <p className="text-sm text-muted-foreground">{citas.length} solicitudes recibidas</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => void cargar(password)}
          className="inline-flex items-center gap-2 rounded-full border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary"
        >
          <RefreshCw className="size-4" aria-hidden="true" /> Actualizar
        </button>
      </div>

      <div className="mt-8 space-y-3">
        {citas.length === 0 ? (
          <p className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
            Todavía no hay solicitudes de cita.
          </p>
        ) : null}

        {citas.map((cita) => (
          <article
            key={cita.id}
            className="rounded-2xl border border-border bg-card p-5 shadow-card"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="font-display text-base font-bold text-foreground">{cita.nombre}</p>
                <p className="text-sm text-muted-foreground">
                  <a href={`tel:${cita.telefono}`} className="hover:text-primary">
                    {cita.telefono}
                  </a>
                </p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${badge(cita.estado)}`}
              >
                {ESTADOS[cita.estado] ?? cita.estado}
              </span>
            </div>

            <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  Tratamiento
                </dt>
                <dd className="text-foreground">{cita.tratamiento || "—"}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">Día</dt>
                <dd className="text-foreground">{cita.fecha_preferida || "—"}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">Franja</dt>
                <dd className="text-foreground">{cita.franja_horaria || "—"}</dd>
              </div>
            </dl>

            {cita.mensaje ? (
              <p className="mt-3 rounded-xl bg-secondary/60 px-3 py-2 text-sm text-foreground/80">
                {cita.mensaje}
              </p>
            ) : null}

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => void marcar(cita.id, "confirmada")}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:brightness-110"
              >
                <Check className="size-4" aria-hidden="true" /> Confirmar
              </button>
              <button
                type="button"
                onClick={() => void marcar(cita.id, "rechazada")}
                className="inline-flex items-center gap-2 rounded-full border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary"
              >
                <X className="size-4" aria-hidden="true" /> Rechazar
              </button>
              <span className="text-xs text-muted-foreground">
                {new Date(cita.created_at).toLocaleString("es-ES")} · {cita.origen}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
