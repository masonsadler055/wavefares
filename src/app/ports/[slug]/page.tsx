import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ports, getPort, sailingsByPort, cheapest } from "@/data";
import SailingExplorer from "@/components/SailingExplorer";
import JsonLd, { breadcrumbLd, itemListLd } from "@/components/JsonLd";
import { SITE_URL } from "../../layout";

export const dynamicParams = false;

export function generateStaticParams() {
  return ports.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const port = getPort(slug);
  if (!port) return {};
  const list = sailingsByPort(slug);
  const low = cheapest(list);
  return {
    title: `Cruises from ${port.city}, ${port.state} — Deals from ${low ? `$${low}` : "Every Line"}`,
    description: `${port.blurb} Parking, airport transfers, hotels and boarding tips for ${port.name}, plus cruise deals checked daily${low ? ` from $${low} per person` : ""}.`,
    alternates: { canonical: `/ports/${slug}` },
  };
}

export default async function PortPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const port = getPort(slug);
  if (!port) notFound();
  const list = sailingsByPort(slug);
  const others = ports.filter((p) => p.slug !== slug).slice(0, 6);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <JsonLd
        data={breadcrumbLd(
          [
            { name: "Home", path: "/" },
            { name: "Ports", path: "/#ports" },
            { name: `${port.city}, ${port.state}`, path: `/ports/${slug}` },
          ],
          SITE_URL,
        )}
      />
      {list.length > 0 && <JsonLd data={itemListLd(list)} />}

      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link href="/" className="hover:underline">Home</Link> {" / "}
        <Link href="/#ports" className="hover:underline">Ports</Link> {" / "}
        <span aria-current="page" className="text-slate-700">{port.city}, {port.state}</span>
      </nav>

      <h1 className="mt-3 font-display text-4xl font-bold text-deep">
        Cruises from {port.city}, {port.state}
      </h1>
      <p className="mt-2 max-w-3xl text-lg text-slate-600">{port.tagline}</p>
      <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">{port.blurb}</p>

      {/* Port Intelligence */}
      <section aria-label={`${port.name} port intelligence`} className="mt-8">
        <h2 className="font-display text-2xl font-bold text-deep">
          {port.name} — Port Intelligence
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-xl border border-slate-200 bg-foam p-5">
            <h3 className="font-semibold text-deep">✈️ Fly in: {port.airport.code}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              <span className="font-medium text-slate-800">{port.airport.name}</span> is the nearest
              airport — {port.airport.transferTime} to the terminal.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{port.airport.note}</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-foam p-5">
            <h3 className="font-semibold text-deep">🚗 Terminal &amp; parking</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              <span className="font-medium text-slate-800">{port.terminalAddress}</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Parking: {port.parking.portDailyRate}{" "}
              <span className="text-slate-500">(rates are approximate — confirm before you sail).</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{port.parking.note}</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-foam p-5">
            <h3 className="font-semibold text-deep">🏨 Stay the night before</h3>
            <ul className="mt-2 space-y-2 text-sm leading-relaxed text-slate-600">
              {port.hotelAreas.map((h) => (
                <li key={h.name}>
                  <span className="font-medium text-slate-800">{h.name}:</span> {h.note}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-xl border border-slate-200 bg-foam p-5">
            <h3 className="font-semibold text-deep">🧳 Boarding day</h3>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-600">
              {port.embarkationTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* Sailings from this port */}
      <section className="mt-10" aria-label={`Cruise deals from ${port.city}`}>
        <h2 className="font-display text-2xl font-bold text-deep">
          Deals sailing from {port.city}
        </h2>
        <p className="mb-5 mt-1 text-slate-600">
          Fares checked daily. “View Deal” books direct with the cruise line.
        </p>
        <SailingExplorer sailings={list} lockPort={slug} heading={`Deals from ${port.city}`} />
      </section>

      {/* Cross-links */}
      <section className="mt-12" aria-label="Other ports">
        <h2 className="font-display text-xl font-bold text-deep">Other ports to compare</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {others.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/ports/${p.slug}`}
                className="inline-block rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-ocean hover:bg-foam"
              >
                Cruises from {p.city}, {p.state}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
