import { createFileRoute } from "@tanstack/react-router";

import invisalignImg from "@/assets/invisalign.jpg";
import { TreatmentPage } from "@/components/site/TreatmentPage";

const TITULO = "Invisalign en Murcia | Ortodoncia invisible · Dres. Mompeán";
const DESCRIPCION =
  "Invisalign en Murcia con planificación 3D. Alinea tus dientes sin brackets, con férulas transparentes. Primera valoración sin compromiso.";

export const Route = createFileRoute("/invisalign")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRIPCION },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRIPCION },
      { property: "og:url", content: "/invisalign" },
    ],
    links: [{ rel: "canonical", href: "/invisalign" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Invisalign · Ortodoncia invisible",
          description: "Ortodoncia invisible con férulas transparentes y planificación 3D en Murcia.",
          serviceType: "Invisalign · Ortodoncia invisible",
          url: "https://drmompeandental.app/invisalign",
          areaServed: { "@type": "City", name: "Murcia" },
          provider: {
            "@type": "Dentist",
            name: "Clínica Dental Dres. Mompeán",
            telephone: "+34678699833",
            address: {
              "@type": "PostalAddress",
              streetAddress: "C. Calderón de la Barca, 14, 4ºA",
              addressLocality: "Murcia",
              postalCode: "30001",
              addressCountry: "ES",
            },
          },
        }),
      },
    ],
  }),
  component: Invisalign,
});

function Invisalign() {
  return (
    <TreatmentPage
      eyebrow="Ortodoncia invisible en Murcia"
      h1="Invisalign en Murcia: endereza tus dientes sin que nadie lo note"
      intro="Férulas transparentes hechas a medida que vas cambiando en casa. Puedes quitártelas para comer y para lavarte los dientes, y casi nadie se dará cuenta de que llevas ortodoncia."
      imagen={invisalignImg}
      alt="Férula transparente de Invisalign sostenida entre los dedos"
      bloques={[
        {
          h2: "Qué es exactamente Invisalign",
          parrafos: [
            "Invisalign es un sistema de ortodoncia que sustituye los brackets metálicos por una secuencia de férulas transparentes, llamadas alineadores, fabricadas a medida para tu boca. Cada férula mueve tus dientes una fracción de milímetro; al cambiarla por la siguiente, el movimiento continúa hasta llegar a la posición final planificada.",
            "Antes de empezar hacemos un escaneado intraoral en 3D: nada de pastas ni moldes incómodos. Con ese escaneado preparamos tu plan digital y te enseñamos, en la pantalla y antes de fabricar nada, cómo se van a mover tus dientes y cómo quedará tu sonrisa al terminar. Solo cuando el resultado te convence, mandamos a fabricar el juego de férulas.",
            "En Murcia recibimos cada semana a pacientes adultos que dan por hecho que la ortodoncia es cosa de adolescentes. No lo es. Más de la mitad de nuestros casos de Invisalign son personas de entre 30 y 55 años que quieren corregir un apiñamiento de toda la vida o la recaída de una ortodoncia de juventud.",
          ],
        },
        {
          h2: "¿Para quién está indicado?",
          parrafos: [
            "Invisalign resuelve hoy la gran mayoría de los casos de ortodoncia, desde los más sencillos hasta muchos que hace unos años solo se trataban con brackets.",
          ],
          lista: [
            "Apiñamiento leve, moderado e incluso severo.",
            "Espacios o diastemas entre los dientes.",
            "Mordida cruzada, abierta o profunda en muchos casos.",
            "Recaídas tras una ortodoncia anterior por no usar la retención.",
            "Adultos que necesitan alinear antes de colocar carillas o implantes.",
            "Adolescentes responsables, con la versión Invisalign Teen.",
          ],
        },
        {
          h2: "Cuánto dura y cómo es el día a día",
          parrafos: [
            "La duración media está entre 6 y 18 meses, según la complejidad del caso. Los tratamientos estéticos de los dientes de delante suelen resolverse en menos de un año.",
            "Las férulas se llevan entre 20 y 22 horas al día. Te las quitas para comer, beber cualquier cosa que no sea agua y cepillarte. Esa es toda la rutina. Al principio notarás algo de presión durante uno o dos días con cada férula nueva: es señal de que el diente se está moviendo.",
            "Nos vemos cada 6 u 8 semanas en visitas cortas para comprobar que todo va según lo previsto. No hay alambres que se suelten ni urgencias por brackets despegados, así que el tratamiento encaja bien con una vida ocupada.",
          ],
        },
        {
          h2: "Antes y después: qué resultados puedes esperar",
          parrafos: [
            "Al final del tratamiento no solo cambia la estética. Unos dientes bien alineados se limpian mejor, acumulan menos placa y sufren menos desgastes y fracturas. Muchos pacientes nos cuentan también que dejan de taparse la boca al reír, y ese cambio es el que más se les nota en la cara.",
            "Cuando terminamos, colocamos la retención: un alambre fijo por dentro de los dientes y/o una férula de noche. Es imprescindible para que el resultado dure. Te lo explicamos desde el primer día para que no haya sorpresas.",
          ],
        },
      ]}
      faqs={[
        {
          pregunta: "¿Se nota mucho que llevo férulas?",
          respuesta:
            "Muy poco. Son transparentes y muy finas. La mayoría de la gente que te habla de cerca no se da cuenta a menos que se lo digas.",
        },
        {
          pregunta: "¿Duele?",
          respuesta:
            "No duele, aunque los primeros días con cada férula notarás presión y algo de tirantez. Es perfectamente llevadero y desaparece en 24-48 horas.",
        },
        {
          pregunta: "¿Afecta al habla?",
          respuesta:
            "Los primeros dos o tres días puedes notar un ligerísimo ceceo que desaparece rápido en cuanto la lengua se acostumbra.",
        },
        {
          pregunta: "¿Cuánto cuesta Invisalign en Murcia?",
          respuesta:
            "Depende del número de férulas que necesite tu caso. Tras el estudio te damos un presupuesto cerrado por escrito, con opciones de financiación a plazos sin sorpresas.",
        },
      ]}
    />
  );
}
