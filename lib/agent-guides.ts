// Agent-mode guides for blog posts.
//
// Some posts ship a second, machine-facing version: a self-contained prompt the
// reader can paste straight into Claude Code (or any coding agent), which then
// walks them through doing the whole thing. Keyed by post slug. A post with no
// entry here simply renders normally (no "For agents" toggle).

export interface AgentGuide {
  // Short line shown above the prompt explaining what to do with it.
  intro: string
  // The full prompt to paste into a coding agent.
  prompt: string
}

const agentGuides: Record<string, AgentGuide> = {
  "how-to-set-up-seo-and-aeo-from-scratch": {
    intro:
      "Paste this into Claude Code (or any coding agent) with access to your site's repo. It will ask you a few questions, then set up your SEO and AEO end to end — tooling, keywords, on-page wins, and the measurement loop.",
    prompt: `You are my SEO/AEO setup engineer. Your job is to take my website from zero (or near-zero) search presence to ranking on Google AND getting cited by AI engines (ChatGPT, Perplexity, Google AI answers, Claude). Run the full playbook below, phase by phase. At the start of each phase, tell me what you are about to do and what you need from me. Do not skip the measurement loop, and never invent or inflate claims on the site.

=== WHAT I NEED FROM YOU FIRST ===
Ask me for anything below that you do not already have, then STOP and propose a plan before executing:
1. My domain, and how the site is built/deployed (repo path or URL, framework, host).
2. What the product does, who it is for, and the one thing that makes it the better choice (the "wedge").
3. My main competitors (you will also discover more).
4. A DataForSEO API key, or confirmation that a DataForSEO tool/MCP is available to you. This is the data spine — search volume, keyword difficulty (KD), CPC, live SERPs, ranked-keyword lists, backlinks, and on-page audits.
5. Whether Google Search Console + GA4 are connected, and whether PostHog is installed.
6. Whether Screaming Frog (and its MCP server) is available for the technical crawl.

=== PHASE 0 — TOOLING ===
Confirm the stack is ready before any analysis:
- Stand up a VM to run the agents, audits, and daily crons (so it does not depend on my laptop being open):
  - Sign up for a cloud VM. I recommend Linode by Akamai — go to linode.com, create an account, and spin up a small/shared instance (a $5-12/mo nano/shared plan is plenty). Pick a region near me and Ubuntu LTS.
  - Walk me through (or do over SSH if I give you access): create the instance, add my SSH key, ssh in, then install Node, git, and Claude Code (or your runtime), and clone my repo.
  - Verify you can run a job on the box before moving on.
- DataForSEO reachable (key or tool).
- Search Console + GA4 connected; submit the sitemap so Search Console starts logging impressions/positions. If the domain is not verified yet, proceed using DataForSEO only and flag the gap.
- PostHog on the site for session replays.
- Screaming Frog available for the crawl (or use DataForSEO's on-page endpoints).

=== PHASE 1 — CHOOSE KEYWORDS ===
1. Find competitors: ask me, then confirm with DataForSEO's competitor endpoints.
2. For each competitor, pull their ranked keywords from DataForSEO (ranked-keywords / keywords-for-site).
3. Build a master list of 150-500 keywords. For each, attach volume, KD (0-100), CPC, and search intent.
4. Score every keyword on: volume, difficulty (lead with low KD on a new domain), value (CPC = how much the intent is worth), and winnability (be honest about our current authority).
5. Group the list into clusters of ~5 related keywords each — every cluster becomes one page.
6. Lock the wedge and a first-12 page plan. Rule: do not try to outrank a competitor's own homepage on its bare brand term — win the "[competitor] alternative", "X vs Y", and "is X worth it" slots (low KD, high intent, and the exact questions people ask AI).
Deliver the scored list + cluster/page plan and get my sign-off before writing.

=== PHASE 2 — WIN ===
Win each keyword on four fronts:

A) TECHNICALS (can Google crawl and understand the site — do this first):
- Ensure sitemap.xml exists and is submitted; robots.txt is present and open to AI crawlers.
- Content renders server-side (words must be in the HTML, not only after client JS).
- One canonical URL per page; force www <-> bare-domain redirects so the site is not split into two.
- Crawl with Screaming Frog (or its MCP) / DataForSEO on-page and fix every redirect chain, render issue, broken schema, and slow page. Add structured data (Organization, BlogPosting, FAQPage, Product where relevant).
- Remove any unverified claims (e.g. inflated counts) — Google reviews and penalizes these.

B) CONTENT:
- Turn each ~5-keyword cluster into a page. Build more than blogs: free tools, calculators, and databases earn clicks and links that articles do not.
- Lead each page with a direct answer. Put the year in time-sensitive titles. Write for the human.
- Internal linking: treat the homepage as a pool of authority; link new/important pages from the homepage and to each other so they inherit weight.

C) AUTHORITY (only backlinks move domain rating — quantity AND quality):
- Submit to startup directories (Product Hunt, Crunchbase, Trustpilot, G2, and the long tail) — lowest-hanging fruit.
- Pull the backlink profiles of competitors ranking above us; their linkers are our outreach list — email them for links. Use the DataForSEO backlinks endpoint, or Origami (https://origami.chat/?ref=partner-personal-Gul0fK) to map any domain's backlinks.
- Add Reddit/forum posts, a small free product or Chrome extension that links back, and cold-outreach to journalists/newsletters for press.

D) CITATIONS / AEO:
- Write quick answers and FAQs into pages ("What does X do?", "How does X work?", "Is X worth it?") so AI engines can lift them.
- Keep robots.txt open to AI crawlers; consider an llms.txt pointing to the best content.

=== PHASE 3 — MEASURE & CONVERT ===
- Read Search Console as a funnel: impressions -> clicks -> average position/CTR. Optimize for clicks (position drives them; page 2-3 gets ~none).
- The core loop — SERP teardown: for a page that ranks but is stuck, pull the results above it and grab each one's content + domain authority. If someone outranks us with LOWER authority, it is a content problem (improve the page to match/beat how they use the keyword). If everyone above has HIGHER authority, it is an authority problem (get more backlinks to that page).
- Use PostHog session replays + GA4 (scroll depth, time on page) to fix site-visit -> CTA conversion. Place one CTA ~1/3 in (or right after the intro) and one at the end; add a third mid-article for long posts. If there are clicks/visits but no CTA clicks, the content, the design, or the keyword relevance is the problem.

=== PHASE 4 — TURN IT INTO A LOOP ===
- Set up a daily cron on the Linode VM that publishes/improves a clustered page automatically: write the job script, add it to crontab (e.g. "crontab -e" with a line like "0 9 * * * /path/to/run.sh"), make sure secrets (DataForSEO key, repo deploy token) are available to it, and confirm the first scheduled run actually fires and commits/deploys.
- Publish a new clustered page on a cadence (that daily cron).
- Improve stuck-but-ranking pages using the SERP teardown to decide content-vs-authority each time.
- Keep earning backlinks (directories -> competitor linkers -> press).
- Review the Search Console funnel weekly and let it drive the next task. SEO compounds slowly — judge results over ~3 months, not days.

Start now by asking me for the context in the first section, then propose the plan.`,
  },

  "how-to-do-outbound": {
    intro:
      "Paste this into Claude Code (or any coding agent). It will ask a few questions, then run creator outbound end to end — source leads, enrich them into a contact CSV, send at scale over email or Instagram, and stand up a reply-tracking dashboard.",
    prompt: `You are my creator-outbound engineer. Your job is to run influencer/creator outbound end to end: source creators, enrich them into reachable contacts, send at scale, and track who says yes. The whole thing lives or dies on lead sourcing and a clear value pitch, so put your effort there. Work phase by phase; at the start of each phase tell me what you are doing and what you need from me. Respect each platform's terms and anti-spam rules (rate limits, opt-out, domain warm-up).

=== WHAT I NEED FROM YOU FIRST ===
Ask me for anything missing, then STOP and propose a plan before executing:
1. My ICP: what niche/type of creator, what size (follower range), what platforms, what geography.
2. My offer and value pitch (usually: running UGC for them). If I do not have one tight, help me write it.
3. Which channel to send on: email, Instagram, or both.
4. Credentials/keys available: ScrapeCreators API, Origami, Instantly / Apollo / growth-machine (email), Unipile and/or Northlight (Instagram), plus where to store the leads (CSV / sheet / db).

=== PHASE 1 — SOURCE CREATORS (use several sources; each finds creators the others miss) ===
- ScrapeCreators API: pull creator profiles + bios at scale (bios often contain the business email).
- Origami (https://origami.chat/?ref=partner-personal-Gul0fK): find creators in bulk and resolve accounts to emails.
- Regex trick (the free one, scales furthest): scrape creator emails straight from Google. Run searches like site:instagram.com "@gmail.com" + {keyword} (swap {keyword} for the niche), page through results, and run an email regex over the page text to extract every address. Same regex works on any scraped bios.
- Instagram Creator Marketplace: a long-term source if I submit an app and get the right permissions — flag it and help me set it up if I want the durable channel.
Deliver a deduped list of candidate creators with handles + any data scraped.

=== PHASE 2 — ENRICH INTO CONTACTS ===
- Run the accounts through Origami to resolve emails.
- Parse the ScrapeCreators bios for emails: apply the regex over the CSV, and/or read every description yourself and pull out contacts.
- VERIFY the list with an email verifier (e.g. MillionVerifier) and drop dead/risky addresses BEFORE sending — a dirty list tanks deliverability and burns domains.
- End state: a clean, verified CSV of emails (for email outreach) and/or a list of Instagram handles/URLs (for IG outreach), deduped, with name + handle + source.

=== PHASE 3 — SEND AT SCALE ===
- EMAIL: send via Instantly (my top pick — most reliable for large lists), or Apollo sequences, or a growth-machine setup. Warm up domains, keep per-inbox volume sane, personalize enough to avoid spam folders, and set follow-ups.
- Automate the ops: manage the Instantly API and inbox programmatically (Uninbox or similar) — launch campaigns, rotate inboxes, and triage replies without manual babysitting.
- INSTAGRAM: send programmatically from my account via Unipile over the API, or via Northlight using my logged-in session. Note there is no great IG outbound sequencer, so pace sends to look human and stay under limits.

=== PHASE 4 — MESSAGING ===
- Write the outreach from my value pitch (lead with what is in it for the creator, why me, why now). Produce a short A/B set of variants per channel; keep them human, not templated-spammy.
- When creators reply, ask for their post costs and work with the cheapest first. Early on you are buying data across many creators, not betting on one — keep per-post cost low and spread it wide.

=== PHASE 5 — TRACK WHO SAYS YES ===
- Stand up a dashboard that tracks sent -> replied -> positive ("yes"). Positive-reply rate is the number that matters, not volume sent.
- Once creators are posting, also track content performance (e.g. Shortimize or viral.app) to see which creators and posts actually move numbers.
- Use it to decide what to fix next: the list/targeting (top of funnel), the channel, or the pitch. Tune until the yes-rate climbs, then pour more volume into what works.

=== PHASE 6 — SCALE THE WINNERS ===
- Most creators are mediocre; a few pop. Use the performance data to find them, then concentrate spend.
- Put best performers on retainer for a repeatable content engine.
- Put paid ad spend behind the best-performing content (organic winners are the safest ad creative).
- Push for the cheapest CPM you can get — once you are paying to amplify, the game is efficiency.

Start now by asking me for the context in the first section, then propose the plan.`,
  },
}

export function getAgentGuide(slug: string): AgentGuide | null {
  return agentGuides[slug] ?? null
}
