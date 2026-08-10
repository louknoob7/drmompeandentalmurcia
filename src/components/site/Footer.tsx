import { Link } from "@tanstack/react-router";
import { Clock, Instagram, Facebook, MapPin, Phone, Music2 } from "lucide-react";

import { CLINICA, SERVICIOS } from "@/lib/clinica";
import { MapEmbed, WhatsAppTextButton } from "@/components/site/ui";
const logoMompean = { url: "/logo-mompean.png" };

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div>
          <img
            src={logoMompean.url}
            alt={CLINICA.nombre}
            className="h-12 w-auto max-w-[240px] object-contain"
            width={480}
            height={132}
          />

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Cuidamos tu sonrisa en el centro de Murcia con trato cercano, tecnología actual y
            tiempos de espera mínimos.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={CLINICA.redes.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de la clínica"
              className="grid size-10 place-items-center rounded-full bg-card text-primary shadow-card transition-colors hover:bg-primary-soft"
            >
              <Instagram className="size-5" aria-hidden="true" />
            </a>
            <a
              href={CLINICA.redes.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de la clínica"
              className="grid size-10 place-items-center rounded-full bg-card text-primary shadow-card transition-colors hover:bg-primary-soft"
            >
              <Facebook className="size-5" aria-hidden="true" />
            </a>
            <a
              href={CLINICA.redes.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok de la clínica"
              className="grid size-10 place-items-center rounded-full bg-card text-primary shadow-card transition-colors hover:bg-primary-soft"
            >
              <Music2 className="size-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-foreground">
            Tratamientos
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICIOS.map((s) => (
              <li key={s.slug}>
                <Link to={s.ruta} className="text-muted-foreground hover:text-primary">
                  {s.titulo}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/servicios" className="text-muted-foreground hover:text-primary">
                Todos los servicios
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-foreground">
            Contacto
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={CLINICA.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                {CLINICA.direccion}
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={`tel:${CLINICA.telefonoTel}`} className="hover:text-primary">
                {CLINICA.telefono}
              </a>
            </li>
            <li className="flex gap-2">
              <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{CLINICA.horario}</span>
            </li>
          </ul>
          <WhatsAppTextButton className="mt-5 w-full px-4 py-2.5 text-xs sm:w-auto" />
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-foreground">
            Dónde estamos
          </h2>
          <div className="mt-4 h-40 overflow-hidden rounded-2xl shadow-card">
            <MapEmbed title="Mini mapa de la clínica dental en Murcia" />
          </div>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {CLINICA.nombre}. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link to="/aviso-legal" className="hover:text-primary">
              Aviso legal
            </Link>
            <Link to="/politica-de-privacidad" className="hover:text-primary">
              Política de privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
