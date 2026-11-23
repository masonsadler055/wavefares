import Link from "next/link";

const nav = [
  { href: "/#ports", label: "Ports" },
  { href: "/#destinations", label: "Destinations" },
  { href: "/cruises/luxury", label: "Luxury" },
  { href: "/cruises/adults-only", label: "Adults-Only" },
  { href: "/cruises/last-minute", label: "Last-Minute" },
  { href: "/cruises/under-500", label: "Under $500" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-deep text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-baseline gap-2" aria-label="WaveFares home">
          <span className="font-display text-2xl font-bold tracking-tight">
            Wave<span className="text-wave">Fares</span>
          </span>
          <span className="hidden text-xs text-slate-300 sm:inline">cruise deals, checked daily</span>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-slate-100 hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
