import { createFileRoute } from "@tanstack/react-router";

import urgenciasImg from "@/assets/urgencias.jpg";
import { TreatmentPage } from "@/components/site/TreatmentPage";
import { CLINICA } from "@/lib/clinica";

const TITULO = "Urgencias dentales en Murcia | Dolor de muelas hoy";
const DESCRIPCION =
  "¿Dolor de muelas, flemón o diente roto en Murcia? Atendemos urgencias dentales con huecos reservados cada día. Llama ya al 678 69 98 33.";

export const Route = createFileRoute("/urgencias-dentales-murcia")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRIPCION },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRIPCION },
      { property: "og:url", content: "/urgencias-dentales-murcia" },
    ],
    links: [{ rel: "canonical", href: "/urgencias-dentales-murcia" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Urgencias dentales",
          description: "Atención de urgencias dentales el mismo día en Murcia.",
          serviceType: "Urgencias dentales",
          url: "https://drmompeandental.app/urgencias-dentales-murcia",
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
  component: Urgencias,
});

function Urgencias() {
  return (
    <TreatmentPage
      urgente
      eyebrow="Urgencias dentales en Murcia"
      h1="Urgencias dentales en Murcia: te quitamos el dolor hoy"
      intro={`Si tienes dolor fuerte, un flemón o se te ha roto un diente, llámanos al ${CLINICA.telefono}. Reservamos huecos cada día para urgencias y te decimos qué hacer mientras vienes.`}
      imagen={urgenciasImg}
      alt="Odontólogo atendiendo a una paciente en una urgencia dental en Murcia"
      bloques={[
        {
          h2: "Qué consideramos una urgencia dental",
          parrafos: [
            "No todo lo que molesta es una urgencia, pero hay situaciones en las que esperar solo empeora las cosas y alarga el tratamiento. Si te reconoces en alguna de estas, llámanos hoy mismo.",
          ],
          lista: [
            "Dolor de muelas intenso que no cede con analgésicos o que no te deja dormir.",
            "Flemón, hinchazón de la cara o del cuello, con o sin fiebre.",
            "Diente roto, astillado o que se ha salido tras un golpe.",
            "Empaste o corona que se ha caído y deja el diente sensible.",
            "Sangrado de encías que no se detiene.",
            "Dolor después de una extracción o de una endodoncia reciente.",
          ],
        },
        {
          h2: "Qué hacer mientras llegas a la clínica",
          parrafos: [
            "Ante un dolor agudo, puedes tomar el analgésico que utilices habitualmente si no tienes contraindicación, y aplicar frío por fuera de la mejilla en intervalos de 10-15 minutos. Nunca pongas calor si hay hinchazón: el calor favorece que la infección se extienda. Y por favor, no coloques aspirina directamente sobre la encía, quema el tejido.",
            "Si se te ha roto un trozo de diente, guárdalo en leche o suero fisiológico: en muchos casos podemos volver a pegarlo con muy buen resultado estético.",
            "Si el diente se ha salido entero, cógelo por la corona —nunca por la raíz—, enjuágalo un par de segundos sin frotar y consérvalo en leche o en tu propia saliva. Aquí el reloj importa mucho: las posibilidades de reimplantarlo con éxito son altas en la primera hora.",
            "Si se te ha caído una corona o un empaste, guárdalo y evita masticar por ese lado. No intentes pegarlo con adhesivos caseros.",
          ],
        },
        {
          h2: "Nuestra disponibilidad y cómo contactarnos",
          parrafos: [
            `Atendemos urgencias dentro de nuestro horario: ${CLINICA.horario}. Cada mañana dejamos huecos libres precisamente para estos casos, así que en la mayoría de las ocasiones podemos verte el mismo día.`,
            "La vía más rápida siempre es el teléfono. Llámanos, cuéntanos qué te pasa y te orientamos al momento: a veces con un par de indicaciones el dolor se controla hasta que llegas.",
            "Si nos escribes fuera de horario, por WhatsApp o a través del asistente virtual de esta web, tu solicitud queda registrada y te llamamos en cuanto abrimos para darte el primer hueco disponible. El asistente funciona las 24 horas, también los fines de semana.",
            "En casos de traumatismo grave, hemorragia que no se detiene, dificultad para tragar o respirar, o fiebre alta con hinchazón importante, acude directamente a un servicio de urgencias hospitalario.",
          ],
        },
        {
          h2: "Por qué no conviene esperar",
          parrafos: [
            "El dolor dental rara vez se soluciona solo. Una caries profunda que hoy se trata con una endodoncia puede convertirse en una infección que obligue a extraer el diente. Un flemón que parece bajar con antibiótico casi siempre vuelve si no se elimina la causa.",
            "Además, tratar a tiempo casi siempre sale más barato y requiere menos sesiones. Nuestra prioridad en una urgencia es doble: quitarte el dolor hoy y, después, explicarte con calma cómo resolver el problema de raíz.",
          ],
        },
      ]}
      faqs={[
        {
          pregunta: "¿Atendéis urgencias sin ser paciente de la clínica?",
          respuesta:
            "Sí. No hace falta que hayas venido antes. Llama, cuéntanos qué te pasa y buscamos hueco lo antes posible.",
        },
        {
          pregunta: "¿Qué pasa si tengo dolor un fin de semana?",
          respuesta:
            "Los viernes, sábados y domingos estamos cerrados, pero puedes escribirnos por WhatsApp o dejar tu solicitud en el asistente virtual: te llamamos el lunes a primera hora. Si el dolor es insoportable o hay fiebre, acude a un servicio de urgencias.",
        },
        {
          pregunta: "¿Cuánto cuesta una urgencia dental?",
          respuesta:
            "La visita de urgencia tiene un precio cerrado que te decimos por teléfono antes de venir. El tratamiento definitivo se presupuesta aparte y siempre con tu conformidad previa.",
        },
        {
          pregunta: "¿Puedo tomar antibiótico por mi cuenta?",
          respuesta:
            "No es recomendable. El antibiótico enmascara el problema sin resolverlo y puede dificultar el diagnóstico. Consúltanos antes.",
        },
      ]}
    />
  );
}
