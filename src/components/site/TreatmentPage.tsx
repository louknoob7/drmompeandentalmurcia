import type { ReactNode } from "react";
import { Check, HelpCircle } from "lucide-react";

import { CLINICA } from "@/lib/clinica";
import {
  CtaLink,
  Eyebrow,
  FinalCta,
  PhoneButton,
  Section,
  WhatsAppTextButton,
} from "@/components/site/ui";

export type Bloque = { h2: string; parrafos: string[]; lista?: string[] };
export type Faq = { pregunta: string; respuesta: string };

export function TreatmentPage({
  eyebrow,
  h1,
  intro,
  imagen,
  alt,
  bloques,
  faqs,
  extra,
  urgente = false,
}: {
  eyebrow: string;
  h1: string;
  intro: string;
  imagen: string;
  alt: string;
  bloques: Bloque[];
  faqs: Faq[];
  extra?: ReactNode;
  urgente?: boolean;
}) {
  return (
    <>
      <Section className="bg-soft-gradient pb-10 pt-12 md:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              {h1}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {urgente ? (
                <PhoneButton label={`Llamar ahora ${CLINICA.telefono}`} />
              ) : (
                <CtaLink to="/contacto" variant="accent">
                  Pedir cita
                </CtaLink>
              )}
              <WhatsAppTextButton />
            </div>
          </div>
          <div className="overflow-hidden rounded-4xl shadow-soft">
            <img
              src={imagen}
              alt={alt}
              width={1400}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section className="pt-6">
        <div className="grid gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <article className="space-y-10">
            {bloques.map((b) => (
              <div key={b.h2}>
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{b.h2}</h2>
                {b.parrafos.map((p) => (
                  <p key={p.slice(0, 30)} className="mt-4 leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
                {b.lista ? (
                  <ul className="mt-5 space-y-2.5">
                    {b.lista.map((li) => (
                      <li key={li} className="flex gap-3 text-muted-foreground">
                        <Check className="mt-1 size-4 shrink-0 text-mint-foreground" aria-hidden="true" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
            {extra}
          </article>

          <aside className="h-fit rounded-3xl border border-border bg-card p-6 shadow-card md:sticky md:top-24">
            <h2 className="font-display text-lg font-bold text-foreground">
              Pide tu valoración sin compromiso
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Te vemos, te escuchamos y te damos un plan claro y un presupuesto cerrado. Sin prisas
              y sin tecnicismos.
            </p>
            <div className="mt-5 space-y-2.5">
              <CtaLink to="/contacto" variant="accent" className="w-full">
                Pedir cita
              </CtaLink>
              <PhoneButton className="w-full" />
              <WhatsAppTextButton className="w-full" />
            </div>
            <dl className="mt-6 space-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
              <div>
                <dt className="font-semibold text-foreground">Dónde estamos</dt>
                <dd>{CLINICA.direccion}</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Horario</dt>
                <dd>{CLINICA.horario}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </Section>

      <Section className="bg-secondary/50">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Preguntas frecuentes</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.pregunta} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="flex gap-2 font-display text-base font-bold text-foreground">
                <HelpCircle className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                {f.pregunta}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.respuesta}</p>
            </div>
          ))}
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
