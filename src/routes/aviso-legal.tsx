import { createFileRoute } from "@tanstack/react-router";

import { CLINICA } from "@/lib/clinica";
import { Section } from "@/components/site/ui";

const TITULO = "Aviso legal | Clínica Dental Dres. Mompeán";
const DESCRIPCION =
  "Aviso legal y condiciones de uso del sitio web de la Clínica Dental Dres. Mompeán en Murcia.";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRIPCION },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRIPCION },
      { property: "og:url", content: "/aviso-legal" },
    ],
    links: [{ rel: "canonical", href: "/aviso-legal" }],
  }),
  component: AvisoLegal,
});

function AvisoLegal() {
  return (
    <Section className="pt-12">
      <div className="mx-auto max-w-3xl space-y-4 text-muted-foreground">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Aviso legal</h1>
        <h2 className="pt-4 text-xl font-bold text-foreground">Titular del sitio web</h2>
        <p>
          Clínica Dental Dres. Mompeán. Domicilio: {CLINICA.direccion}. Teléfono:{" "}
          {CLINICA.telefono}. Puedes solicitar los datos fiscales y el número de registro sanitario
          de la clínica llamando a ese mismo teléfono.
        </p>
        <h2 className="pt-4 text-xl font-bold text-foreground">Objeto</h2>
        <p>
          Este sitio web tiene carácter informativo sobre los servicios odontológicos que presta la
          clínica. Su contenido no sustituye en ningún caso a una consulta profesional ni constituye
          diagnóstico o prescripción.
        </p>
        <h2 className="pt-4 text-xl font-bold text-foreground">Propiedad intelectual</h2>
        <p>
          Los textos, imágenes, logotipos y demás elementos de este sitio son titularidad de la
          clínica o se utilizan con la debida autorización. Queda prohibida su reproducción total o
          parcial sin consentimiento expreso.
        </p>
        <h2 className="pt-4 text-xl font-bold text-foreground">Responsabilidad</h2>
        <p>
          La clínica no se hace responsable del uso que los usuarios puedan hacer de la información
          publicada, ni de los contenidos de sitios de terceros enlazados desde esta web.
        </p>
        <h2 className="pt-4 text-xl font-bold text-foreground">Legislación aplicable</h2>
        <p>
          Las relaciones derivadas del uso de este sitio se rigen por la legislación española y se
          someten a los juzgados y tribunales de Murcia.
        </p>
      </div>
    </Section>
  );
}
