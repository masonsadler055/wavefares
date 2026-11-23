import Link from "next/link";
import { ports, destinations } from "@/data";

export default function Footer() {
  return (
    <footer className="mt-16 bg-deep text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4">
        <div>
          <p className="font-display text-xl font-bold text-white">
            Wave<span className="text-wave">Fares</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            We find cruise deals and check the fares daily. We don&apos;t sell cruises — every booking
            happens directly with the cruise line, at the cruise line&apos;s price.
          </p>
        </div>
        <nav aria-label="Top ports">
          <p className="font-semibold text-white">Popular ports</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {ports.slice(0, 8).map((p) => (
              <li key={p.slug}>
                <Link href={`/ports/${p.slug}`} className="hover:underline">
                  Cruises from {p.city}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Destinations">
          <p className="font-semibold text-white">Destinations</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {destinations.slice(0, 8).map((d) => (
              <li key={d.slug}>
                <Link href={`/destinations/${d.slug}`} className="hover:underline">
                  {d.name} cruises
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Company">
          <p className="font-semibold text-white">Good to know</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            <li>
              <Link href="/cruises/luxury" className="hover:underline">Luxury cruises</Link>
            </li>
            <li>
              <Link href="/cruises/last-minute" className="hover:underline">Last-minute deals</Link>
            </li>
            <li>
              <Link href="/cruises/under-500" className="hover:underline">Cruises under $500</Link>
            </li>
            <li>
              <Link href="/affiliate-disclosure" className="hover:underline">Affiliate disclosure</Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">Privacy policy</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs leading-relaxed text-slate-300">
          <p>
            Affiliate disclosure: WaveFares may earn a commission when you click links on this site and
            book with a cruise line — at no extra cost to you. Prices are per person, based on double
            occupancy, and change constantly; the fare on the cruise line&apos;s site at booking time is
            the one that counts. See our{" "}
            <Link href="/affiliate-disclosure" className="underline">full disclosure</Link>.
          </p>
          <p className="mt-2">© {new Date().getFullYear()} WaveFares.com — Not affiliated with any cruise line. All cruise line and ship names belong to their owners.</p>
        </div>
      </div>
    </footer>
  );
}
