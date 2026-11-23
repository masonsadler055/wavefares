import type { Port } from "./types";

// Port-intelligence data for WaveFares.com — all 20 U.S. cruise homeports.
// Terminal addresses and parking rates were spot-checked against port and
// cruise-line sources in November 2026. Parking rates are approximate and
// change often; the site displays them as estimates.

export const ports: Port[] = [
  {
    slug: "portmiami",
    name: "PortMiami",
    city: "Miami",
    state: "FL",
    region: "Florida",
    tagline: "The Cruise Capital of the World",
    blurb:
      "The busiest cruise port on Earth, sailing year-round to the Bahamas, the Caribbean and Mexico on nearly every major line. If a ship sails the Caribbean, it probably sails from Miami — which means the most departure dates and often the sharpest fares.",
    airport: {
      name: "Miami International Airport",
      code: "MIA",
      transferTime: "≈15 min drive",
      note: "Taxi or rideshare runs about $25–35 to the port. Many Miami Airport-area hotels offer cruise shuttles for a small fee.",
    },
    terminalAddress:
      "1015 N America Way, Miami, FL 33132 (terminals line N Cruise Blvd — check your cruise documents for your terminal letter)",
    parking: {
      portDailyRate: "$28–35/day at the official port garages (approximate)",
      note: "Garages C, D, F and G run about $28/day; Garages AA, A and B run about $35/day. Off-site lots near the airport with shuttles often run $10–15/day.",
    },
    hotelAreas: [
      { name: "Downtown Miami / Brickell", note: "Five minutes from the port, with the widest choice of hotels and dining." },
      { name: "Miami Beach", note: "Stay on the sand the night before — about 15–20 minutes from the terminals." },
    ],
    embarkationTips: [
      "Arrive in your assigned check-in window — Miami terminals are huge and lines build fast on multi-ship days.",
      "Use the PortMiami tunnel from I-395; it drops you right at the terminals and skips downtown traffic.",
      "Confirm your terminal letter (A, B, C, D, AA, V…) before you park — each has its own garage.",
      "Flying in same-day is risky; come the night before during hurricane season (June–November).",
    ],
  },
  {
    slug: "port-canaveral",
    name: "Port Canaveral",
    city: "Cape Canaveral",
    state: "FL",
    region: "Florida",
    tagline: "Orlando's port — cruise plus the theme parks",
    blurb:
      "Florida's Space Coast port sails to the Bahamas and Caribbean and is the closest port to Orlando's theme parks, making cruise-and-parks combo trips easy. It is also one of the simplest drive-to ports in Florida, with parking right at each terminal.",
    airport: {
      name: "Orlando International Airport",
      code: "MCO",
      transferTime: "≈45 min drive",
      note: "Shuttles and rideshares run about $30–60 per person/car via SR-528 (the Beachline, a toll road). Melbourne Orlando International (MLB) is closer but has fewer flights.",
    },
    terminalAddress:
      "Cruise terminals on Charles Rowland Dr and Christopher Columbus Dr, Cape Canaveral, FL 32920 (e.g. Terminal 3: 220 Christopher Columbus Dr)",
    parking: {
      portDailyRate: "$20/day plus tax at the official port garages (approximate)",
      note: "Port parking is pay-on-arrival by card (no cash) and both arrival and departure days are charged. Off-site lots like Park Port Canaveral and Go Port run about $9–15/day with shuttles.",
    },
    hotelAreas: [
      { name: "Cape Canaveral / Cocoa Beach", note: "Minutes from the terminals; many hotels offer park-and-cruise packages with port shuttles." },
      { name: "Orlando / Lake Buena Vista", note: "Best if you are adding theme park days before or after the cruise." },
    ],
    embarkationTips: [
      "Check whether your terminal is on the A side (Exit 54A) or B side (Exit 54B) of SR-528 — they are not interchangeable.",
      "Budget for Beachline tolls if you are driving from Orlando.",
      "Watch for rocket launch days — traffic around the port can back up for miles.",
      "Arrive by early afternoon; most Canaveral ships sail away around 4–5 pm.",
    ],
  },
  {
    slug: "port-everglades",
    name: "Port Everglades",
    city: "Fort Lauderdale",
    state: "FL",
    region: "Florida",
    tagline: "Fort Lauderdale's easy fly-and-cruise port",
    blurb:
      "One of the world's top three cruise ports, home to the biggest ships afloat and heavy Caribbean, Bahamas and transatlantic schedules. Its airport sits practically next door, making it one of the easiest fly-in embarkation ports in the country.",
    airport: {
      name: "Fort Lauderdale-Hollywood International Airport",
      code: "FLL",
      transferTime: "≈10 min drive",
      note: "Taxi or rideshare is typically $15–25. Some cruise lines sell pier transfers, but a rideshare is usually cheaper for two or more people.",
    },
    terminalAddress: "1850 Eller Drive, Fort Lauderdale, FL 33316",
    parking: {
      portDailyRate: "$20–25/day at the official Heron and Palm garages (approximate)",
      note: "The port publishes a daily maximum (about $25 for standard vehicles). Off-site lots on SR-84 and near the airport undercut the port at roughly $9–13/day with shuttles.",
    },
    hotelAreas: [
      { name: "SE 17th Street Causeway", note: "The classic pre-cruise strip — hotels, restaurants and a water taxi, 5 minutes from the port gates." },
      { name: "Fort Lauderdale Beach", note: "Oceanfront stays about 10–15 minutes from the terminals." },
    ],
    embarkationTips: [
      "Have photo ID and cruise documents ready — every vehicle passes a port security checkpoint at the entrance.",
      "Navigate by terminal number, not cruise line; assignments change sailing to sailing.",
      "Heron Garage connects to Terminal 2 by an air-conditioned bridge; Palm Garage serves the midport terminals.",
      "Stop for last-minute supplies on SE 17th Street before you enter the port — there is nothing inside the fence.",
    ],
  },
  {
    slug: "galveston",
    name: "Port of Galveston",
    city: "Galveston",
    state: "TX",
    region: "Gulf Coast",
    tagline: "Texas' drive-to gateway to the Western Caribbean",
    blurb:
      "The Gulf's biggest homeport and the natural sailing point for Texas, Oklahoma and Louisiana drivers, with year-round Western Caribbean and Mexico itineraries. Four terminals now host Carnival, Royal Caribbean, Disney, Princess, Norwegian and MSC.",
    airport: {
      name: "William P. Hobby Airport (Houston)",
      code: "HOU",
      transferTime: "≈1 hr drive",
      note: "Houston Hobby is the closer airport; IAH (Bush Intercontinental) is about 90 minutes. Cruise-line and private shuttles (e.g. Galveston Express) run from both — book ahead.",
    },
    terminalAddress:
      "2502 Harborside Drive, Galveston, TX 77550 (Terminals 25/28; Royal Caribbean's Pier 10 is at 1152 Royal Caribbean Way)",
    parking: {
      portDailyRate: "$25/day at the official port lots and garages (approximate)",
      note: "Official port parking can be reserved online in advance. Private lots near Harborside Drive run about $17–20/day with frequent shuttles, and Galveston Park N Cruise is a short walk from Terminals 25/28.",
    },
    hotelAreas: [
      { name: "The Strand / Downtown Galveston", note: "Historic district a few blocks from Terminals 25 and 28 — walkable, with restaurants and bars." },
      { name: "Seawall Boulevard", note: "Beachfront hotels about 10 minutes from the port; several offer cruise parking packages." },
    ],
    embarkationTips: [
      "Confirm your pier — Terminals 25/28, Pier 10 (Royal Caribbean) and Pier 16 (MSC/Norwegian) are in different spots along Harborside Drive.",
      "Reserve port parking online before sailing day; official lots sell out on peak weekends.",
      "I-45 traffic from Houston can add an hour on Saturday mornings — leave early or stay on the island the night before.",
      "Fog delays happen in winter — build buffer time into return flights out of Houston.",
    ],
  },
  {
    slug: "seattle",
    name: "Port of Seattle",
    city: "Seattle",
    state: "WA",
    region: "Pacific Northwest",
    tagline: "The main gateway for Alaska cruises",
    blurb:
      "Seattle is the biggest U.S. homeport for Alaska, with round-trip Inside Passage sailings all summer from two waterfront terminals. It is a fly-in favorite because the city itself — Pike Place, the Space Needle — is worth a day before you sail.",
    airport: {
      name: "Seattle-Tacoma International Airport",
      code: "SEA",
      transferTime: "≈30 min drive",
      note: "Taxi/rideshare runs about $40–55. The Link light rail gets you downtown cheaply, then it is a short cab ride to either pier.",
    },
    terminalAddress:
      "Smith Cove Terminal, Pier 91: 2001 W Garfield St, Seattle, WA 98119 · Bell Street Terminal, Pier 66: 2225 Alaskan Way, Seattle, WA 98121",
    parking: {
      portDailyRate: "$27/day at Pier 91 and $30/day plus tax at the Pier 66 garage (approximate)",
      note: "Pier 91's lot includes a free terminal shuttle; Pier 66 uses the covered Bell Street Pier Garage (6'6\" height limit). Off-site lots near Pier 91 run a few dollars less per day.",
    },
    hotelAreas: [
      { name: "Downtown / Pike Place", note: "Walkable to Pier 66 and full of pre-cruise dining; a short ride to Pier 91." },
      { name: "Seattle Center / Lower Queen Anne", note: "Near the Space Needle and the closest hotel cluster to Pier 91." },
    ],
    embarkationTips: [
      "Double-check Pier 66 vs Pier 91 — they are about 3 miles apart and serve different lines.",
      "Alaska season runs late April to early October; pack layers even in July.",
      "Pre-book parking online — Seattle cruise parking discounts are common for advance purchase.",
      "Give Sea-Tac extra time on sailing days; cruise traffic stacks up at airport security too.",
    ],
  },
  {
    slug: "los-angeles",
    name: "Port of Los Angeles",
    city: "San Pedro",
    state: "CA",
    region: "West Coast",
    tagline: "The World Cruise Center in San Pedro",
    blurb:
      "LA's cruise port at San Pedro sails the Mexican Riviera, the California coast, Hawaii and Panama Canal repositionings. It pairs naturally with a Los Angeles city break, and its big surface lots make it an easy drive-to port for Southern California.",
    airport: {
      name: "Los Angeles International Airport",
      code: "LAX",
      transferTime: "≈35 min drive",
      note: "Rideshare runs about $45–65 depending on traffic. Long Beach Airport (LGB) is a calmer alternative at roughly the same distance.",
    },
    terminalAddress: "World Cruise Center, Berths 91–93, 100 Swinford Street, San Pedro, CA 90731",
    parking: {
      portDailyRate: "$23/day maximum at the official port lots (approximate)",
      note: "Port lots are first hour free, then $2/hour up to the $23 daily max ($40 oversized), pay on exit, no reservation needed. Downtown San Pedro hotels sometimes bundle parking.",
    },
    hotelAreas: [
      { name: "Downtown San Pedro", note: "Closest to the terminal — a handful of hotels within a mile of the World Cruise Center." },
      { name: "Long Beach", note: "More hotel choice around the Queen Mary and downtown, about 15 minutes away — but confirm you are sailing from LA, not Long Beach." },
    ],
    embarkationTips: [
      "Los Angeles (San Pedro) and Long Beach are different ports about 6 miles apart — check your port code (LAX vs LGB) carefully.",
      "Drop luggage at the terminal curb before parking; the lots are large.",
      "Harbor Blvd traffic backs up when two ships turn around the same day — arrive before noon.",
      "The Battleship Iowa museum next door is an easy pre-cruise stop if you arrive early.",
    ],
  },
  {
    slug: "tampa",
    name: "Port Tampa Bay",
    city: "Tampa",
    state: "FL",
    region: "Florida",
    tagline: "Downtown Tampa sailings under the Skyway",
    blurb:
      "A compact downtown port sailing to the Western Caribbean, Key West and Mexico from the Channelside district. Ships here pass under the Sunshine Skyway Bridge, so Tampa hosts mid-size ships — which many cruisers prefer for shorter lines and easier boarding.",
    airport: {
      name: "Tampa International Airport",
      code: "TPA",
      transferTime: "≈20 min drive",
      note: "Rideshare runs about $25–40 to Channelside. The free TECO streetcar links downtown hotels to the terminal area.",
    },
    terminalAddress:
      "Cruise Terminal 3: 815 Channelside Drive, Tampa, FL 33602 (Terminal 2: 651 Channelside Dr; Terminal 6: 1333 McKay St)",
    parking: {
      portDailyRate: "$19/day at the official Channelside garage (approximate)",
      note: "The port garage at 810 Channelside Drive serves Terminals 2 and 3, with a valet upgrade available. Off-site Channelside and Ybor lots run about $8–14/day with shuttles.",
    },
    hotelAreas: [
      { name: "Downtown Tampa / Riverwalk", note: "Hotels along the Riverwalk, a streetcar ride or short walk from the terminals." },
      { name: "Ybor City", note: "Historic Cuban district with boutique hotels, great food and a free streetcar to the port." },
    ],
    embarkationTips: [
      "Terminal assignments rotate between Terminals 2, 3 and 6 — confirm yours the night before.",
      "The Florida Aquarium is a 5-minute walk from Terminal 2 if you arrive early.",
      "Ships must fit under the Skyway Bridge, so expect mid-size ships, not mega-ships.",
      "Prepay port parking online through the port's site to speed up garage entry.",
    ],
  },
  {
    slug: "san-juan",
    name: "Port of San Juan",
    city: "San Juan",
    state: "PR",
    region: "Puerto Rico",
    tagline: "Start your Southern Caribbean cruise in Old San Juan",
    blurb:
      "San Juan is the homeport for Southern Caribbean itineraries that Florida ships take two days to reach — Barbados, St. Lucia, Antigua and the ABC islands in a single week. U.S. citizens need no passport, and Old San Juan's forts and food are steps from the Old San Juan piers.",
    airport: {
      name: "Luis Muñoz Marín International Airport",
      code: "SJU",
      transferTime: "≈15 min drive",
      note: "Taxis use fixed zone fares (about $21 per cab to Old San Juan, plus per-bag fees). Rideshare pickup is available at the airport.",
    },
    terminalAddress:
      "Old San Juan Piers 3–4: Paseo Gilberto Concepción de Gracia, San Juan, PR 00901 · Pan American Pier: Calle Muelle, Isla Grande, San Juan, PR 00907",
    parking: {
      portDailyRate: "About $15/day at the Covadonga garage and nearby Old San Juan garages (approximate)",
      note: "Most San Juan cruisers fly in, so parking is a local's game: Covadonga sits across from Pier 4, and the Sheraton near the Pan American Pier offers overnight parking. Confirm cruise rates before you leave the car.",
    },
    hotelAreas: [
      { name: "Old San Juan", note: "Historic hotels inside the walled city — walkable to Piers 3 and 4, unbeatable atmosphere." },
      { name: "Condado / Isla Verde", note: "Beachfront resort strip between the airport and Old San Juan; best for a beach day before sailing." },
    ],
    embarkationTips: [
      "Know your pier: Old San Juan Piers 3–4 and the Pan American Pier are about 15 minutes apart by road and not interchangeable.",
      "Fly in at least a day early — San Juan sailings often board in the evening and depart late at night.",
      "Taxis from SJU are fixed-fare by zone; confirm the rate before you ride.",
      "Leave time to walk El Morro and the old city walls before boarding if your ship uses the Old San Juan piers.",
    ],
  },
  {
    slug: "new-york",
    name: "Port of New York & New Jersey",
    city: "New York",
    state: "NY",
    region: "Northeast",
    tagline: "Three terminals, one iconic sail-away",
    blurb:
      "New York sails to Bermuda, Canada & New England, the Bahamas and the Caribbean — plus Cunard's transatlantic crossings to Southampton. Three separate terminals serve the harbor: Manhattan, Brooklyn (Red Hook) and Cape Liberty in Bayonne, NJ, so checking your terminal matters more here than anywhere.",
    airport: {
      name: "Newark Liberty International Airport",
      code: "EWR",
      transferTime: "≈30 min drive to Cape Liberty",
      note: "EWR is closest to Cape Liberty; JFK and LaGuardia serve Manhattan/Brooklyn better. Expect $50–90 for taxis/rideshares depending on terminal and traffic.",
    },
    terminalAddress:
      "Manhattan Cruise Terminal: 711 12th Ave, New York, NY 10019 · Brooklyn Cruise Terminal: 72 Bowne St, Brooklyn, NY 11231 · Cape Liberty: 4 Port Terminal Blvd, Bayonne, NJ 07002",
    parking: {
      portDailyRate: "$45/night at Manhattan and Brooklyn; $35/day at Cape Liberty (approximate)",
      note: "NYC terminal parking is the priciest in the country — for week-long sailings, off-site lots in Bayonne/Jersey City or park-and-ride hotels often cost half as much.",
    },
    hotelAreas: [
      { name: "Midtown West / Hell's Kitchen", note: "Walkable to the Manhattan terminal, with endless hotel and dining choice." },
      { name: "Jersey City / Newark Airport area", note: "Best base for Cape Liberty sailings — cheaper rooms and an easy drive to Bayonne." },
    ],
    embarkationTips: [
      "Confirm which of the three terminals your ship uses — they are in two different states.",
      "Sail-away past the Statue of Liberty happens on every departure; be on deck for it.",
      "Driving into Manhattan on sailing day is slow — the rooftop terminal parking fills early.",
      "For Brooklyn's Red Hook terminal, plan on a taxi or rideshare; there is no subway station nearby.",
    ],
  },
  {
    slug: "new-orleans",
    name: "Port of New Orleans",
    city: "New Orleans",
    state: "LA",
    region: "Gulf Coast",
    tagline: "Cruise the Caribbean, party in the French Quarter",
    blurb:
      "Port NOLA's twin riverfront terminals sit steps from the French Quarter, sailing to the Western Caribbean and Mexico down the Mississippi River. No other port pairs a cruise with a pre-sail night of jazz and Creole food this easily.",
    airport: {
      name: "Louis Armstrong New Orleans International Airport",
      code: "MSY",
      transferTime: "≈25 min drive",
      note: "Flat taxi fare of $36 to the Central Business District/French Quarter for up to two passengers ($15 per person for 3+). Rideshares are usually similar.",
    },
    terminalAddress:
      "Erato Street Terminal (Carnival): 1100 Port of New Orleans Place, New Orleans, LA 70130 · Julia Street Terminal: 920 Port of New Orleans Place, New Orleans, LA 70130",
    parking: {
      portDailyRate: "About $25/day at the official terminal garages (approximate)",
      note: "Carnival passengers park in the Erato Street garage inside the terminal; Norwegian and Royal Caribbean use the 100 Poydras garage with a port shuttle. Downtown hotel and Fulton Street lots can undercut the port rate.",
    },
    hotelAreas: [
      { name: "French Quarter", note: "The classic pre-cruise stay — a 10-minute walk or short streetcar ride from the terminals." },
      { name: "Warehouse / Arts District", note: "Quieter hotels near the convention center, closest to the Julia Street terminal." },
    ],
    embarkationTips: [
      "Carnival uses Erato Street; Norwegian and Royal Caribbean use Julia Street — the garages differ too.",
      "The riverfront streetcar stops right by the terminals and beats driving in Quarter traffic.",
      "Sailing down the Mississippi to the Gulf takes several hours — the river sail-away is part of the show.",
      "Mardi Gras and festival weekends spike hotel prices; book the pre-cruise night early.",
    ],
  },
  {
    slug: "long-beach",
    name: "Long Beach Cruise Terminal",
    city: "Long Beach",
    state: "CA",
    region: "West Coast",
    tagline: "Carnival's home beside the Queen Mary",
    blurb:
      "A Carnival-only terminal tucked under the dome next to the retired Queen Mary ocean liner, sailing to the Mexican Riviera and Baja — including quick Catalina and Ensenada getaways. It is one of the easiest embarkations in California, with the garage right at the terminal.",
    airport: {
      name: "Long Beach Airport",
      code: "LGB",
      transferTime: "≈15 min drive",
      note: "LGB is small and fast; rideshare runs about $20–30. LAX is about 50 minutes and John Wayne (SNA) about 35 minutes.",
    },
    terminalAddress: "231 Windsor Way, Long Beach, CA 90802",
    parking: {
      portDailyRate: "$23/day at the terminal garage (approximate)",
      note: "The five-story garage sits beside the terminal (7-ft height limit, no oversized vehicles). Carnival directs some sailings to off-site parking — check the email it sends the week before you sail.",
    },
    hotelAreas: [
      { name: "Downtown Long Beach / Pine Avenue", note: "Restaurants and hotels a short ride across the bridge from the terminal." },
      { name: "Queen Mary / Harbor area", note: "Sleep aboard the Queen Mary hotel itself for the full ocean-liner experience." },
    ],
    embarkationTips: [
      "Do not confuse Long Beach with the Port of Los Angeles in San Pedro — different port, different terminal, 6 miles apart.",
      "Drop bags at the terminal first, then park in the garage next door.",
      "Arrive before the 710 freeway's afternoon traffic builds.",
      "Short 3–4 night Baja sailings board fast — this is a great first-cruise port.",
    ],
  },
  {
    slug: "san-diego",
    name: "Port of San Diego",
    city: "San Diego",
    state: "CA",
    region: "West Coast",
    tagline: "Downtown terminal, airport 10 minutes away",
    blurb:
      "San Diego's B Street Pier sits right on the downtown waterfront, sailing to the Mexican Riviera, Baja and the Pacific Coast, with Hawaii and Panama Canal repositionings in season. The airport is so close you can watch planes land from the top deck.",
    airport: {
      name: "San Diego International Airport",
      code: "SAN",
      transferTime: "≈10 min drive",
      note: "Taxi or rideshare runs about $15–20. Several waterfront hotels are a flat, walkable mile from the pier.",
    },
    terminalAddress: "B Street Pier, 1140 N Harbor Drive, San Diego, CA 92101",
    parking: {
      portDailyRate: "No on-site port lot — nearby garages run about $20–30/day (approximate)",
      note: "The port offers no long-term terminal parking. Use nearby Harbor Drive garages or airport-area park-and-fly lots with shuttles; waterfront hotels often sell cruise parking packages.",
    },
    hotelAreas: [
      { name: "Downtown / Gaslamp Quarter", note: "Walkable to the pier, with the city's best dining and nightlife." },
      { name: "Harbor Island / Shelter Island", note: "Bay-view resorts between the airport and downtown, about 10 minutes from the terminal." },
    ],
    embarkationTips: [
      "Confirm B Street Pier vs Broadway Pier (1000 N Harbor Dr) on multi-ship days — they are a few blocks apart.",
      "Drop luggage at the pier curb, then park — Harbor Drive meters are not for cruise-length stays.",
      "The USS Midway museum is next door and worth arriving early for.",
      "Same-day flights are genuinely workable here, but a night in the Gaslamp is better.",
    ],
  },
  {
    slug: "boston",
    name: "Flynn Cruiseport Boston",
    city: "Boston",
    state: "MA",
    region: "Northeast",
    tagline: "Canada & New England and Bermuda from the Seaport",
    blurb:
      "Boston's seasonal homeport in the Seaport District sails north to Canada & New England in summer and fall — peak foliage sailings are the prize — plus Bermuda runs. It is a compact, city-center terminal with Logan Airport minutes away.",
    airport: {
      name: "Boston Logan International Airport",
      code: "BOS",
      transferTime: "≈15 min drive",
      note: "Taxi/rideshare runs about $20–30 through the Ted Williams Tunnel. The free Silver Line bus connects Logan to the Seaport.",
    },
    terminalAddress: "Raymond L. Flynn Black Falcon Cruise Terminal, 1 Black Falcon Avenue, Boston, MA 02210",
    parking: {
      portDailyRate: "About $30/day at Seaport-area garages near the terminal (approximate)",
      note: "Cruise parking is in garages across from the terminal in the Marine Industrial Park (e.g. 12 Drydock Ave). Seaport garages are pricey — compare park-and-fly rates at Logan for longer sailings.",
    },
    hotelAreas: [
      { name: "Seaport District", note: "Newest hotel cluster in the city, an easy walk to the cruiseport." },
      { name: "Downtown / Financial District", note: "Historic Boston at your door, about 10 minutes by Silver Line or cab." },
    ],
    embarkationTips: [
      "Boston is seasonal — most sailings run May through October, with fall foliage dates selling out first.",
      "The Silver Line from South Station drops you a short walk from the terminal.",
      "Seaport traffic snarls on event days at the nearby convention center and Leader Bank Pavilion.",
      "Build in time for a lobster roll — Legal Harborside and the Barking Crab are minutes away.",
    ],
  },
  {
    slug: "baltimore",
    name: "Port of Baltimore",
    city: "Baltimore",
    state: "MD",
    region: "Mid-Atlantic",
    tagline: "The easiest drive-to port on I-95",
    blurb:
      "Cruise Maryland's single terminal at South Locust Point sails year-round to the Bahamas, Bermuda and the Caribbean. Right off I-95 with parking beside the terminal, it is the simplest embarkation in the Mid-Atlantic for drivers from DC, Pennsylvania and New Jersey.",
    airport: {
      name: "Baltimore/Washington International Airport",
      code: "BWI",
      transferTime: "≈25 min drive",
      note: "Taxis run a flat $30 between BWI and the cruise terminal. MARC and Amtrak trains serve BWI and Penn Station for a cheaper ride into the city.",
    },
    terminalAddress: "Cruise Maryland Terminal, 2001 East McComas Street, Baltimore, MD 21230",
    parking: {
      portDailyRate: "$25/day at the official secured lots beside the terminal (approximate)",
      note: "On-site surface lots flank the terminal — no reservation needed and you walk straight in, which is Baltimore's big advantage. RVs pay more ($35/day for oversized).",
    },
    hotelAreas: [
      { name: "Inner Harbor", note: "The main hotel district, 10 minutes from the terminal, with the aquarium and harbor dining." },
      { name: "BWI Airport area", note: "Cheaper park-sleep-fly style stays about 25 minutes out, handy for early flights home." },
    ],
    embarkationTips: [
      "Exit I-95 at Exit 55 (Key Highway) and follow the cruise signs to McComas Street.",
      "Parking is pay-on-entry beside the terminal — one of the fastest car-to-ship walks anywhere.",
      "Winter sailings trade warm embarkation for cheap fares; pack a coat for deck time until you clear the Chesapeake.",
      "Fort McHenry is next door — worth a visit if you arrive the day before.",
    ],
  },
  {
    slug: "san-francisco",
    name: "Port of San Francisco",
    city: "San Francisco",
    state: "CA",
    region: "West Coast",
    tagline: "Sail under the Golden Gate from Pier 27",
    blurb:
      "The James R. Herman Cruise Terminal at Pier 27 sends ships to Alaska, the Mexican Riviera, Hawaii and the Pacific Coast — every departure sails under the Golden Gate Bridge. It is a seasonal, big-city port where most guests fly in and explore Fisherman's Wharf first.",
    airport: {
      name: "San Francisco International Airport",
      code: "SFO",
      transferTime: "≈35 min drive",
      note: "Taxi/rideshare runs about $55–70. BART to Embarcadero plus the F-line streetcar is the budget route at under $12.",
    },
    terminalAddress: "James R. Herman Cruise Terminal, Pier 27, The Embarcadero, San Francisco, CA 94111",
    parking: {
      portDailyRate: "No terminal parking — nearby Francisco St garages run about $30/day (approximate)",
      note: "There is no long-term parking at Pier 27. The port points drivers to garages at 55 and 80 Francisco Street a short walk away; reserve online, as Embarcadero garages fill on sailing days.",
    },
    hotelAreas: [
      { name: "Fisherman's Wharf", note: "The classic cruise stay — a 10-minute walk along the Embarcadero to Pier 27." },
      { name: "Embarcadero / Financial District", note: "Bay-view hotels near the Ferry Building, one streetcar stop from the terminal." },
    ],
    embarkationTips: [
      "Drop luggage at the terminal before parking — there is no on-site lot to circle back from.",
      "Confirm Pier 27 vs the older Pier 35, used on busy days.",
      "Be on deck for the Golden Gate sail-under — it happens within the first hour.",
      "San Francisco is cool and windy even in summer; pack a jacket for embarkation day.",
    ],
  },
  {
    slug: "honolulu",
    name: "Honolulu Harbor",
    city: "Honolulu",
    state: "HI",
    region: "Hawaii",
    tagline: "Inter-island Hawaii cruises from Pier 2",
    blurb:
      "Honolulu is the homeport for week-long inter-island Hawaii cruises — Maui, Kauai and the Big Island with no repacking — plus longer South Pacific and repositioning voyages. Nearly everyone flies in, and Waikiki Beach is 15 minutes from the pier.",
    airport: {
      name: "Daniel K. Inouye International Airport",
      code: "HNL",
      transferTime: "≈20 min drive",
      note: "Taxi runs about $30–40 to the pier; rideshares are similar. Many Waikiki hotels and transfer companies run pier shuttles on sailing days.",
    },
    terminalAddress: "Pier 2 Cruise Terminal, 521 Ala Moana Boulevard, Honolulu, HI 96813",
    parking: {
      portDailyRate: "No on-site cruise parking — nearby downtown garages run about $25/day (approximate)",
      note: "Almost all Honolulu cruisers fly in. Locals driving in use downtown garages near Aloha Tower and Harbor Square; confirm cruise-length parking before you leave the car.",
    },
    hotelAreas: [
      { name: "Waikiki", note: "The resort strip — beach, dining and shopping, about 15 minutes from Pier 2." },
      { name: "Ala Moana / Downtown", note: "Closest to the pier, near Ala Moana Center, with a quieter local feel than Waikiki." },
    ],
    embarkationTips: [
      "Confirm your pier — most homeport sailings use Pier 2, but some ships dock at Pier 10/11 by Aloha Tower.",
      "Hawaii has strict agricultural rules: no fresh fruit or plants can be brought aboard or back to the mainland.",
      "Fly in at least a day early — a delayed mainland flight cannot be caught up to an inter-island itinerary.",
      "Jet lag works in your favor: you will be up early for a sunrise walk on Waikiki before boarding.",
    ],
  },
  {
    slug: "jacksonville",
    name: "JAXPORT",
    city: "Jacksonville",
    state: "FL",
    region: "Florida",
    tagline: "North Florida's easy, affordable drive-to port",
    blurb:
      "JAXPORT's single cruise terminal sails short Bahamas itineraries — an easy, low-stress first cruise or weekend getaway for Georgia and North Florida drivers. It is one of the smallest and simplest embarkation ports in Florida, with parking steps from the ship.",
    airport: {
      name: "Jacksonville International Airport",
      code: "JAX",
      transferTime: "≈25 min drive",
      note: "Taxi runs about $30–35 to the terminal. Most JAXPORT cruisers drive — the port is set up for cars, not fly-ins.",
    },
    terminalAddress: "JAXPORT Cruise Terminal, 9810 August Drive, Jacksonville, FL 32226",
    parking: {
      portDailyRate: "$17/day at the official JAXPORT lot (approximate)",
      note: "The secured port lot is right at the terminal and can be prepaid online through JAXPORT's parking site. Oversized vehicles pay about double; off-site options are limited, so the port lot is the default choice.",
    },
    hotelAreas: [
      { name: "Jacksonville Airport area", note: "Practical chain hotels about 20 minutes from the port, popular for park-and-cruise deals." },
      { name: "Downtown / Southbank Riverwalk", note: "River views and dining about 25 minutes from the terminal." },
    ],
    embarkationTips: [
      "Follow Heckscher Drive (SR-105) east from I-295 — the terminal is well signed from there.",
      "Prepay parking online to skip the payment line on sailing day.",
      "Ships sail down the St. Johns River under the Dames Point Bridge — a scenic first hour on deck.",
      "Short Bahamas sailings turn around fast; arrive in your check-in window, not hours early.",
    ],
  },
  {
    slug: "norfolk",
    name: "Half Moone Cruise Center",
    city: "Norfolk",
    state: "VA",
    region: "Mid-Atlantic",
    tagline: "Downtown Norfolk sailings to Bermuda and the Bahamas",
    blurb:
      "Norfolk's Half Moone terminal sits right downtown beside the Nauticus maritime museum and the battleship Wisconsin, sailing seasonally to Bermuda, the Bahamas and the Caribbean. It serves the whole Hampton Roads and Richmond drive market with some of the cheapest parking on the East Coast.",
    airport: {
      name: "Norfolk International Airport",
      code: "ORF",
      transferTime: "≈20 min drive",
      note: "Taxi or rideshare runs about $25–35 downtown. Carnival does not sell airport transfers for Norfolk, so plan your own ride.",
    },
    terminalAddress: "Half Moone Cruise and Celebration Center, 1 Waterside Drive, Norfolk, VA 23510",
    parking: {
      portDailyRate: "$15/day at the official Cedar Grove cruise lot (approximate)",
      note: "There is no parking at the terminal itself. Park at Cedar Grove (1000 Monticello Ave, about 1.5 miles away), check your luggage there, and ride the free shuttle — it is run this way on purpose and works smoothly.",
    },
    hotelAreas: [
      { name: "Downtown Norfolk / Waterside", note: "Hotels within walking distance of the terminal, plus the Waterside District dining hall." },
      { name: "Virginia Beach Oceanfront", note: "Beach stay about 30 minutes away — pair a beach weekend with your sailing." },
    ],
    embarkationTips: [
      "Drivers: go straight to Cedar Grove parking, not the terminal — luggage is checked at the lot.",
      "The Cedar Grove lot opens at 9:30 am on cruise days and the last shuttle leaves mid-afternoon; do not cut it close.",
      "Drop-offs happen on Waterside Drive in front of Town Point Park, just past the terminal.",
      "Tour the USS Wisconsin at Nauticus next door if you arrive early — bag storage is available there.",
    ],
  },
  {
    slug: "palm-beach",
    name: "Port of Palm Beach",
    city: "Riviera Beach",
    state: "FL",
    region: "Florida",
    tagline: "Quick Bahamas getaways, Margaritaville style",
    blurb:
      "Florida's smallest cruise homeport runs short, affordable Bahamas sailings — 2- to 5-night trips to Grand Bahama, Nassau and Key West on Margaritaville at Sea. It is the fastest, cheapest way in Florida to test whether cruising is for you.",
    airport: {
      name: "Palm Beach International Airport",
      code: "PBI",
      transferTime: "≈15 min drive",
      note: "Rideshare runs about $15–25 to the port. Fort Lauderdale (FLL) is about an hour south if fares are much cheaper.",
    },
    terminalAddress: "Port of Palm Beach, 1 East 11th Street, Riviera Beach, FL 33404",
    parking: {
      portDailyRate: "$20/day self-parking at the official secured port lot (approximate)",
      note: "Credit cards only — no cash — and both arrival and departure days are charged. VIP parking closer to the terminal is $25/day, first come, first served.",
    },
    hotelAreas: [
      { name: "Singer Island", note: "Beach resorts just across the inlet, about 10 minutes from the terminal." },
      { name: "Downtown West Palm Beach", note: "CityPlace dining and nightlife, about 15 minutes south of the port." },
    ],
    embarkationTips: [
      "Terminal doors close at 3:00 pm sharp — late arrivals are denied boarding, so arrive by early afternoon.",
      "Bring a printed or digital boarding pass; the port requires it for entry.",
      "From I-95, use Exit 76 (Blue Heron Blvd) east to US-1, then south to E 11th Street.",
      "These short sailings are casual — no need to overpack or overdress.",
    ],
  },
  {
    slug: "mobile",
    name: "Alabama Cruise Terminal",
    city: "Mobile",
    state: "AL",
    region: "Gulf Coast",
    tagline: "The central Gulf's friendly hometown port",
    blurb:
      "Mobile's downtown terminal sails to Mexico and the Western Caribbean for the central Gulf Coast — Alabama, Mississippi, the Florida Panhandle and Louisiana drivers who want to skip Galveston and New Orleans. The parking deck is attached to the terminal, making embarkation about as easy as it gets.",
    airport: {
      name: "Mobile Regional Airport",
      code: "MOB",
      transferTime: "≈25 min drive",
      note: "Taxi or rideshare runs about $35–45 downtown. Pensacola (PNS) and Gulfport-Biloxi (GPT) are each about an hour away with more flight choices.",
    },
    terminalAddress: "Alabama Cruise Terminal, 201 South Water Street, Mobile, AL 36602",
    parking: {
      portDailyRate: "About $21/day at the terminal's attached parking deck (approximate)",
      note: "The 500-space covered deck connects directly to the terminal with elevators — park, roll your bags in, done. Downtown Mobile garages nearby can be a few dollars cheaper for long sailings.",
    },
    hotelAreas: [
      { name: "Downtown Mobile", note: "Historic hotels on Dauphin Street, walkable to the terminal and Mardi Gras' original hometown scene." },
      { name: "Eastern Shore (Daphne / Fairhope)", note: "Bay-side towns about 20 minutes across the bridge, popular for a relaxed pre-cruise night." },
    ],
    embarkationTips: [
      "Drop passengers and luggage at the covered lanes before pulling into the deck above.",
      "Mobile's Mardi Gras (before Lent) fills downtown hotels — book early for February sailings.",
      "The terminal is right off I-10 and I-165; follow the cruise signs to Water Street.",
      "Ships sail down Mobile Bay past Dauphin Island — be on deck for the first hour.",
    ],
  },
];

export const getPort = (slug: string) => ports.find((port) => port.slug === slug);
