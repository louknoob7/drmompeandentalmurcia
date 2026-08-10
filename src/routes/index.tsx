import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarCheck,
  Baby,
  Moon,
  Siren,
  HeartHandshake,
  Sparkles,
  Clock3,
  Wallet,
  MapPin,
  Quote,
} from "lucide-react";

import heroImg from "@/assets/hero-clinica.jpg";
import { CLINICA, CONFIANZA, RESENAS, SERVICIOS } from "@/lib/clinica";
import {
  CtaLink,
  Eyebrow,
  FinalCta,
  MapEmbed,
  RatingBadge,
  Section,
  Stars,
  WhatsAppTextButton,
} from "@/components/site/ui";

const TITULO = "Clínica Dental en Murcia | Dres. Mompeán · 5,0★ en Google";
const DESCRIPCION =
  "Dentista en el centro de Murcia con 5,0 estrellas y 18 reseñas. Invisalign, estética dental, implantes, odontopediatría, sedación y urgencias. Pide cita: 678 69 98 33.";

const ICONOS_CONFIANZA = [CalendarCheck, Baby, Moon, Siren];

const PORQUE = [
  {
    icon: HeartHandshake,
    titulo: "Trato cercano de verdad",
    texto:
      "Te llamamos por tu nombre, te escuchamos y te explicamos todo sin tecnicismos. Si te da miedo el dentista, aquí no te vas a sentir juzgado.",
  },
  {
    icon: Sparkles,
    titulo: "Tecnología actual",
    texto:
      "Escáner intraoral, planificación digital y materiales de primera. Menos moldes incómodos y resultados más predecibles.",
  },
  {
    icon: Clock3,
    titulo: "Sin esperas",
    texto:
      "Trabajamos con cita previa y agenda realista. Tu hora es tu hora: entras, te atendemos y sigues con tu día.",
  },
  {
    icon: Wallet,
    titulo: "Financiación a tu medida",
    texto:
      "Presupuestos cerrados por escrito y opciones de pago a plazos sin sorpresas ni letra pequeña.",
  },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: CLINICA.nombre,
  image: "https://clinicadentalmompean.es/og.jpg",
  telephone: "+34 678 69 98 33",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C. Calderón de la Barca, 14, Piso 4ºA",
    addressLocality: "Murcia",
    postalCode: "30001",
    addressCountry: "ES",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:30",
      closes: "14:30",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "18",
  },
  areaServed: "Murcia",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRIPCION },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRIPCION },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(JSON_LD) }],
  }),
  component: Inicio,
});

function Inicio() {
  return (
    <>
      <section className="relative overflow-hidden bg-soft-gradient px-5 pb-14 pt-12 sm:px-8 md:pb-20 md:pt-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>Dentistas en el centro de Murcia</Eyebrow>
            <h1 className="mt-4 text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
              Tu sonrisa, en las mejores manos de Murcia
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Somos una clínica dental familiar en pleno centro de Murcia. Aquí no hay prisas ni
              tratamientos que no necesites: solo un equipo que te escucha, te explica y cuida tu
              boca como si fuera la suya.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink to="/contacto" variant="accent" className="px-8 py-4 text-base">
                Pedir cita
              </CtaLink>
              <WhatsAppTextButton className="px-8 py-4 text-base" />
            </div>
            <RatingBadge className="mt-8" />
          </div>

          <div className="overflow-hidden rounded-4xl shadow-soft">
            <img
              src={heroImg}
              alt="Interior luminoso de la Clínica Dental Dres. Mompeán en Murcia"
              width={1600}
              height={1100}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <Section className="py-12 md:py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CONFIANZA.map((c, i) => {
            const Icono = ICONOS_CONFIANZA[i] ?? CalendarCheck;
            return (
              <div key={c.titulo} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="grid size-11 place-items-center rounded-2xl bg-primary-soft text-primary">
                  <Icono className="size-5" aria-hidden="true" />
                </div>
                <h2 className="mt-4 font-display text-base font-bold text-foreground">{c.titulo}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.texto}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="bg-secondary/50">
        <div className="max-w-2xl">
          <Eyebrow>Tratamientos</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            Lo que hacemos, explicado sin rodeos
          </h2>
          <p className="mt-4 text-muted-foreground">
            Desde una revisión de rutina hasta una sonrisa nueva. Estos son los tratamientos por los
            que más nos visitan nuestros pacientes de Murcia.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICIOS.map((s) => (
            <Link
              key={s.slug}
              to={s.ruta}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <img
                src={s.imagen}
                alt={s.titulo}
                loading="lazy"
                width={1400}
                height={900}
                className="h-40 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-display text-base font-bold text-foreground">{s.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.resumen}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-primary group-hover:underline">
                  Saber más<span className="sr-only"> sobre {s.titulo}</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <CtaLink to="/servicios" variant="outline">
            Ver todos los servicios
          </CtaLink>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:items-center">
          <div>
            <Eyebrow>Por qué elegirnos</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
              Venir al dentista no tiene por qué dar miedo
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Muchos de nuestros pacientes llegan después de años sin pisar una consulta. Nuestro
              trabajo empieza ahí: bajando la tensión, explicando cada paso y avanzando a tu ritmo.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {PORQUE.map((p) => (
              <div key={p.titulo} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <p.icon className="size-6 text-primary" aria-hidden="true" />
                <h3 className="mt-3 font-display text-base font-bold text-foreground">{p.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/50">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <Eyebrow>Opiniones reales</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
              5,0 estrellas y {CLINICA.resenas} reseñas en Google
            </h2>
          </div>
          <CtaLink to="/opiniones" variant="outline">
            Ver todas las opiniones
          </CtaLink>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {RESENAS.slice(0, 3).map((r) => (
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
                  <Stars className="mt-0.5" />
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow>Dónde estamos</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
              En pleno centro de Murcia, fácil de encontrar
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Estamos en {CLINICA.calle}, a un paso de la Gran Vía y bien comunicados en transporte
              público. Si vienes en coche, hay varios aparcamientos a menos de cinco minutos
              andando.
            </p>
            <p className="mt-4 flex items-start gap-2 text-muted-foreground">
              <MapPin className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a
                href={CLINICA.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                {CLINICA.direccion}
              </a>
            </p>
            <p className="mt-2 text-muted-foreground">{CLINICA.horario}</p>
          </div>
          <div className="h-80 overflow-hidden rounded-4xl shadow-soft">
            <MapEmbed />
          </div>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
