import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { SERVICIOS } from "@/lib/clinica";
import { Eyebrow, FinalCta, Section } from "@/components/site/ui";

const TITULO = "Servicios y tratamientos dentales en Murcia | Dres. Mompeán";
const DESCRIPCION =
  "Invisalign, estética dental, implantes, odontopediatría, sedación consciente y urgencias dentales en Murcia. Conoce todos nuestros tratamientos y pide cita.";

const OTROS = [
  {
    titulo: "Implantes dentales",
    texto:
      "Reponemos las piezas que faltan con implantes de titanio planificados digitalmente. Vuelves a masticar y a reír con seguridad, sin que se note.",
  },
  {
    titulo: "Odontología con sedación consciente",
    texto:
      "Para quien lo pasa realmente mal en el dentista. Permanece despierto pero muy relajado, y la sesión se le pasa volando.",
  },
  {
    titulo: "Periodoncia y limpiezas",
    texto:
      "Encías que sangran, mal aliento o dientes que se mueven. Tratamos la enfermedad periodontal desde la raíz y te enseñamos a mantenerla a raya.",
  },
  {
    titulo: "Endodoncia",
    texto:
      "La famosa “matar el nervio”. Con anestesia y técnica actual es un tratamiento tranquilo que salva dientes que parecían perdidos.",
  },
  {
    titulo: "Prótesis fijas y removibles",
    texto:
      "Coronas, puentes y prótesis cómodas y estéticas, ajustadas hasta que muerdas bien y te sientas a gusto.",
  },
  {
    titulo: "Revisiones y odontología preventiva",
    texto:
      "La visita más importante es la que evita las demás. Revisión anual, fluorizaciones y selladores para adultos y niños.",
  },
];

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRIPCION },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRIPCION },
      { property: "og:url", content: "/servicios" },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
  component: Servicios,
});

function Servicios() {
  return (
    <>
      <Section className="bg-soft-gradient pb-8 pt-12 md:pt-16">
        <Eyebrow>Tratamientos</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-foreground sm:text-5xl">
          Todo lo que tu boca necesita, en una sola clínica de Murcia
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Trabajamos con una idea muy sencilla: primero entender qué te pasa y qué te preocupa, y
          después proponerte el tratamiento más conservador que resuelva el problema. Nada de
          planes eternos ni de tratamientos que no necesitas. En la primera visita te hacemos un
          estudio completo, te enseñamos las imágenes en pantalla y te damos un presupuesto cerrado
          por escrito para que decidas con toda la información.
        </p>
      </Section>

      <Section className="pt-6">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Nuestros tratamientos estrella</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {SERVICIOS.map((s) => (
            <Link
              key={s.slug}
              to={s.ruta}
              className="group grid gap-4 overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-soft sm:grid-cols-[140px_minmax(0,1fr)]"
            >
              <img
                src={s.imagen}
                alt={s.titulo}
                loading="lazy"
                width={1400}
                height={900}
                className="h-40 w-full object-cover sm:h-full"
              />
              <div className="p-5 sm:py-6 sm:pl-0 sm:pr-6">
                <h3 className="font-display text-lg font-bold text-foreground">{s.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.resumen}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-primary group-hover:underline">
                  Ver información completa
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/50">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Y también nos ocupamos de
        </h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Además de los tratamientos más conocidos, resolvemos en la propia clínica la mayor parte
          de lo que necesita una familia a lo largo de los años, para que no tengas que ir dando
          vueltas de un especialista a otro.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OTROS.map((o) => (
            <div key={o.titulo} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="flex gap-2 font-display text-base font-bold text-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-mint-foreground" aria-hidden="true" />
                {o.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.texto}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl space-y-4 text-muted-foreground">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Cómo es tu primera visita con nosotros
          </h2>
          <p>
            Cuando llegas, lo primero es sentarnos a hablar. Nos cuentas qué te trae, qué te
            molesta y qué te gustaría cambiar de tu sonrisa. También si has tenido malas
            experiencias antes: eso nos ayuda mucho a adaptarnos a ti.
          </p>
          <p>
            Después hacemos la exploración: fotografías, radiografía y, si hace falta, escaneado
            intraoral en 3D. Todo lo vemos juntos en la pantalla, señalando exactamente dónde está
            cada cosa. Te sorprendería la cantidad de pacientes que nos dicen que es la primera vez
            que alguien les enseña su propia boca.
          </p>
          <p>
            Con esa información preparamos el plan de tratamiento, con alternativas cuando las hay
            y con el precio de cada fase. Te lo entregamos por escrito, te lo llevas a casa y lo
            decides con calma. Si necesitas financiación, la estudiamos contigo sin compromiso.
          </p>
          <p>
            A partir de ahí, cada cita tiene su hora y su objetivo. Y si en algún momento algo te
            preocupa, nos llamas o nos escribes por WhatsApp: preferimos resolver una duda en dos
            minutos que dejarte con la incertidumbre toda la semana.
          </p>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
