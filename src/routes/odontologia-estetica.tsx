import { createFileRoute } from "@tanstack/react-router";

import esteticaImg from "@/assets/estetica.jpg";
import { TreatmentPage } from "@/components/site/TreatmentPage";

const TITULO = "Odontología estética en Murcia | Carillas y blanqueamiento";
const DESCRIPCION =
  "Carillas, blanqueamiento y diseño de sonrisa en Murcia. Resultados naturales adaptados a tu cara. Pide tu valoración estética.";

export const Route = createFileRoute("/odontologia-estetica")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRIPCION },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRIPCION },
      { property: "og:url", content: "/odontologia-estetica" },
    ],
    links: [{ rel: "canonical", href: "/odontologia-estetica" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Odontología estética",
          description: "Carillas, blanqueamiento y diseño de sonrisa en Murcia.",
          serviceType: "Odontología estética",
          url: "https://drmompeandental.app/odontologia-estetica",
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
  component: Estetica,
});

function Estetica() {
  return (
    <TreatmentPage
      eyebrow="Estética dental en Murcia"
      h1="Odontología estética: una sonrisa que siga pareciendo la tuya"
      intro="Carillas, blanqueamiento y diseño de sonrisa pensados para tu cara, no para un catálogo. Buscamos que la gente note que estás guapo, no que te has hecho algo en los dientes."
      imagen={esteticaImg}
      alt="Sonrisa natural y luminosa de una paciente tras un tratamiento de estética dental"
      bloques={[
        {
          h2: "Diseño de sonrisa: planificar antes de tocar nada",
          parrafos: [
            "Todo tratamiento estético empieza igual: entendiendo qué es lo que no te gusta. A veces es el color, a veces un diente girado, a veces que se ven demasiado las encías al reír. Ponerle nombre al problema es la mitad del trabajo.",
            "Después hacemos un estudio con fotografías, vídeo de tu sonrisa hablando y escaneado 3D. Con eso diseñamos digitalmente la propuesta y, en muchos casos, hacemos una prueba en tu propia boca —lo que llamamos mock-up— para que puedas verte con la sonrisa nueva antes de tomar ninguna decisión irreversible.",
            "Ese momento es el favorito de nuestros pacientes: te miras al espejo, opinas, pides más largo, más corto, más blanco o más natural. Solo cuando estás conforme empezamos.",
          ],
        },
        {
          h2: "Carillas dentales",
          parrafos: [
            "Las carillas son láminas finísimas de porcelana o composite que se adhieren a la cara visible del diente. Corrigen color, forma, pequeños giros, bordes desgastados y espacios entre dientes.",
            "Las de composite se hacen en una o dos sesiones, directamente en la consulta, y son la opción más conservadora y económica. Las de porcelana requieren laboratorio, resisten mejor el paso del tiempo y mantienen el brillo durante años.",
            "En ambos casos trabajamos con el mínimo desgaste posible. Nuestra filosofía es clara: cuanto más diente sano conservemos, mejor será el pronóstico a largo plazo.",
          ],
          lista: [
            "Dientes manchados que no responden al blanqueamiento.",
            "Bordes desgastados o fracturados.",
            "Dientes pequeños o con formas irregulares.",
            "Espacios antiestéticos entre los incisivos.",
          ],
        },
        {
          h2: "Blanqueamiento dental",
          parrafos: [
            "Es el tratamiento estético más demandado y el más agradecido. Con geles de peróxido aplicados en clínica, en casa con férulas personalizadas o combinando ambos, se pueden ganar varios tonos de forma segura.",
            "Antes de blanquear revisamos que no haya caries ni problemas de encías y hacemos una limpieza. Blanquear una boca que no está sana es la vía rápida a la sensibilidad y a un resultado irregular.",
            "El resultado suele durar entre uno y tres años según tus hábitos. Con un par de noches de mantenimiento al año, el tono se conserva perfectamente.",
          ],
        },
        {
          h2: "Un resultado natural, no un decorado",
          parrafos: [
            "Todos hemos visto sonrisas demasiado blancas y demasiado iguales que cantan a kilómetros. Nosotros trabajamos con proporciones, texturas y translucideces reales, y elegimos el color contando con tu tono de piel y tu edad.",
            "El objetivo es que salgas de la clínica y tus amigos te digan que te ven bien, que has descansado o que estás más guapo, sin saber exactamente por qué.",
          ],
        },
      ]}
      faqs={[
        {
          pregunta: "¿El blanqueamiento estropea el esmalte?",
          respuesta:
            "No, si se hace en clínica y con supervisión. Puede provocar sensibilidad temporal durante unos días, que se controla con productos desensibilizantes.",
        },
        {
          pregunta: "¿Cuánto duran las carillas?",
          respuesta:
            "Las de porcelana pueden durar más de diez años con buen mantenimiento; las de composite necesitan pulidos periódicos y algún retoque con el tiempo.",
        },
        {
          pregunta: "¿Hay que limar mucho los dientes?",
          respuesta:
            "Trabajamos con técnicas de mínima preparación. En bastantes casos el desgaste es prácticamente inapreciable y en algunos ni siquiera es necesario.",
        },
        {
          pregunta: "¿Puedo ver el resultado antes de decidirme?",
          respuesta:
            "Sí. Con el diseño digital y la prueba en boca puedes ver y opinar sobre tu nueva sonrisa antes de empezar el tratamiento definitivo.",
        },
      ]}
    />
  );
}
