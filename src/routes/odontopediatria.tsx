import { createFileRoute } from "@tanstack/react-router";

import odontoImg from "@/assets/odontopediatria.jpg";
import { TreatmentPage } from "@/components/site/TreatmentPage";

const TITULO = "Dentista pediátrico en Murcia | Odontopediatría Dres. Mompeán";
const DESCRIPCION =
  "Odontopediatría en Murcia: primera visita sin miedo, prevención de caries y trato paciente con los niños. Pide cita para tu hijo en el 678 69 98 33.";

export const Route = createFileRoute("/odontopediatria")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRIPCION },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRIPCION },
      { property: "og:url", content: "/odontopediatria" },
    ],
    links: [{ rel: "canonical", href: "/odontopediatria" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Odontopediatría",
          description: "Dentista para niños en Murcia: prevención, caries y primeras visitas sin miedo.",
          serviceType: "Odontopediatría",
          url: "https://drmompeandental.app/odontopediatria",
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
  component: Odontopediatria,
});

function Odontopediatria() {
  return (
    <TreatmentPage
      eyebrow="Odontopediatría en Murcia"
      h1="Dentista para niños en Murcia: que su primera vez sea una buena vez"
      intro="Nuestro objetivo con los peques no es solo curar caries: es que salgan de aquí sin miedo. Un niño que se lleva bien con el dentista será un adulto que cuida su boca."
      imagen={odontoImg}
      alt="Niño sonriente levantando el pulgar en el sillón de odontopediatría"
      bloques={[
        {
          h2: "¿Cuándo llevar a un niño al dentista por primera vez?",
          parrafos: [
            "La recomendación es alrededor del primer año de vida, o poco después de que aparezcan los primeros dientes. Suena pronto, pero esa visita no tiene nada de invasivo: miramos la boca, resolvemos dudas de higiene, chupete y alimentación, y sobre todo conseguimos algo muy valioso: que el niño conozca la consulta cuando no le duele nada.",
            "Ese detalle marca la diferencia. Si la primera vez que pisa una clínica es porque tiene dolor, asociará el sitio al dolor durante años. Si viene antes, la consulta es simplemente un lugar curioso con una silla que sube y baja.",
            "A partir de ahí, revisiones cada seis meses. Detectar una caries incipiente es un tratamiento de diez minutos; detectarla tarde puede suponer una endodoncia infantil o la pérdida de una pieza que todavía tenía trabajo que hacer.",
          ],
        },
        {
          h2: "Cómo trabajamos el miedo al dentista",
          parrafos: [
            "Usamos la técnica de decir, mostrar y hacer. Primero explicamos con palabras suyas qué vamos a hacer, luego se lo enseñamos en su mano o en un muñeco, y solo después lo hacemos en su boca. Sin sorpresas.",
            "Nunca engañamos a un niño. Si algo va a molestar un poco, se lo decimos. Perder su confianza el primer día significa perderla durante años.",
            "Vamos a su ritmo. Si un peque llega muy asustado, hacemos visitas cortas de adaptación en las que solo nos sentamos, contamos dientes y nos despedimos. Puede parecer poco productivo, pero es la mejor inversión posible.",
            "Y reforzamos siempre lo positivo. Terminamos con algo divertido para que el último recuerdo de la visita sea bueno.",
          ],
          lista: [
            "Citas preferentemente de media mañana, cuando están descansados.",
            "Padres dentro de la consulta cuando ayuda, fuera cuando distrae.",
            "Lenguaje adaptado: nada de “inyección”, “taladro” o “no te va a doler”.",
            "Sedación consciente en casos de ansiedad importante o tratamientos largos.",
          ],
        },
        {
          h2: "Tratamientos infantiles más habituales",
          parrafos: [
            "Los más frecuentes son las revisiones con fluorización, los selladores de fisuras en los molares definitivos —una barrera sencillísima que previene buena parte de las caries— y los empastes en dientes de leche.",
            "También controlamos el desarrollo de los maxilares y la mordida. Muchos problemas de ortodoncia se resuelven mucho mejor y más barato si se detectan a los 7 u 8 años, cuando el hueso todavía está creciendo.",
            "Y atendemos los traumatismos: golpes en el parque, en el colegio o haciendo deporte. Si a tu hijo se le rompe o se le mueve un diente, llámanos enseguida; las primeras horas cuentan.",
          ],
        },
        {
          h2: "Consejos que damos a todos los padres",
          parrafos: [
            "Cepillado dos veces al día, con pasta con flúor en la cantidad adecuada a su edad, y supervisado por un adulto hasta los 8 o 9 años. Hasta esa edad no tienen destreza suficiente para hacerlo bien solos.",
            "Cuidado con el azúcar entre horas: no es tanto la cantidad como la frecuencia. Un zumo a sorbitos toda la tarde hace más daño que un postre en la comida.",
            "Y evita transmitirle tu propio miedo. Si a ti te cuesta ir al dentista, intenta que le acompañe el adulto que esté más tranquilo. Los niños nos leen mucho mejor de lo que creemos.",
          ],
        },
      ]}
      faqs={[
        {
          pregunta: "¿Hay que empastar los dientes de leche?",
          respuesta:
            "Sí. Guardan el sitio a los definitivos y sirven para masticar y hablar. Una caries sin tratar puede doler, infectarse y afectar al diente que viene debajo.",
        },
        {
          pregunta: "¿Puedo entrar con mi hijo a la consulta?",
          respuesta:
            "Por supuesto. Valoramos en cada caso si tu presencia le tranquiliza o le distrae, y lo decidimos contigo.",
        },
        {
          pregunta: "¿Y si mi hijo no se deja mirar la boca?",
          respuesta:
            "No pasa nada, es más común de lo que crees. Hacemos visitas cortas de adaptación hasta que coja confianza, sin forzar nunca.",
        },
        {
          pregunta: "¿A qué edad se valora la ortodoncia?",
          respuesta:
            "Hacemos una primera valoración ortodóncica en torno a los 7 años, aunque el tratamiento se inicie más tarde en la mayoría de los casos.",
        },
      ]}
    />
  );
}
