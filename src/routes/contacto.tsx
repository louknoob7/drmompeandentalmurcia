import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { AppointmentForm } from "@/components/site/AppointmentForm";
import { CLINICA } from "@/lib/clinica";
import { Eyebrow, MapEmbed, Section, WhatsAppTextButton } from "@/components/site/ui";

const TITULO = "Contacto y cita previa | Clínica Dental Dres. Mompeán Murcia";
const DESCRIPCION =
  "Pide cita en nuestra clínica dental de Murcia: C. Calderón de la Barca 14, 4ºA. Teléfono 678 69 98 33. Lunes a jueves de 8:30 a 14:30.";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRIPCION },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRIPCION },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: Contacto,
});

function Contacto() {
  return (
    <>
      <Section className="bg-soft-gradient pb-8 pt-12 md:pt-16">
        <Eyebrow>Contacto</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-foreground sm:text-5xl">
          Pide tu cita en nuestra clínica dental de Murcia
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Rellena el formulario y te llamamos para confirmar el hueco, o llámanos directamente si
          prefieres resolverlo en un minuto.
        </p>
      </Section>

      <Section className="pt-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-4xl border border-border bg-card p-6 shadow-card sm:p-8">
            <h2 className="text-xl font-bold text-foreground">Solicitar cita</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Te confirmamos por teléfono en horario de clínica.
            </p>
            <div className="mt-6">
              <AppointmentForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-4xl border border-border bg-card p-6 shadow-card sm:p-8">
              <h2 className="text-xl font-bold text-foreground">Datos de contacto</h2>
              <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{CLINICA.direccion}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <a
                    href={`tel:${CLINICA.telefonoTel}`}
                    className="font-semibold text-foreground hover:text-primary"
                  >
                    {CLINICA.telefono}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{CLINICA.horario}</span>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    ¿Fuera de horario? Escríbenos por WhatsApp o usa el asistente virtual: te
                    respondemos en cuanto abrimos.
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <WhatsAppTextButton />
              </div>
            </div>

            <div className="overflow-hidden rounded-4xl border border-border shadow-card">
              <MapEmbed title="Ubicación de la Clínica Dental Dres. Mompeán en Murcia" />
            </div>

            <div className="rounded-4xl border border-border bg-secondary/60 p-6">
              <h2 className="text-base font-bold text-foreground">Cómo llegar y aparcar</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Estamos en pleno centro de Murcia, a pocos minutos andando de la Plaza Circular y
                de la Gran Vía, con varias líneas de autobús a menos de cinco minutos. Si vienes en
                coche, tienes aparcamientos públicos muy cerca y zona azul en las calles
                colindantes. La clínica está en el piso 4ºA y el edificio dispone de ascensor.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
