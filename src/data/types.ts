// WaveFares core data types.
// Data lives in typed local files behind this layer (src/data/) so a real
// database (see DATABASE_URL in .env.example) can replace it later without
// touching the pages or components.

export interface Port {
  slug: string;
  name: string; // "Port of Galveston"
  city: string;
  state: string; // "TX" (or "PR" for San Juan)
  region: string; // "Gulf Coast", "Florida", "West Coast", ...
  tagline: string; // one-line hook
  blurb: string; // 2-3 sentence overview
  airport: {
    name: string; // nearest major airport
    code: string; // IATA code
    transferTime: string; // "≈45 min drive"
    note: string; // rideshare/taxi/shuttle note
  };
  terminalAddress: string;
  parking: {
    portDailyRate: string; // e.g. "$20/day at the port garage" — always approximate
    note: string; // off-site tips
  };
  hotelAreas: { name: string; note: string }[];
  embarkationTips: string[];
}

export interface Destination {
  slug: string;
  name: string; // "Western Caribbean"
  tagline: string;
  blurb: string;
  highlights: string[]; // signature ports / experiences
}

export interface Sailing {
  id: string; // unique slug
  line: string; // "Carnival Cruise Line"
  lineSlug: string; // "carnival"
  ship: string; // "Carnival Breeze"
  title: string; // "4-Night Western Caribbean"
  portSlug: string; // departure port slug (see ports.ts)
  destinationSlug: string; // see destinations.ts
  destinationLabel: string; // display label, e.g. "Western Caribbean"
  nights: number;
  departureDate: string; // ISO "2027-01-07"
  pricePerPerson: number; // USD "from" fare, exactly as published by the source
  portsOfCall: string[]; // 3-6 stops
  bookingUrl: string; // cruise line's official booking/search page
  priceChecked: string; // ISO date the fare was last verified, e.g. "2026-11-22"
  luxury?: boolean;
  adultsOnly?: boolean;
  featured?: boolean;
}
