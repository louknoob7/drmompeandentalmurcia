import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";

import { CLINICA, RESENAS } from "@/lib/clinica";
import { Eyebrow, FinalCta, Section, Stars, ctaClasses } from "@/components/site/ui";

const TITULO = "Opiniones de pacientes | Clínica Dental Dres. Mompeán Murcia";
const DESCRIPCION =
  "5,0 estrellas y 18 reseñas en Google. Lee las opiniones de nuestros pacientes sobre el trato y los tratamientos en nuestra clínica de Murcia.";

export const Route = createFileRoute("/opiniones")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRIPCION },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRIPCION },
      { property: "og:url", content: "/opiniones" },
    ],
    links: [{ rel: "canonical", href: "/opiniones" }],
  }),
  component: Opiniones,
});

function Opiniones() {
  return (
    <>
      <Section className="bg-soft-gradient pb-8 pt-12 md:pt-16">
        <Eyebrow>Opiniones</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-foreground sm:text-5xl">
          Lo que dicen nuestros pacientes de Murcia
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          No hay mejor carta de presentación que la de alguien que ya se ha sentado en nuestro
          sillón. Estas son algunas de las valoraciones que nos han dejado en Google.
        </p>
        <div className="mt-8 inline-flex flex-wrap items-center gap-4 rounded-3xl border border-border bg-card px-6 py-4 shadow-card">
          <span className="text-4xl font-bold text-foreground">{CLINICA.valoracion}</span>
          <span>
            <Stars />
            <span className="mt-1 block text-sm text-muted-foreground">
              {CLINICA.resenas} reseñas en Google
            </span>
          </span>
        </div>
      </Section>

      <Section className="pt-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {RESENAS.map((r) => (
            <figure key={r.nombre} className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <Quote className="size-6 text-primary/40" aria-hidden="true" />
              <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {r.texto}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-primary-soft font-bold text-primary">
                  {r.inicial}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">{r.nombre}</span>
                  <span className="flex items-center gap-2">
                    <Stars />
                    <span className="text-xs text-muted-foreground">{r.fecha}</span>
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={CLINICA.resenasGoogle}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaClasses("outline")}
          >
            Ver todas en Google
          </a>
          <a
            href={CLINICA.resenasGoogle}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaClasses("accent")}
          >
            <Star className="size-4" aria-hidden="true" />
            Dejar mi reseña
          </a>
        </div>

        <p className="mt-8 max-w-3xl text-muted-foreground">
          Si has venido a vernos y te apetece contarlo, tu opinión nos ayuda muchísimo: es lo que
          hace que otra persona con miedo al dentista se anime a dar el paso. Y si algo no salió
          como esperabas, preferimos que nos lo digas directamente para poder arreglarlo.
        </p>
      </Section>

      <FinalCta />
    </>
  );
}
