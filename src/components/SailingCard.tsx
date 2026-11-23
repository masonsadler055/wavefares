import type { Sailing } from "@/data/types";
import { getPort, formatDate, formatChecked, pricePerNight } from "@/data";
import { dealUrl } from "@/lib/affiliate";

// Deterministic gradient per destination — styled typographic thumbnails
// instead of hotlinked photos (no expiring image URLs, no licensing risk).
const GRADIENTS: Record<string, string> = {
  alaska: "from-sky-700 via-cyan-800 to-deep",
  mexico: "from-amber-500 via-orange-600 to-rose-700",
  "eastern-caribbean": "from-teal-500 via-ocean to-deep",
  "western-caribbean": "from-emerald-500 via-teal-700 to-deep",
  "southern-caribbean": "from-indigo-500 via-ocean to-deep",
  bahamas: "from-cyan-400 via-wave to-ocean",
  bermuda: "from-pink-400 via-rose-500 to-purple-700",
  "canada-new-england": "from-orange-500 via-red-700 to-stone-800",
  hawaii: "from-lime-500 via-emerald-700 to-deep",
  "panama-canal": "from-yellow-500 via-amber-700 to-stone-800",
};

export default function SailingCard({ sailing }: { sailing: Sailing }) {
  const port = getPort(sailing.portSlug);
  const gradient = GRADIENTS[sailing.destinationSlug] ?? "from-ocean to-deep";
  const perNight = pricePerNight(sailing);

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      {/* Thumbnail */}
      <div className={`relative aspect-[16/9] bg-gradient-to-br ${gradient}`} aria-hidden="true">
        <div className="absolute inset-0 flex flex-col justify-end p-4">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-white/80">
            {sailing.destinationLabel}
          </span>
          <span className="font-display text-2xl font-bold leading-tight text-white drop-shadow">
            {sailing.ship}
          </span>
        </div>
        <div className="absolute right-3 top-3 flex flex-col items-end gap-1">
          {sailing.luxury && (
            <span className="rounded-full bg-gold px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-deep">
              Luxury
            </span>
          )}
          {sailing.adultsOnly && (
            <span className="rounded-full bg-purple-700 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white">
              Adults-Only 18+
            </span>
          )}
          {sailing.pricePerPerson < 500 && (
            <span className="rounded-full bg-coral px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white">
              Under $500
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-wave">{sailing.line}</p>
        <h3 className="mt-1 font-display text-lg font-bold leading-snug text-deep">
          {sailing.title}
        </h3>
        <p className="mt-1 text-sm text-slate-600">
          {sailing.nights} nights · Sails {formatDate(sailing.departureDate)}
        </p>
        <p className="mt-1 text-sm text-slate-600">
          From <span className="font-medium text-slate-800">{port ? `${port.city}, ${port.state}` : sailing.portSlug}</span>
        </p>
        <p className="mt-2 line-clamp-2 text-sm text-slate-500">
          {sailing.portsOfCall.join(" · ")}
        </p>

        <div className="mt-auto pt-4">
          <div className="flex items-end justify-between gap-2">
            <div>
              <p className="text-xs text-slate-500">From</p>
              <p className="text-2xl font-bold leading-none text-deep">
                ${sailing.pricePerPerson}
                <span className="ml-1 text-xs font-medium text-slate-500">per person</span>
              </p>
              <p className="mt-1 text-xs text-slate-500">${perNight}/night</p>
            </div>
            <p
              className="text-right text-xs font-medium text-emerald-700"
              title="WaveFares checks this fare against the cruise line's published prices every day."
            >
              ✓ {formatChecked(sailing.priceChecked)}
            </p>
          </div>
          {/* Every outbound deal link goes through the affiliate helper. */}
          <a
            href={dealUrl(sailing)}
            target="_blank"
            rel="noopener sponsored"
            className="mt-3 block min-h-[44px] rounded-lg bg-coral px-4 py-2.5 text-center font-semibold text-white transition hover:bg-orange-600"
            aria-label={`View this ${sailing.ship} deal on ${sailing.line} (opens the cruise line's site)`}
          >
            View Deal
          </a>
          <p className="mt-1.5 text-center text-[11px] text-slate-400">
            Books direct with {sailing.line} — we never add fees.
          </p>
        </div>
      </div>
    </article>
  );
}
