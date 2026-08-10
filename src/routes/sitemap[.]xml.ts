import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

import { ARTICULOS } from "@/lib/clinica";

const BASE_URL = "https://drmompeandental.app";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/servicios", changefreq: "monthly", priority: "0.9" },
          { path: "/invisalign", changefreq: "monthly", priority: "0.9" },
          { path: "/odontologia-estetica", changefreq: "monthly", priority: "0.9" },
          { path: "/odontopediatria", changefreq: "monthly", priority: "0.9" },
          { path: "/urgencias-dentales-murcia", changefreq: "monthly", priority: "0.9" },
          { path: "/sobre-nosotros", changefreq: "yearly", priority: "0.7" },
          { path: "/opiniones", changefreq: "monthly", priority: "0.7" },
          { path: "/contacto", changefreq: "yearly", priority: "0.8" },
          { path: "/blog", changefreq: "weekly", priority: "0.8" },
          ...ARTICULOS.map((a) => ({
            path: `/blog/${a.slug}`,
            changefreq: "yearly" as const,
            priority: "0.6",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
