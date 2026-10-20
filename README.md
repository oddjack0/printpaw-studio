# PrintPaw Studio

Printable digital-products catalog site for the Odd-jack catalog — planners, calendars,
trackers and wall art with a pet-lover / grumpy-humor angle. The site itself sells nothing:
every purchase happens on the existing Ko-fi shop, and merch lives on Redbubble.

Part of the five-site portfolio in `~/workspace/websites/MASTER-PLAN.md` (site #1).
Worker group: see `TEAM.md` (Site Lead / Content & Products / Design & UX / Growth & Monetization).

## What's in the site (`site/`)

| File | Purpose |
|---|---|
| `index.html` | Home: hero, filterable product grid, category shelves, how-it-works, free-sample section, FAQ, footer |
| `planner.html` | Free printable weekly planner page (lead magnet) with print stylesheet |
| `styles.css` | All styling — warm printable-shop look, mobile-first, `@media print` rules for the planner |
| `script.js` | Category filter for the product grid + auto year in footer |
| `sitemap.xml` | Sitemap for the two pages |
| `robots.txt` | Crawl rules + sitemap pointer |

Build standard: pure static HTML/CSS/JS — no build step, no CDNs, no external fonts or
images. Product visuals are inline SVG/CSS placeholders; swap in real product art later
without changing markup structure (each card's art lives in `.card-art`).

## Products & prices (all links verified against the task brief)

- 2027 calendars — **$8**: Grumpy Cats (`ko-fi.com/s/7d30988a69`), Gothmas Cats
  (`ko-fi.com/s/aebd55308f`), Cute Animals (`ko-fi.com/s/3fa8994c69`), Dogs
  (`ko-fi.com/s/ce961ba7b0`)
- Design bundles — **$16** (10 designs), incl. Morbid Funny Quotes SVG Bundle
  (`ko-fi.com/s/2154071349`)
- Single designs — **$2**, via the shop: https://ko-fi.com/oddjack/shop
- Merch (printed & shipped): https://www.redbubble.com/people/Odd-jack/shop
- Licensing as stated on-site: **personal use**.

## Deploy notes

- Target: GitHub Pages under `oddjack0`, same pattern as the existing oddjack-art site.
  The canonical/sitemap/OG URLs in the files assume
  `https://oddjack0.github.io/printpaw-studio/` — **confirm the final repo name/URL at
  deploy time and update `sitemap.xml`, `robots.txt`, and the `og:url` tags if it differs.**
- Publish the contents of `site/` as the Pages root (repo root or `/docs`, per repo setup).
- No build/deploy step was run for this initial build — local files only, per instructions.
- After deploy: submit `sitemap.xml` in Google Search Console, then run the Pinterest
  funnel (one pin per product → product section of this site, per portfolio rules pins
  point at site pages, not directly at Ko-fi).

## Kill condition (from MASTER-PLAN.md)

<5 Ko-fi sales attributable to the site in 60 days after launch + 20 pins → fold the
catalog back into the oddjack-art hub and stop.
