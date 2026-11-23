# WaveFares.com — Cruise Deals, Checked Daily

WaveFares is a cruise **deals showcase**. We don't sell cruises, take bookings, or handle payments. We track real fares from all 20 major U.S. cruise homeports, stamp every listing with the date its price was last checked, and send you to the cruise line's own site to book at the line's own price.

**How it makes money:** affiliate links (primary) + display ads. See
[How the affiliate engine works](#how-the-affiliate-engine-works).

## Stack

- **Next.js 15 (App Router) + TypeScript + Tailwind CSS**
- **Data:** typed local files behind a small data layer in `src/data/` (ports, destinations, sailings). No database in Phase 1 — `DATABASE_URL` in `.env.example` is reserved for the phase where the daily price checker writes to a DB.
- Port and destination pages are statically generated (SSG); feeds filter/sort client-side.

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in keys as accounts are created
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

There is **no seed step** (`npm run seed` is not needed): all content lives in `src/data/*.ts` and is compiled into the site. To add or update a sailing, edit `src/data/sailings-a.ts` / `sailings-b.ts`, set its `priceChecked` to the day you verified the fare, and rebuild/redeploy.

## Pages

| Route | What it is |
|---|---|
| `/` | Hero + search, checked-deals feed, all-20-ports grid, destination hubs, Luxury Edit |
| `/ports/[slug]` | Port guide + Port Intelligence (airport, terminal address, parking, hotels, boarding tips) + that port's deals |
| `/destinations/[slug]` | Alaska, Mexico, Eastern/Western/Southern Caribbean, Bahamas, Bermuda, Canada & New England, Hawaii, Panama Canal |
| `/cruises/luxury` | Luxury & ultra-luxury sailings |
| `/cruises/adults-only` | 18+ sailings (Virgin Voyages, Viking, …) |
| `/cruises/last-minute` | Departures within 60 days of the last fare check |
| `/cruises/under-500` | Everything under $500 per person |
| `/affiliate-disclosure` | FTC disclosure + "How we make money" |
| `/privacy` | Privacy policy |

## How the affiliate engine works

Affiliate links are the **core architecture**, not a plugin:

1. Every sailing's outbound URL is stored **once** in the data files (`bookingUrl`).
2. Every outbound link on the site is rendered through **one central helper** — `src/lib/affiliate.ts` (`dealUrl(sailing)` / `outboundUrl(rawUrl)`). No page or component hardcodes a raw outbound cruise URL.
3. Today the helper returns the plain official cruise-line URL. Monetization switches on in exactly one place:
   - **Sovrn //Commerce (primary):** set `NEXT_PUBLIC_SOVRN_API_KEY` and the root layout loads the Sovrn script, which converts outbound links into commission-earning affiliate links at click time. Sovrn is free for publishers ($0 to join); it keeps a share of commissions earned.
   - **Direct line programs (future):** if a cruise line's own affiliate program needs tagged URLs, the tagging goes in `outboundUrl()` — and nowhere else.
4. Display ads are secondary: set `NEXT_PUBLIC_ADSENSE_CLIENT_ID` (+ slot) and the `AdSlot` component renders a fixed-height, "Advertisement"-labeled unit after every 4 listing cards. Without the env var, no ad containers render at all.

The footer carries the short FTC disclosure on every page; the long version lives at `/affiliate-disclosure`.

## Environment variables

See `.env.example`. Summary:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical base URL (metadata, sitemap, robots). Default `https://wavefares.com` |
| `NEXT_PUBLIC_SOVRN_API_KEY` | **Primary monetization switch** — enables Sovrn //Commerce link monetization |
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID` / `NEXT_PUBLIC_ADSENSE_SLOT_ID` | Enables in-feed AdSense slots |
| `DATABASE_URL` | Reserved for the future DB-backed price checker (unused in Phase 1) |
| `CRON_SECRET` | Reserved for the future daily price-check / revalidation endpoint (unused in Phase 1) |

## Price freshness

Every sailing has a `priceChecked` ISO date; cards render it as a “Price checked Nov 22” stamp. Phase 1 data was researched and verified on 2026-11-22. The planned daily checker will re-verify fares and update `priceChecked` automatically — until then, update the data files when fares are re-checked manually.

## Deploy

Any Node host that runs Next.js works (Netlify / Vercel / a VPS):

```bash
npm run build
npm start
```

Set the environment variables in the host's dashboard before deploying. Attach the `wavefares.com` domain in the host's domain settings once purchased.

## Phase 1 scope notes

Built now: home/search/feeds, all 20 port pages with Port Intelligence, 10 destination hubs, luxury / adults-only / last-minute / under-$500 hubs, SEO basics (per-page metadata, JSON-LD ItemList + BreadcrumbList, sitemap, robots, canonicals), monetization hooks (Sovrn + AdSense, env-gated).

Deliberately later (per spec, future phases): database + automated daily scraper cron, price-history/price-drop tracking, total-cost calculator, comparison tray, ship directory pages, drive-to radius finder, programmatic port×destination / line×destination page matrix.
