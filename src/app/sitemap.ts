import type { MetadataRoute } from "next";
import { ports, destinations, DATA_TODAY } from "@/data";
import { SITE_URL } from "./layout";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(DATA_TODAY + "T00:00:00Z");
  const entry = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    entry("/", 1.0, "daily"),
    entry("/cruises/luxury", 0.8, "daily"),
    entry("/cruises/adults-only", 0.8, "daily"),
    entry("/cruises/last-minute", 0.9, "daily"),
    entry("/cruises/under-500", 0.9, "daily"),
    entry("/affiliate-disclosure", 0.3, "monthly"),
    entry("/privacy", 0.3, "monthly"),
    ...ports.map((p) => entry(`/ports/${p.slug}`, 0.8, "daily" as const)),
    ...destinations.map((d) => entry(`/destinations/${d.slug}`, 0.8, "daily" as const)),
  ];
}
