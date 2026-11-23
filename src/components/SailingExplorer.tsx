"use client";

import { useMemo, useState } from "react";
import type { Sailing } from "@/data/types";
import { ports, destinations, monthKey, monthLabel } from "@/data";
import SailingCard from "./SailingCard";
import AdSlot from "./AdSlot";

type SortKey = "recommended" | "price-asc" | "price-desc" | "per-night" | "soonest" | "shortest" | "longest";

const SORTS: { key: SortKey; label: string }[] = [
  { key: "recommended", label: "Recommended" },
  { key: "price-asc", label: "Price: Low to High" },
  { key: "price-desc", label: "Price: High to Low" },
  { key: "per-night", label: "Price Per Night: Low to High" },
  { key: "soonest", label: "Departure: Soonest" },
  { key: "shortest", label: "Trip Length: Shortest" },
  { key: "longest", label: "Trip Length: Longest" },
];

interface Props {
  sailings: Sailing[];
  lockPort?: string;
  lockDestination?: string;
  heading?: string;
}

/**
 * Search + filter + sort feed used on the home page, port pages,
 * destination hubs and specialty pages. Ad slots are injected after
 * every 4 cards (and render only when AdSense is configured).
 */
export default function SailingExplorer({ sailings, lockPort, lockDestination, heading }: Props) {
  const [query, setQuery] = useState("");
  const [port, setPort] = useState(lockPort ?? "");
  const [destination, setDestination] = useState(lockDestination ?? "");
  const [line, setLine] = useState("");
  const [month, setMonth] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState<SortKey>("recommended");

  const lineOptions = useMemo(() => {
    const map = new Map<string, string>();
    for (const s of sailings) map.set(s.lineSlug, s.line);
    return [...map.entries()].map(([slug, name]) => ({ slug, name })).sort((a, b) => a.name.localeCompare(b.name));
  }, [sailings]);

  const monthOptions = useMemo(
    () => [...new Set(sailings.map((s) => monthKey(s.departureDate)))].sort(),
    [sailings],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = sailings.filter((s) => {
      if (port && s.portSlug !== port) return false;
      if (destination && s.destinationSlug !== destination) return false;
      if (line && s.lineSlug !== line) return false;
      if (month && monthKey(s.departureDate) !== month) return false;
      if (maxPrice && s.pricePerPerson > Number(maxPrice)) return false;
      if (q) {
        const haystack = `${s.ship} ${s.line} ${s.title} ${s.destinationLabel} ${s.portsOfCall.join(" ")}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
    const by = {
      recommended: (a: Sailing, b: Sailing) =>
        Number(b.featured ?? false) - Number(a.featured ?? false) ||
        a.pricePerPerson / a.nights - b.pricePerPerson / b.nights,
      "price-asc": (a: Sailing, b: Sailing) => a.pricePerPerson - b.pricePerPerson,
      "price-desc": (a: Sailing, b: Sailing) => b.pricePerPerson - a.pricePerPerson,
      "per-night": (a: Sailing, b: Sailing) => a.pricePerPerson / a.nights - b.pricePerPerson / b.nights,
      soonest: (a: Sailing, b: Sailing) => a.departureDate.localeCompare(b.departureDate),
      shortest: (a: Sailing, b: Sailing) => a.nights - b.nights,
      longest: (a: Sailing, b: Sailing) => b.nights - a.nights,
    }[sort];
    return [...filtered].sort(by);
  }, [sailings, query, port, destination, line, month, maxPrice, sort]);

  const selectCls =
    "min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800";
  const labelCls = "block text-xs font-semibold uppercase tracking-wide text-slate-500";

  return (
    <section aria-label={heading ?? "Cruise deals"}>
      {/* Filter / search bar */}
      <div className="rounded-xl border border-slate-200 bg-foam p-4 shadow-sm">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <label htmlFor="wf-q" className={labelCls}>Search ships, lines, ports of call</label>
            <input
              id="wf-q"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try “Cozumel”, “Liberty of the Seas”, “Disney”…"
              className="min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
            />
          </div>
          {!lockPort && (
            <div>
              <label htmlFor="wf-port" className={labelCls}>Departure port</label>
              <select id="wf-port" className={selectCls} value={port} onChange={(e) => setPort(e.target.value)}>
                <option value="">All 20 U.S. ports</option>
                {ports.map((p) => (
                  <option key={p.slug} value={p.slug}>{p.city}, {p.state}</option>
                ))}
              </select>
            </div>
          )}
          {!lockDestination && (
            <div>
              <label htmlFor="wf-dest" className={labelCls}>Destination</label>
              <select id="wf-dest" className={selectCls} value={destination} onChange={(e) => setDestination(e.target.value)}>
                <option value="">All destinations</option>
                {destinations.map((d) => (
                  <option key={d.slug} value={d.slug}>{d.name}</option>
                ))}
              </select>
            </div>
          )}
          <div>
            <label htmlFor="wf-line" className={labelCls}>Cruise line</label>
            <select id="wf-line" className={selectCls} value={line} onChange={(e) => setLine(e.target.value)}>
              <option value="">All lines</option>
              {lineOptions.map((l) => (
                <option key={l.slug} value={l.slug}>{l.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="wf-month" className={labelCls}>Departure month</label>
            <select id="wf-month" className={selectCls} value={month} onChange={(e) => setMonth(e.target.value)}>
              <option value="">Any month</option>
              {monthOptions.map((m) => (
                <option key={m} value={m}>{monthLabel(m)}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="wf-max" className={labelCls}>Max price per person</label>
            <select id="wf-max" className={selectCls} value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}>
              <option value="">Any price</option>
              <option value="300">Under $300</option>
              <option value="500">Under $500</option>
              <option value="750">Under $750</option>
              <option value="1000">Under $1,000</option>
              <option value="2000">Under $2,000</option>
            </select>
          </div>
          <div>
            <label htmlFor="wf-sort" className={labelCls}>Sort by</label>
            <select id="wf-sort" className={selectCls} value={sort} onChange={(e) => setSort(e.target.value as SortKey)}>
              {SORTS.map((s) => (
                <option key={s.key} value={s.key}>{s.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-500" role="status">
        {results.length} {results.length === 1 ? "sailing" : "sailings"} found
      </p>

      {/* Feed — AdSlot after every 4 cards (renders only when AdSense is on) */}
      {results.length === 0 ? (
        <p className="mt-6 rounded-lg bg-sand p-6 text-center text-slate-600">
          No sailings match those filters right now — try widening the month or price. We check fares
          daily, so new deals land here first.
        </p>
      ) : (
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((s, i) => (
            <div key={s.id} className="contents">
              <SailingCard sailing={s} />
              {(i + 1) % 4 === 0 && i !== results.length - 1 && <AdSlot key={`ad-${i}`} />}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
