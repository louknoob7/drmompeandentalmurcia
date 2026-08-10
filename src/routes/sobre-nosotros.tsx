import { createFileRoute } from "@tanstack/react-router";

import equipoImg from "@/assets/equipo.jpg";
import instalacionesImg from "@/assets/instalaciones.jpg";
import { Eyebrow, FinalCta, Section } from "@/components/site/ui";

const TITULO = "Sobre nosotros | Clínica Dental Dres. Mompeán en Murcia";
const DESCRIPCION =
  "Conoce al equipo de la Clínica Dental Dres. Mompeán en Murcia: nuestra historia, nuestra forma de tratar a los pacientes y nuestras instalaciones.";

export const Route = createFileRoute("/sobre-nosotros")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRIPCION },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRIPCION },
      { property: "og:url", content: "/sobre-nosotros" },
    ],
    links: [{ rel: "canonical", href: "/sobre-nosotros" }],
  }),
  component: SobreNosotros,
});

const EQUIPO = [
  {
    nombre: "Dr. Mompeán",
    cargo: "Director clínico · Implantología y estética",
    texto:
      "Lleva más de dos décadas atendiendo a familias de Murcia. Es de los que se sientan a dibujarte en un papel lo que va a hacer hasta que lo entiendes.",
  },
  {
    nombre: "Dra. Mompeán",
    cargo: "Ortodoncia e Invisalign",
    texto:
      "Responsable de los tratamientos de ortodoncia invisible. Planifica cada caso en 3D y no da un paso sin enseñártelo antes.",
  },
  {
    nombre: "Nuestra odontopediatra",
    cargo: "Odontopediatría",
    texto:
      "Tiene una paciencia infinita con los peques. Su objetivo declarado es que los niños salgan pidiendo volver.",
  },
  {
    nombre: "Nuestro equipo de higiene y recepción",
    cargo: "Higienista y atención al paciente",
    texto:
      "La primera cara que ves al entrar. Gestiona la agenda para que nunca esperes y te acompaña en cada visita.",
  },
];

function SobreNosotros() {
  return (
    <>
      <Section className="bg-soft-gradient pb-8 pt-12 md:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>Nuestra clínica</Eyebrow>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Una clínica dental de familia, en el corazón de Murcia
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Llevamos años atendiendo a pacientes de Murcia y alrededores, muchos de ellos ya de
              segunda generación: empezaron viniendo de niños y ahora nos traen a sus hijos.
            </p>
          </div>
          <div className="overflow-hidden rounded-4xl shadow-soft">
            <img
              src={equipoImg}
              alt="Equipo de la Clínica Dental Dres. Mompeán en Murcia"
              width={1400}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section className="pt-6">
        <div className="max-w-3xl space-y-4 text-muted-foreground">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Nuestra historia</h2>
          <p>
            La Clínica Dental Dres. Mompeán nació con una idea muy concreta: hacer una odontología
            seria, sin prisas y sin sobretratamiento, en un barrio en el que la gente se conoce. Nos
            instalamos en la calle Calderón de la Barca y desde entonces no nos hemos movido de
            aquí.
          </p>
          <p>
            Con los años hemos ido incorporando tecnología —escáner intraoral, planificación
            digital, sedación consciente— pero la forma de trabajar sigue siendo la misma que el
            primer día: escuchar mucho antes de proponer nada, explicar hasta que se entiende y no
            recomendar jamás un tratamiento que no le haríamos a alguien de nuestra familia.
          </p>
          <h2 className="pt-6 text-2xl font-bold text-foreground sm:text-3xl">
            Nuestra filosofía de trato
          </h2>
          <p>
            Sabemos que mucha gente llega con miedo. A veces por una mala experiencia de la
            infancia, a veces por vergüenza de haber dejado la boca abandonada durante años. Aquí no
            vas a encontrar reproches. Lo importante no es lo que no hiciste, es lo que podemos
            hacer a partir de hoy.
          </p>
          <p>
            Por eso trabajamos con cita previa y agenda amplia: preferimos atender a menos gente y
            dedicarle el tiempo que necesita. Por eso te enseñamos tus radiografías y tus fotos en
            pantalla. Y por eso te damos siempre el presupuesto por escrito, con alternativas
            cuando las hay, para que decidas tú y no la prisa.
          </p>
          <p>
            El resultado de esa manera de trabajar son nuestras 5,0 estrellas en Google con 18
            reseñas de pacientes que destacan justo lo mismo: el trato, la puntualidad y la
            sensación de estar en buenas manos.
          </p>
        </div>
      </Section>

      <Section className="bg-secondary/50">
        <Eyebrow>El equipo</Eyebrow>
        <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
          Las personas que te van a atender
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {EQUIPO.map((p) => (
            <div key={p.cargo} className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-display text-base font-bold text-foreground">{p.nombre}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary">
                {p.cargo}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.texto}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-4xl shadow-soft">
            <img
              src={instalacionesImg}
              alt="Gabinete dental moderno y luminoso de la clínica en Murcia"
              loading="lazy"
              width={1400}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Nuestras instalaciones</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Gabinetes amplios y luminosos, equipos de radiología digital de baja dosis, escáner
              intraoral para evitar los moldes incómodos y protocolos de esterilización revisados
              con auditorías periódicas.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Todo pensado para que la visita sea lo más breve, cómoda y segura posible. Porque una
              buena clínica no se nota solo en el resultado final, sino en cómo te sientes mientras
              estás en el sillón.
            </p>
          </div>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
