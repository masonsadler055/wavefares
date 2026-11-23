import type { Destination } from "./types";

export const destinations: Destination[] = [
  {
    slug: "alaska",
    name: "Alaska",
    tagline: "Glaciers, whales and the Last Frontier",
    blurb:
      "Sail the Inside Passage past towering glaciers and frontier towns like Juneau, Ketchikan and Skagway. Alaska season runs May through September, mostly from Seattle and San Francisco, and it's the one itinerary where a balcony is worth every penny.",
    highlights: ["Inside Passage", "Glacier Bay", "Hubbard Glacier", "Juneau", "Ketchikan", "Skagway"],
  },
  {
    slug: "mexico",
    name: "Mexico",
    tagline: "Mexican Riviera, Baja and the Yucatán",
    blurb:
      "Two coasts, two completely different trips. West coast sailings from Los Angeles, Long Beach and San Diego hit Cabo San Lucas, Mazatlán and Puerto Vallarta, plus short Baja hops to Ensenada. Gulf and Florida departures reach Cozumel, Costa Maya and Progreso on Mexico's Caribbean side.",
    highlights: ["Cabo San Lucas", "Mazatlán", "Puerto Vallarta", "Ensenada", "Cozumel", "Costa Maya", "Progreso"],
  },
  {
    slug: "eastern-caribbean",
    name: "Eastern Caribbean",
    tagline: "St. Thomas, St. Maarten and private islands",
    blurb:
      "The classic week-long Caribbean loop from Miami, Port Canaveral and Fort Lauderdale: duty-free shopping in St. Thomas, two-nation St. Maarten, historic San Juan, and the cruise lines' private island beach days in the Bahamas.",
    highlights: ["St. Thomas", "St. Maarten", "San Juan", "Tortola", "Grand Turk", "Puerto Plata", "Private islands"],
  },
  {
    slug: "western-caribbean",
    name: "Western Caribbean",
    tagline: "Cozumel, Grand Cayman and Jamaica",
    blurb:
      "The best-value Caribbean itinerary, sailing from Galveston, Tampa, New Orleans, Miami and Port Canaveral. Reef snorkeling in Cozumel, stingrays in Grand Cayman, waterfalls in Jamaica and beach clubs in Roatán — usually for less than the eastern loop.",
    highlights: ["Cozumel", "Roatán", "Belize", "Costa Maya", "Grand Cayman", "Falmouth", "Ocho Rios"],
  },
  {
    slug: "southern-caribbean",
    name: "Southern Caribbean",
    tagline: "The ABC islands and beyond",
    blurb:
      "Longer sailings — often from San Juan — to the deep Caribbean: Aruba, Bonaire and Curaçao, plus St. Lucia, Barbados, Antigua and Grenada. These islands sit outside the main hurricane belt, so the weather odds are better year-round.",
    highlights: ["Aruba", "Bonaire", "Curaçao", "St. Lucia", "Barbados", "Antigua", "Grenada"],
  },
  {
    slug: "bahamas",
    name: "Bahamas",
    tagline: "Short hops and private-island beach days",
    blurb:
      "The easiest cruise there is: 3- and 4-night escapes from Florida ports to Nassau and the lines' private islands — Royal Caribbean's Perfect Day at CocoCay, Carnival's Celebration Key, Norwegian's Great Stirrup Cay. Perfect first cruise or long-weekend trip.",
    highlights: ["Nassau", "Perfect Day at CocoCay", "Celebration Key", "Great Stirrup Cay", "Freeport", "Bimini"],
  },
  {
    slug: "bermuda",
    name: "Bermuda",
    tagline: "Pink sand, overnight stays, easy from the East Coast",
    blurb:
      "Bermuda sailings from New York, Boston and Baltimore dock at the Royal Naval Dockyard for two or three days straight — no packing and unpacking between ports. Season runs roughly April through October.",
    highlights: ["Royal Naval Dockyard", "Horseshoe Bay", "Hamilton", "St. George's"],
  },
  {
    slug: "canada-new-england",
    name: "Canada & New England",
    tagline: "Lighthouses, lobster and fall colors",
    blurb:
      "Fall-foliage season sailings from Boston, New York and Baltimore to Bar Harbor, Halifax, Saint John and Québec City. Peak color usually hits late September into October, and these ships skew smaller and more relaxed.",
    highlights: ["Bar Harbor", "Halifax", "Saint John", "Québec City", "Portland", "Newport"],
  },
  {
    slug: "hawaii",
    name: "Hawaii",
    tagline: "Four islands, one unpacking",
    blurb:
      "Inter-island sailings round-trip from Honolulu visit Maui, the Big Island and Kauai without inter-island flights — plus longer one-way and round-trip sailings from Los Angeles, San Francisco and San Diego with plenty of sea days.",
    highlights: ["Honolulu (Oahu)", "Maui", "Hilo & Kona (Big Island)", "Nawiliwili (Kauai)", "Napali Coast sail-by"],
  },
  {
    slug: "panama-canal",
    name: "Panama Canal",
    tagline: "The bucket-list transit between oceans",
    blurb:
      "Full and partial transits of the Panama Canal, usually 10–16 nights between Florida and California (or the reverse), calling in the Caribbean, Mexico and Central America along the way. Partial transits from Florida enter the Gatún Locks and turn around in Gatún Lake.",
    highlights: ["Gatún Locks transit", "Cartagena", "Puntarenas", "Huatulco", "Cabo San Lucas", "Colon"],
  },
];

export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug);
