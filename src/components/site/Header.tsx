import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";

import { CLINICA, SERVICIOS } from "@/lib/clinica";
import { ctaClasses } from "@/components/site/ui";
import logoMompean from "@/assets/logo-mompean.png.asset.json";

const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios", hijos: true },
  { to: "/blog", label: "Blog" },
  { to: "/opiniones", label: "Opiniones" },
  { to: "/sobre-nosotros", label: "Sobre nosotros" },
  { to: "/contacto", label: "Contacto" },
];

export function Header() {
  const [abierto, setAbierto] = useState(false);
  const [serviciosAbiertos, setServiciosAbiertos] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:px-8">
        <Link to="/" className="flex min-w-0 items-center">
          <img
            src={logoMompean.url}
            alt="Clínica Dental Dres. Mompeán, Murcia"
            className="h-11 w-auto max-w-[240px] object-contain sm:h-12"
            width={480}
            height={132}
          />
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
            {NAV.map((item) =>
              item.hijos ? (
                <div key={item.to} className="group relative">
                  <Link
                    to={item.to}
                    className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {item.label}
                    <ChevronDown className="size-4" aria-hidden="true" />
                  </Link>
                  <div className="invisible absolute left-0 top-full w-72 pt-2 opacity-0 transition-all group-hover:visible group-focus-within:visible group-hover:opacity-100 group-focus-within:opacity-100">
                    <ul className="rounded-2xl border border-border bg-popover p-2 shadow-soft">
                      {SERVICIOS.map((s) => (
                        <li key={s.slug}>
                          <Link
                            to={s.ruta}
                            className="block rounded-xl px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-secondary"
                          >
                            {s.titulo}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "bg-secondary text-foreground" }}
                  className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <a
            href={`tel:${CLINICA.telefonoTel}`}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-primary hover:bg-primary-soft md:inline-flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {CLINICA.telefono}
          </a>

          <Link to="/contacto" className={`${ctaClasses("accent")} hidden px-5 py-2.5 sm:inline-flex`}>
            Pedir cita
          </Link>

          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={abierto}
            className="grid size-10 place-items-center rounded-full border border-border text-foreground lg:hidden"
          >
            {abierto ? <Menu className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {abierto ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8" aria-label="Menú móvil">
            {NAV.map((item) => (
              <div key={item.to}>
                <div className="flex items-center justify-between">
                  <Link
                    to={item.to}
                    onClick={() => setAbierto(false)}
                    className="flex-1 rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
                  >
                    {item.label}
                  </Link>
                  {item.hijos ? (
                    <button
                      type="button"
                      onClick={() => setServiciosAbiertos((v) => !v)}
                      aria-label="Ver tratamientos"
                      className="grid size-10 place-items-center rounded-xl text-foreground hover:bg-secondary"
                    >
                      {serviciosAbiertos ? <X className="size-4" /> : <ChevronDown className="size-4" />}
                    </button>
                  ) : null}
                </div>
                {item.hijos && serviciosAbiertos ? (
                  <ul className="ml-3 border-l border-border pl-3">
                    {SERVICIOS.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={s.ruta}
                          onClick={() => setAbierto(false)}
                          className="block rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                        >
                          {s.titulo}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
            <Link
              to="/contacto"
              onClick={() => setAbierto(false)}
              className={`${ctaClasses("accent")} mt-3`}
            >
              Pedir cita
            </Link>
            <a
              href={`tel:${CLINICA.telefonoTel}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground"
            >
              <Phone className="size-4" aria-hidden="true" />
              {CLINICA.telefono}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
