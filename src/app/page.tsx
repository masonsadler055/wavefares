import Link from "next/link";
import {
  allSailings,
  ports,
  destinations,
  luxurySailings,
  cheapest,
  sailingsByPort,
  sailingsByDestination,
} from "@/data";
import SailingExplorer from "@/components/SailingExplorer";
import SailingCard from "@/components/SailingCard";
import JsonLd, { itemListLd } from "@/components/JsonLd";

export default function HomePage() {
  const lowest = cheapest(allSailings);
  const luxury = luxurySailings().slice(0, 4);

  return (
    <>
      <JsonLd data={itemListLd(allSailings.slice(0, 20))} />

      {/* Hero + search */}
      <section className="bg-deep text-white">
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-12">
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            Cruise deals from every U.S. port — <span className="text-wave">fares checked daily.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-200">
            We track real fares from all 20 major U.S. homeports and stamp every deal with the day we
            checked it. We don&apos;t sell cruises: find your fare here, then book it on Priceline
            Cruises at the same price.
          </p>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-sm">
            <div>
              <dt className="text-slate-300">Homeports covered</dt>
              <dd className="text-2xl font-bold">20</dd>
            </div>
            <div>
              <dt className="text-slate-300">Sailings tracked</dt>
              <dd className="text-2xl font-bold">{allSailings.length}</dd>
            </div>
            {lowest !== null && (
              <div>
                <dt className="text-slate-300">Cheapest fare right now</dt>
                <dd className="text-2xl font-bold">${lowest} <span className="text-sm font-medium text-slate-300">per person</span></dd>
              </div>
            )}
          </dl>
        </div>
      </section>

      {/* Search + featured feed */}
      <section className="mx-auto max-w-7xl px-4 py-10" aria-label="Search cruise deals">
        <h2 className="font-display text-2xl font-bold text-deep">Today&apos;s checked deals</h2>
        <p className="mb-5 mt-1 text-slate-600">
          Search by ship, line, port or month. Every card shows the day its fare was last verified.
        </p>
        <SailingExplorer sailings={allSailings} heading="Today's checked deals" />
      </section>

      {/* Ports grid */}
      <section id="ports" className="bg-foam py-12" aria-label="Cruise ports">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display text-2xl font-bold text-deep">All 20 U.S. cruise homeports</h2>
          <p className="mb-6 mt-1 text-slate-600">
            Parking rates, airport transfers, hotel picks and boarding-day tips for every port — plus
            its live deals.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ports.map((p) => {
              const list = sailingsByPort(p.slug);
              const low = cheapest(list);
              return (
                <li key={p.slug}>
                  <Link
                    href={`/ports/${p.slug}`}
                    className="block h-full rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
                  >
                    <span className="font-display text-lg font-bold text-deep">
                      {p.city}, {p.state}
                    </span>
                    <span className="mt-1 block text-sm text-slate-500">{p.tagline}</span>
                    <span className="mt-3 block text-sm font-medium text-ocean">
                      {list.length > 0
                        ? `${list.length} deals${low !== null ? ` · from $${low}` : ""}`
                        : "Port guide · deals coming"}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Destination hubs */}
      <section id="destinations" className="mx-auto max-w-7xl px-4 py-12" aria-label="Destinations">
        <h2 className="font-display text-2xl font-bold text-deep">Browse by destination</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => {
            const list = sailingsByDestination(d.slug);
            const low = cheapest(list);
            return (
              <Link
                key={d.slug}
                href={`/destinations/${d.slug}`}
                className="rounded-xl bg-gradient-to-br from-ocean to-deep p-5 text-white shadow-sm transition hover:shadow-md"
              >
                <span className="font-display text-xl font-bold">{d.name}</span>
                <span className="mt-1 block text-sm text-slate-200">{d.tagline}</span>
                <span className="mt-3 block text-sm font-medium text-foam">
                  {list.length > 0 ? `${list.length} sailings · from $${low}` : "Guide · deals coming soon"}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Luxury section */}
      {luxury.length > 0 && (
        <section className="bg-sand py-12" aria-label="Luxury cruises">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="font-display text-2xl font-bold text-deep">The Luxury Edit</h2>
                <p className="mt-1 text-slate-600">
                  Premium lines and suites — Celebrity, Princess, Holland America and the ultra-luxury
                  fleets — with the same daily fare checks.
                </p>
              </div>
              <Link href="/cruises/luxury" className="font-semibold text-ocean hover:underline">
                See all luxury cruises →
              </Link>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {luxury.map((s) => (
                <SailingCard key={s.id} sailing={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How it works / freshness */}
      <section className="mx-auto max-w-7xl px-4 py-12" aria-label="How WaveFares works">
        <h2 className="font-display text-2xl font-bold text-deep">How WaveFares works</h2>
        <ol className="mt-6 grid gap-5 md:grid-cols-3">
          <li className="rounded-xl border border-slate-200 p-5">
            <p className="font-display text-lg font-bold text-deep">1. We check fares daily</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Every listing carries a “Price checked” stamp with the date we last verified it on
              Priceline Cruises. Stale prices are the enemy — we hunt them down
              every day.
            </p>
          </li>
          <li className="rounded-xl border border-slate-200 p-5">
            <p className="font-display text-lg font-bold text-deep">2. You book on Priceline</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              “View Deal” takes you to that sailing&apos;s page on Priceline Cruises. Same sailing,
              no fees added by us — WaveFares may earn a commission from Priceline at no extra
              cost to you.
            </p>
          </li>
          <li className="rounded-xl border border-slate-200 p-5">
            <p className="font-display text-lg font-bold text-deep">3. Links pay our bills</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Some outbound links earn us a commission from the cruise line at no extra cost to you.
              That&apos;s how the daily checks stay free.{" "}
              <Link href="/affiliate-disclosure" className="font-medium text-ocean underline">
                How we make money
              </Link>
            </p>
          </li>
        </ol>
      </section>
    </>
  );
}
