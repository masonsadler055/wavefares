import type { Metadata } from "next";
import HubShell from "@/components/HubShell";
import { lastMinuteSailings, DATA_TODAY, formatDate } from "@/data";

export const metadata: Metadata = {
  title: "Last-Minute Cruise Deals — Sailing in the Next 60 Days",
  description:
    "Cruises departing within 60 days from U.S. homeports, with fares checked daily. Ships would rather sail full — these are the closest-in deals on the board.",
  alternates: { canonical: "/cruises/last-minute" },
};

export default function LastMinutePage() {
  const sailings = lastMinuteSailings();
  return (
    <HubShell
      title="Last-Minute Cruise Deals"
      path="/cruises/last-minute"
      intro={`Every sailing below leaves within 60 days of our last fare check (${formatDate(DATA_TODAY)}). Close-in sailings are where cruise lines discount hardest — an empty cabin earns nothing — but the good ones go fast, and the fare on the line's site is the one that counts.`}
      sailings={sailings}
      emptyNote="Nothing sails in the next 60 days in today's check — the daily update refreshes this page first."
    />
  );
}
