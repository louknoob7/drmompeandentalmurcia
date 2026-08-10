import { createFileRoute } from "@tanstack/react-router";

import { CLINICA } from "@/lib/clinica";
import { Section } from "@/components/site/ui";

const TITULO = "Política de privacidad | Clínica Dental Dres. Mompeán";
const DESCRIPCION =
  "Cómo tratamos los datos personales de los pacientes y usuarios en la Clínica Dental Dres. Mompeán de Murcia.";

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRIPCION },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRIPCION },
      { property: "og:url", content: "/politica-de-privacidad" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidad" }],
  }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <Section className="pt-12">
      <div className="mx-auto max-w-3xl space-y-4 text-muted-foreground">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Política de privacidad</h1>
        <h2 className="pt-4 text-xl font-bold text-foreground">Responsable del tratamiento</h2>
        <p>
          Clínica Dental Dres. Mompeán, con domicilio en {CLINICA.direccion} y teléfono{" "}
          {CLINICA.telefono}.
        </p>
        <h2 className="pt-4 text-xl font-bold text-foreground">Finalidad</h2>
        <p>
          Tratamos los datos que nos facilitas a través del formulario de cita, del asistente
          virtual o por teléfono con una única finalidad: gestionar tu solicitud de cita, contactar
          contigo para confirmarla y prestarte la asistencia odontológica solicitada.
        </p>
        <h2 className="pt-4 text-xl font-bold text-foreground">Legitimación</h2>
        <p>
          La base legal es tu consentimiento al enviar la solicitud y, en su caso, la ejecución de
          la relación asistencial y el cumplimiento de las obligaciones sanitarias aplicables.
        </p>
        <h2 className="pt-4 text-xl font-bold text-foreground">Conservación</h2>
        <p>
          Conservamos los datos durante el tiempo necesario para gestionar la cita y, cuando llegues
          a ser paciente, durante los plazos que exige la normativa de historia clínica.
        </p>
        <h2 className="pt-4 text-xl font-bold text-foreground">Destinatarios</h2>
        <p>
          No cedemos tus datos a terceros salvo obligación legal. Utilizamos proveedores
          tecnológicos de alojamiento y bases de datos que actúan como encargados del tratamiento
          con las garantías exigidas por el RGPD.
        </p>
        <h2 className="pt-4 text-xl font-bold text-foreground">Tus derechos</h2>
        <p>
          Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y
          portabilidad escribiéndonos o llamando al {CLINICA.telefono}. También puedes reclamar ante
          la Agencia Española de Protección de Datos.
        </p>
      </div>
    </Section>
  );
}
