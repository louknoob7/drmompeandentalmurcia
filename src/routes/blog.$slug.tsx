import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { ARTICULOS } from "@/lib/clinica";
import { Section, FinalCta } from "@/components/site/ui";

const MESES = [
  "enero","febrero","marzo","abril","mayo","junio",
  "julio","agosto","septiembre","octubre","noviembre","diciembre",
];

function fechaISO(fecha: string) {
  const m = /^(\d{1,2}) de ([a-zá-ú]+) de (\d{4})$/i.exec(fecha.trim());
  if (!m) return undefined;
  const [, dia = "", nombreMes = "", anio = ""] = m;
  const mes = MESES.indexOf(nombreMes.toLowerCase());
  if (mes < 0) return undefined;
  return `${anio}-${String(mes + 1).padStart(2, "0")}-${dia.padStart(2, "0")}`;
}


export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const articulo = ARTICULOS.find((a) => a.slug === params.slug);
    if (!articulo) throw notFound();
    return { slug: articulo.slug };
  },
  head: ({ params }) => {
    const articulo = ARTICULOS.find((a) => a.slug === params.slug);
    if (!articulo) {
      return { meta: [{ title: "Artículo no encontrado" }, { name: "robots", content: "noindex" }] };
    }
    return {
      meta: [
        { title: articulo.metaTitle },
        { name: "description", content: articulo.metaDescription },
        { property: "og:title", content: articulo.metaTitle },
        { property: "og:description", content: articulo.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: articulo.titulo,
            description: articulo.metaDescription,
            image: `https://drmompeandental.app${articulo.imagen}`,
            datePublished: fechaISO(articulo.fecha),
            mainEntityOfPage: `https://drmompeandental.app/blog/${params.slug}`,
            author: { "@type": "Organization", name: "Clínica Dental Dres. Mompeán" },
            publisher: { "@type": "Organization", name: "Clínica Dental Dres. Mompeán" },
          }),
        },
      ],
    };
  },
  component: Articulo,
  notFoundComponent: NoEncontrado,
});

function NoEncontrado() {
  return (
    <Section>
      <h1 className="text-3xl font-bold text-foreground">No hemos encontrado ese artículo</h1>
      <p className="mt-3 text-muted-foreground">
        Puede que haya cambiado de dirección.{" "}
        <Link to="/blog" className="font-semibold text-primary hover:underline">
          Vuelve al blog
        </Link>
        .
      </p>
    </Section>
  );
}

function Articulo() {
  const { slug } = Route.useLoaderData();
  const articulo = ARTICULOS.find((a) => a.slug === slug);
  if (!articulo) return <NoEncontrado />;

  return (
    <>
      <Section className="bg-soft-gradient pb-8 pt-12 md:pt-16">
        <div className="mx-auto max-w-3xl">
          <Link to="/blog" className="text-sm font-semibold text-primary hover:underline">
            ← Blog
          </Link>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            {articulo.titulo}
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            {articulo.fecha} · {articulo.lectura} de lectura
          </p>
        </div>
      </Section>

      <Section className="pt-4">
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-4xl shadow-soft">
            <img
              src={articulo.imagen}
              alt={articulo.alt}
              width={1400}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>

          <article className="mt-10 space-y-9">
            <p className="text-lg leading-relaxed text-muted-foreground">{articulo.resumen}</p>
            {articulo.contenido.map((bloque) => (
              <div key={bloque.h2}>
                <h2 className="text-2xl font-bold text-foreground">{bloque.h2}</h2>
                {bloque.parrafos.map((p) => (
                  <p key={p.slice(0, 30)} className="mt-4 leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </article>
        </div>
      </Section>

      <FinalCta
        titulo="¿Te ha surgido alguna duda con este tema?"
        texto="Pide tu cita en nuestra clínica dental de Murcia y te lo explicamos en persona, viendo tu caso concreto."
      />
    </>
  );
}
