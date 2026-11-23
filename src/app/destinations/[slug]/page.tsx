import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations, getDestination, sailingsByDestination, cheapest, ports, sailingsByPort } from "@/data";
import SailingExplorer from "@/components/SailingExplorer";
import JsonLd, { breadcrumbLd, itemListLd } from "@/components/JsonLd";
import { SITE_URL } from "../../layout";

export const dynamicParams = false;

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) return {};
  const low = cheapest(sailingsByDestination(slug));
  return {
    title: `${dest.name} Cruises — Deals${low ? ` from $${low}` : ""}, Checked Daily`,
    description: `${dest.blurb}${low ? ` Current fares from $${low} per person.` : ""}`,
    alternates: { canonical: `/destinations/${slug}` },
  };
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) notFound();
  const list = sailingsByDestination(slug);
  const departPorts = ports.filter((p) => sailingsByPort(p.slug).some((s) => s.destinationSlug === slug));
  const others = destinations.filter((d) => d.slug !== slug).slice(0, 5);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <JsonLd
        data={breadcrumbLd(
          [
            { name: "Home", path: "/" },
            { name: "Destinations", path: "/#destinations" },
            { name: dest.name, path: `/destinations/${slug}` },
          ],
          SITE_URL,
        )}
      />
      {list.length > 0 && <JsonLd data={itemListLd(list)} />}

      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link href="/" className="hover:underline">Home</Link> {" / "}
        <Link href="/#destinations" className="hover:underline">Destinations</Link> {" / "}
        <span aria-current="page" className="text-slate-700">{dest.name}</span>
      </nav>

      <h1 className="mt-3 font-display text-4xl font-bold text-deep">{dest.name} Cruises</h1>
      <p className="mt-2 max-w-3xl text-lg text-slate-600">{dest.tagline}</p>
      <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">{dest.blurb}</p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Signature stops">
        {dest.highlights.map((h) => (
          <li key={h} className="rounded-full bg-foam px-3 py-1 text-sm font-medium text-ocean">
            {h}
          </li>
        ))}
      </ul>

      {departPorts.length > 0 && (
        <p className="mt-5 text-sm text-slate-600">
          Sails from:{" "}
          {departPorts.map((p, i) => (
            <span key={p.slug}>
              {i > 0 && " · "}
              <Link href={`/ports/${p.slug}`} className="font-medium text-ocean hover:underline">
                {p.city}, {p.state}
              </Link>
            </span>
          ))}
        </p>
      )}

      <section className="mt-8" aria-label={`${dest.name} cruise deals`}>
        <h2 className="font-display text-2xl font-bold text-deep">{dest.name} deals, checked daily</h2>
        <div className="mt-4">
          <SailingExplorer sailings={list} lockDestination={slug} heading={`${dest.name} deals`} />
        </div>
      </section>

      <section className="mt-12" aria-label="More destinations">
        <h2 className="font-display text-xl font-bold text-deep">Keep exploring</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {others.map((d) => (
            <li key={d.slug}>
              <Link
                href={`/destinations/${d.slug}`}
                className="inline-block rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-ocean hover:bg-foam"
              >
                {d.name} cruises
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
