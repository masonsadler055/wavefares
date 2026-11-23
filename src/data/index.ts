import { ports, getPort } from "./ports";
import { destinations, getDestination } from "./destinations";
import { sailingsA } from "./sailings-a";
import { sailingsB } from "./sailings-b";
import type { Sailing } from "./types";

export { ports, getPort, destinations, getDestination };
export type { Port, Destination, Sailing } from "./types";

/** The date the current seed data was verified (drives "last-minute"). */
export const DATA_TODAY = "2026-11-22";

export const allSailings: Sailing[] = [...sailingsA, ...sailingsB].sort((a, b) =>
  a.departureDate.localeCompare(b.departureDate),
);

export const getSailing = (id: string) => allSailings.find((s) => s.id === id);

export const sailingsByPort = (portSlug: string) =>
  allSailings.filter((s) => s.portSlug === portSlug);

export const sailingsByDestination = (destinationSlug: string) =>
  allSailings.filter((s) => s.destinationSlug === destinationSlug);

export const featuredSailings = () => allSailings.filter((s) => s.featured);

export const luxurySailings = () => allSailings.filter((s) => s.luxury);

export const adultsOnlySailings = () => allSailings.filter((s) => s.adultsOnly);

export const under500Sailings = () => allSailings.filter((s) => s.pricePerPerson < 500);

export function lastMinuteSailings(today: string = DATA_TODAY, withinDays = 60) {
  const start = new Date(today + "T00:00:00Z").getTime();
  const end = start + withinDays * 24 * 60 * 60 * 1000;
  return allSailings.filter((s) => {
    const t = new Date(s.departureDate + "T00:00:00Z").getTime();
    return t > start && t <= end;
  });
}

/** Distinct cruise lines present in the data, for filters and hubs. */
export const cruiseLines = () => {
  const map = new Map<string, string>();
  for (const s of allSailings) map.set(s.lineSlug, s.line);
  return [...map.entries()]
    .map(([slug, name]) => ({ slug, name }))
    .sort((a, b) => a.name.localeCompare(b.name));
};

/** Cheapest fare in a list (for hub cards / SEO copy). */
export const cheapest = (list: Sailing[]) =>
  list.length ? Math.min(...list.map((s) => s.pricePerPerson)) : null;

export const pricePerNight = (s: Sailing) => Math.round(s.pricePerPerson / s.nights);

/** "Jan 7, 2027" */
export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Freshness stamp, e.g. "Price checked Nov 22" */
export function formatChecked(iso: string) {
  const d = new Date(iso + "T00:00:00Z");
  const label = d.toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
  return `Price checked ${label}`;
}

/** "2027-01" style month key + label for the month filter. */
export const monthKey = (iso: string) => iso.slice(0, 7);
export function monthLabel(key: string) {
  const [y, m] = key.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
export const sailingMonths = () =>
  [...new Set(allSailings.map((s) => monthKey(s.departureDate)))].sort();
