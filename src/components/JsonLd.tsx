export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD is data, not markup — safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const breadcrumbLd = (items: { name: string; path: string }[], siteUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${siteUrl}${item.path}`,
  })),
});

import type { Sailing } from "@/data/types";
import { dealUrl } from "@/lib/affiliate";

export const itemListLd = (sailings: Sailing[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: sailings.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${s.ship} — ${s.title}`,
    url: dealUrl(s),
  })),
});
