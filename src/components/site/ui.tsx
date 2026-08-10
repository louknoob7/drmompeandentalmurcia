import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Star, Phone, MessageCircle } from "lucide-react";

import { CLINICA } from "@/lib/clinica";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("px-5 py-16 sm:px-8 md:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
      {children}
    </span>
  );
}

export function Stars({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="size-4 fill-star text-star" aria-hidden="true" />
      ))}
    </span>
  );
}

export function CtaLink({
  to,
  children,
  variant = "primary",
  className,
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "accent" | "outline";
  className?: string;
}) {
  return (
    <Link to={to} className={cn(ctaClasses(variant), className)}>
      {children}
    </Link>
  );
}

export function ctaClasses(variant: "primary" | "accent" | "outline" | "ghost" = "primary") {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
  const variants = {
    primary: "bg-primary text-primary-foreground shadow-soft hover:brightness-110",
    accent: "bg-accent text-accent-foreground shadow-soft hover:brightness-105",
    outline: "border border-border bg-card text-foreground hover:bg-secondary",
    ghost: "text-primary hover:bg-primary-soft",
  };
  return `${base} ${variants[variant]}`;
}

export function WhatsAppTextButton({ className }: { className?: string }) {
  return (
    <a
      href={CLINICA.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-105",
        className,
      )}
    >
      <MessageCircle className="size-4" aria-hidden="true" />
      Escríbenos por WhatsApp
    </a>
  );
}

export function PhoneButton({
  className,
  label = `Llamar ${CLINICA.telefono}`,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a href={`tel:${CLINICA.telefonoTel}`} className={cn(ctaClasses("accent"), className)}>
      <Phone className="size-4" aria-hidden="true" />
      {label}
    </a>
  );
}

export function RatingBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-full bg-card/90 px-4 py-2 shadow-card",
        className,
      )}
    >
      <span className="text-lg font-bold text-foreground">{CLINICA.valoracion}</span>
      <Stars />
      <span className="text-sm text-muted-foreground">{CLINICA.resenas} reseñas en Google</span>
    </div>
  );
}

export function MapEmbed({ className, title }: { className?: string; title?: string }) {
  return (
    <iframe
      title={title ?? `Mapa de ${CLINICA.nombre} en Murcia`}
      src={CLINICA.mapsEmbed}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={cn("h-full w-full border-0", className)}
    />
  );
}

export function FinalCta({
  titulo = "¿Damos el primer paso juntos?",
  texto = "Pide tu cita sin compromiso. Te llamamos, te escuchamos y te explicamos con calma qué necesita tu boca.",
}: {
  titulo?: string;
  texto?: string;
}) {
  return (
    <Section className="pb-24">
      <div className="rounded-4xl bg-hero-gradient px-6 py-14 text-center shadow-soft sm:px-12">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold text-primary-foreground sm:text-4xl">
          {titulo}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/85">{texto}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <CtaLink to="/contacto" variant="accent">
            Pedir cita
          </CtaLink>
          <WhatsAppTextButton />
        </div>
      </div>
    </Section>
  );
}
