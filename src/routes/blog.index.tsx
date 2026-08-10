import { createFileRoute, Link } from "@tanstack/react-router";

import { ARTICULOS } from "@/lib/clinica";
import { Eyebrow, FinalCta, Section } from "@/components/site/ui";

const TITULO = "Blog de salud dental | Clínica Dental Dres. Mompeán Murcia";
const DESCRIPCION =
  "Consejos claros sobre Invisalign, blanqueamiento, odontopediatría y urgencias dentales, escritos por el equipo de nuestra clínica dental en Murcia.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRIPCION },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRIPCION },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  return (
    <>
      <Section className="bg-soft-gradient pb-8 pt-12 md:pt-16">
        <Eyebrow>Blog</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-foreground sm:text-5xl">
          Consejos de salud dental, contados en cristiano
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Respondemos aquí las preguntas que más nos hacen en la consulta, sin tecnicismos y sin
          exagerar resultados. Si echas en falta algún tema, dínoslo y lo escribimos.
        </p>
      </Section>

      <Section className="pt-6">
        <div className="grid gap-8 md:grid-cols-2">
          {ARTICULOS.map((a) => (
            <article
              key={a.slug}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <Link to="/blog/$slug" params={{ slug: a.slug }}>
                <img
                  src={a.imagen}
                  alt={a.alt}
                  loading="lazy"
                  width={1400}
                  height={900}
                  className="h-52 w-full object-cover"
                />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {a.fecha} · {a.lectura} de lectura
                  </p>
                  <h2 className="mt-3 font-display text-xl font-bold text-foreground group-hover:text-primary">
                    {a.titulo}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.resumen}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-primary">
                    Leer el artículo
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
