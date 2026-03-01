"use client";

import { useState } from "react";

const PASSWORD = "keira26";

// ─── DATA ────────────────────────────────────────────────────────────

const funds = [
  { name: "Main Sequence", focus: "Deep tech, CSIRO-backed", url: "mseq.vc", hero: "We back deep tech founders", pattern: "Identity + audience" },
  { name: "Blackbird", focus: "Full-stack ANZ VC", url: "blackbird.vc", hero: "Enter the world of Blackbird", pattern: "Invitational / mythic" },
  { name: "AirTree", focus: "ANZ tech, network-powered", url: "airtree.vc", hero: "Big things / Start small", pattern: "Aspirational tagline" },
  { name: "Square Peg", focus: "APAC, concentrated bets", url: "squarepeg.vc", hero: "We help founders from our corner of the world shape the future", pattern: "Geographic + founder-centric" },
  { name: "Tenacious", focus: "AgriFood-tech specialist", url: "tenacious.ventures", hero: "Unlocking impact at scale in agri-food systems", pattern: "Sector + mission" },
  { name: "Skip Capital", focus: "Farquhar family office", url: "skipcapital.com", hero: "Skip Capital is a private fund investing in technology and infrastructure", pattern: "Factual one-liner" },
  { name: "Lux Capital", focus: "US deep tech", url: "luxcapital.com", hero: "We turn sci-fi into sci-fact", pattern: "Bold brand statement" },
  { name: "In-Q-Tel", focus: "US intel community", url: "iqt.org", hero: "Investing in global innovation to secure the nation", pattern: "Mission-driven" },
  { name: "Breakthrough Vic", focus: "Victorian sovereign fund", url: "breakthroughvictoria.com", hero: "Investing in Innovation for Victoria's Economic Future", pattern: "Geographic + institutional" },
];

const portfolio = [
  { name: "Actuals", sector: "AI / Fintech", desc: "AI billing - contracts into code for automated invoicing", tag: "AI", url: "https://actuals.com/" },
  { name: "Apollo", sector: "AI / Cybersecurity", desc: "AI compliance for startups (SOC 2, ISO 27001)", tag: "AI", url: "https://apollosecure.com/" },
  { name: "Aquila", sector: "Space / Energy", desc: "Wireless power delivery via laser for drones", tag: "SPACE", url: "https://www.aquila.earth/" },
  { name: "Aussie Angels", sector: "Platform", desc: "Angel syndicate for early-stage AU startups", tag: "PLATFORM", url: "https://aussieangels.com/" },
  { name: "Chirp", sector: "AI / Sales", desc: "AI sales platform unifying CRM, email, Slack, LinkedIn", tag: "AI", url: "https://www.trychirp.com/" },
  { name: "Elita", sector: "Pet Health", desc: "Pet longevity - 100+ biomarkers + stem cell banking", tag: "EMERGING", url: "https://www.elita.pet/" },
  { name: "Fluency", sector: "AI / Enterprise", desc: "OS-level agent mapping work for AI automation", tag: "AI", url: "https://usefluency.com/" },
  { name: "Flux", sector: "Robotics / AgTech", desc: "Autonomous solar-electric robot for weed management", tag: "ROBOTICS", url: "https://www.fluxrobotics.ai/" },
  { name: "HEO", sector: "Space / Defense", desc: "High-res imagery of satellites and objects in orbit", tag: "SPACE", url: "https://www.heospace.com/" },
  { name: "Keeyu", sector: "AI / Ecommerce", desc: "AI post-purchase ops - proactive fulfillment fixes", tag: "AI", url: "https://www.keeyu.com/" },
  { name: "Kindling", sector: "Creator Economy", desc: "AI tools + advertiser marketplace for mid-tier creators", tag: "EMERGING", url: "#" },
  { name: "Magic Valley", sector: "Food Tech", desc: "Cultivated (cell-grown) meat", tag: "ROBOTICS", url: "https://magicvalley.com.au/" },
  { name: "Metahuman Labs", sector: "Consumer Health", desc: "Pharmaceutical-grade creatine supplements", tag: "EMERGING", url: "https://metahumanlabs.com.au" },
  { name: "MP Space", sector: "Space / Hardware", desc: "Next-gen spacecraft power subsystems", tag: "SPACE", url: "https://www.mpspace.io/" },
  { name: "Puralink", sector: "Robotics / Infra", desc: "Autonomous pipe inspection robots", tag: "ROBOTICS", url: "https://www.puralink.com.au/" },
  { name: "Shopfront", sector: "AI / Ecommerce", desc: "Multi-channel listing for secondhand sellers + AI tools", tag: "AI", url: "https://shopfront.app/" },
];

const sections = [
  {
    num: 1,
    title: "Navigation",
    notes: [
      { label: "Current", text: "Logo + generic nav links." },
      { label: "Change", text: "Add a primary CTA button (\"Pitch Us\" or \"Get in Touch\") to the nav bar. 7/9 funds have a founder-facing CTA in the top nav. This is the #1 conversion driver." },
      { label: "Why", text: "Main Sequence has \"Pitch\" in nav. Blackbird has \"Get Investment.\" AirTree has \"Get in touch.\" Square Peg has \"Get in Touch.\" Without this, founders browse and leave." },
      { label: "Remove", text: "Any nav items that don't serve founders directly. Keep to 5-6 items max." },
    ],
    mockup: `[Logo] ---- [About] [Portfolio] [Thesis] [Team] [Journal] ---- [PITCH US ->]

CTA button: visually distinct (accent color, filled).
Links to simple contact form or email.
NOT a 20-field application.`,
  },
  {
    num: 2,
    title: "Hero",
    notes: [
      { label: "Current", text: "\"WELCOME\" tag + serif title + subtitle paragraph. Generic welcome language." },
      { label: "Change", text: "Replace with a single, bold identity statement under 15 words. 9/9 funds do this. The hero must answer \"Who are you and what do you believe?\" in one line." },
      { label: "Why", text: "The current hero does not differentiate Davis from any other angel investor. \"Welcome\" is passive. Every top fund leads with a belief statement, not a greeting." },
      { label: "Tone", text: "Should feel like a conviction, not a description. Not \"We invest in startups\" but \"We back the founders solving Australia's hardest problems.\"" },
    ],
    mockup: `HERO OPTIONS (pick one):

  "We back bold Australian founders building what's next"
  "Private capital for Australia's most ambitious builders"
  "Conviction capital for founders pushing boundaries"

SUPPORTING PARAGRAPH (2 sentences max):
  "Davis Enterprises backs early-stage Australian companies
   across AI, space, robotics, and deep tech. We provide
   private capital, strategic support, and the financial
   expertise to help bold founders scale."

[CTA Button: "See Our Portfolio" or "Meet Our Founders"]`,
  },
  {
    num: 3,
    title: "Thesis / What We Back",
    notes: [
      { label: "Current", text: "Investment criteria shown as icon list (Geography: Australian, Stage: Early-stage, etc.) buried in About section." },
      { label: "Change", text: "Elevate into standalone section with specificity. 7/9 funds clearly articulate their thesis on homepage. \"Sector agnostic\" tells founders nothing about fit." },
      { label: "Why", text: "Founders self-select based on thesis fit. A space tech founder seeing \"sector agnostic\" doesn't know if Davis understands their domain. Named categories with portfolio proof create instant relevance." },
      { label: "Evidence", text: "Main Sequence uses \"Six Challenges.\" Lux uses sector cards. Both explicitly name what they invest in." },
    ],
    mockup: `SECTION HEADER: "What We Back"

FOUR THESIS PILLARS (as cards):

  [AI & Automation]
  Companies applying AI to specific verticals -
  billing, cybersecurity, sales, ecommerce, enterprise ops.
  Portfolio: Actuals, Apollo, Chirp, Fluency, Keeyu, Shopfront

  [Space & Defense]
  Australian sovereign capability in orbit and beyond -
  imaging, power systems, wireless energy.
  Portfolio: HEO, MP Space, Aquila

  [Robotics & Deep Tech]
  Hardware companies solving physical-world problems
  in agriculture, infrastructure, and food.
  Portfolio: Flux, Puralink, Magic Valley

  [Emerging & Platform]
  Creator tools, pet health, consumer wellness,
  and ecosystem infrastructure.
  Portfolio: Kindling, Elita, Metahuman Labs, Aussie Angels

CRITERIA ROW:
  Stage: Pre-seed & Seed | Geography: Australia | Conviction-led`,
  },
  {
    num: 4,
    title: "Portfolio",
    notes: [
      { label: "Current", text: "3-column grid of 16 logos with company names. Clicking opens company's external website. No descriptions." },
      { label: "Change", text: "Add a one-line descriptor under each company name. This is the single highest-impact change for founder conversion." },
      { label: "Why", text: "Portfolio is the #1 trust signal (9/9 funds use it). But logos alone don't communicate relevance. A space tech founder scanning the grid won't know what \"Actuals\" or \"Keeyu\" does. One line changes everything." },
      { label: "Enhancement", text: "Add category tags or filter by thesis pillar. Feature 2-3 companies with a short \"Why we invested\" blurb." },
    ],
    mockup: `SECTION HEADER: "Our Portfolio"

GRID (3-column, each card):

  [Logo]
  Company Name
  One-line descriptor
  [CATEGORY TAG]

EXAMPLE:
  [Flux logo]
  Flux
  "Autonomous solar-electric robots for precision agriculture"
  [ROBOTICS & DEEP TECH]

Optional: filterable by category (AI / Space / Robotics / Platform)`,
  },
  {
    num: 5,
    title: "Founder Testimonials (NEW)",
    notes: [
      { label: "Current", text: "Testimonials from external contacts about Peter as a person. Good character references but don't demonstrate portfolio value creation." },
      { label: "Change", text: "Replace or supplement with testimonials from portfolio company founders. Focus on WHAT Davis did beyond writing a check." },
      { label: "Why", text: "AirTree has 7 founder testimonials. Square Peg has 10. When a founder reads another founder saying \"Peter helped us hire our first engineer\" - that closes the deal." },
      { label: "Source from", text: "Portfolio founders (Flux, HEO, Chirp, Apollo, etc.) with specific examples: introductions, strategic advice, financial structuring, follow-on support." },
    ],
    mockup: `SECTION HEADER: "From Our Founders"

3 TESTIMONIAL CARDS:

  "[Quote about specific value-add]"
  - Founder Name, CEO of Portfolio Company

FOCUS QUOTES ON THEMES:
  - Speed of decision-making
  - Strategic introductions / network
  - Financial / structuring expertise
  - Long-term commitment / follow-on`,
  },
  {
    num: 6,
    title: "How We Work (Philosophy)",
    notes: [
      { label: "Current", text: "Philosophy section with numbered values and a quote. Good content but buried and generic." },
      { label: "Change", text: "Tighten to 3 core principles. Make each specific to how Davis actually operates." },
      { label: "Why", text: "Square Peg's \"We invest in companies, not rounds\" and Blackbird's \"From the very beginning and at every stage\" are memorable because they are SPECIFIC." },
      { label: "CRO Insight", text: "Values sections only convert when they answer the founder's real question: \"How will you behave when things get hard?\" Specific commitments beat generic values." },
    ],
    mockup: `SECTION HEADER: "How We Work"

THREE PRINCIPLES (bold headline + 1-2 sentences):

  1. Fast Decisions, Not Committees
  "We make investment decisions in weeks, not months.
   Founders shouldn't have to wait."

  2. Capital + Financial Expertise
  "We bring deep financial structuring knowledge
   to every deal - not just a check."

  3. Founders for the Long Term
  "We back you at the start and show up
   at every stage after."

(Write based on Peter's actual operating principles.
 Be specific, be different, be memorable.)`,
  },
  {
    num: 7,
    title: "Team / About Peter (NEW)",
    notes: [
      { label: "Current", text: "No dedicated team section on homepage. Peter referenced in testimonials, footer links to peterdavisau.com. Founders must leave to learn about him." },
      { label: "Change", text: "Add brief, human section about Peter directly on homepage. 6/9 funds show team on homepage." },
      { label: "Why", text: "This is a personal fund. The investor IS the product. Founders are choosing to work with Peter personally. Skip Capital makes team the ENTIRE homepage." },
      { label: "Tone", text: "Skip Capital's bios mention jiu jitsu and flat whites. Include ONE personal detail that makes Peter human." },
    ],
    mockup: `SECTION HEADER: "Who We Are"

  [Professional photo of Peter]

  Peter Davis
  Founder, Davis Enterprises Holdings

  "Peter has been investing in early-stage Australian
   companies for [X] years, with a background in
   [finance/accounting/specific]. He backs founders
   building real things that solve real problems -
   and he's not afraid to bet on the unconventional."

  [LinkedIn] [Personal site]`,
  },
  {
    num: 8,
    title: "Content / Journal (NEW)",
    notes: [
      { label: "Current", text: "No blog, newsletter, or thought leadership content on the site." },
      { label: "Change", text: "Add a lightweight content section - even starting with 2-3 posts. 6/9 funds have thought leadership on homepage." },
      { label: "Why", text: "Content serves 3 purposes: (1) domain expertise signal, (2) SEO/discoverability, (3) shareable reputation building. This is how funds build deal flow passively." },
      { label: "MVP", text: "Even a simple \"Notes\" section with 1-2 posts signals intellectual engagement. Can link to LinkedIn articles or Substack." },
    ],
    mockup: `SECTION HEADER: "Thinking" or "Journal"

2-3 ARTICLE CARDS:
  [Why We Invested in [Company X]] - Investment thesis
  [What I Look for in a Founder] - Peter's framework
  [The Australian Space Opportunity] - Sector insight

Does NOT need to be a full blog platform.
Links to LinkedIn articles or Substack work fine.

NEWSLETTER CTA:
  "Stay in the loop" + email field`,
  },
  {
    num: 9,
    title: "Call to Action (Bottom)",
    notes: [
      { label: "Current", text: "CTA section with \"Get in Touch\" linking to LinkedIn company page only." },
      { label: "Change", text: "Add email option alongside LinkedIn. LinkedIn-only adds friction - founder must log in, find message button, compose." },
      { label: "Why", text: "Square Peg: \"Let's start talking.\" AirTree: \"Get in touch.\" Best CTAs are warm invitations." },
      { label: "CRO Data", text: "Every additional click between \"I want to reach out\" and \"message sent\" loses ~20% of potential contacts. LinkedIn-only = 3+ extra clicks vs. direct email." },
    ],
    mockup: `SECTION HEADER: "Let's Talk"

  "Building something bold?
   We'd love to hear about it."

  [Email Us: peter@davisenterprises.com.au]
  [Connect on LinkedIn ->]

Optional: simple form (Name, Email, Company, One-line pitch).
Email should ALWAYS be available as lowest-friction option.`,
  },
  {
    num: 10,
    title: "Footer",
    notes: [
      { label: "Current", text: "Logo, tagline, column links, copyright, location. Functional but standard." },
      { label: "Change", text: "Add belief statement as footer anchor. Lux puts \"We believe before others understand\" in footer. Bookends the page with brand identity." },
      { label: "Add", text: "Direct email address visible in footer (trust signal - shows accessibility)." },
    ],
    mockup: `[Davis Enterprises Logo]
"Conviction capital for Australia's boldest founders"

[About] [Portfolio] [Thesis] [Team] [Journal] [Contact]

peter@davisenterprises.com.au
Melbourne, Australia
[LinkedIn]
(c) 2026 Davis Enterprises Holdings`,
  },
];

const priorityActions = [
  { rank: 1, action: "Rewrite the hero", detail: "Single bold statement, no \"Welcome\"", impact: "Highest impact, lowest effort" },
  { rank: 2, action: "Add one-line descriptors to portfolio", detail: "Tell founders what each company does", impact: "Highest conversion impact" },
  { rank: 3, action: "Add \"Pitch Us\" CTA to navigation", detail: "Direct conversion path for founders", impact: "Direct revenue driver" },
  { rank: 4, action: "Create thesis pillars section", detail: "Name the sectors: AI, Space, Robotics, Emerging", impact: "Helps founders self-select" },
  { rank: 5, action: "Add Peter's bio to homepage", detail: "Photo, credentials, personality", impact: "Trust for a personal fund" },
  { rank: 6, action: "Source 3 founder testimonials", detail: "From portfolio founders about specific value-add", impact: "Social proof that converts" },
  { rank: 7, action: "Add direct email contact", detail: "Reduce friction vs LinkedIn-only", impact: "Captures 20%+ more leads" },
  { rank: 8, action: "Reduce visual effects/animation", detail: "Remove scan lines, orbs, glitch effects", impact: "Faster load, better readability" },
  { rank: 9, action: "Start a lightweight journal", detail: "Investment notes, founder frameworks, sector insights", impact: "SEO + passive deal flow" },
  { rank: 10, action: "Add newsletter signup", detail: "\"Stay in the loop\" with email capture", impact: "Community building" },
];

const langPatterns = [
  { trait: "Founder-centric language", freq: "7/9", color: "#2d7fff" },
  { trait: "Anti-jargon (no buzzwords)", freq: "9/9", color: "#00d4ff" },
  { trait: "Aspirational but grounded", freq: "7/9", color: "#2d7fff" },
  { trait: "Short, declarative sentences", freq: "8/9", color: "#2d7fff" },
  { trait: "Mission-first over returns-first", freq: "9/9", color: "#00d4ff" },
  { trait: "Warmth / approachability", freq: "6/9", color: "#4da8ff" },
  { trait: "Manifesto / belief-driven copy", freq: "5/9", color: "#4da8ff" },
];

const trustSignals = [
  { signal: "Portfolio company logos / names", freq: "9/9" },
  { signal: "Named team members on homepage", freq: "6/9" },
  { signal: "Thought leadership content", freq: "6/9" },
  { signal: "Institutional backing", freq: "5/9" },
  { signal: "Key stats (understated)", freq: "4/9" },
  { signal: "Founder testimonials", freq: "3/9" },
  { signal: "Co-investor / partner logos", freq: "3/9" },
  { signal: "Community programs", freq: "3/9" },
];

// ─── STYLES ──────────────────────────────────────────────────────────

const css = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #0a0f1a; color: #e0e8f5; }
  a { color: #4da8ff; text-decoration: none; }
  a:hover { text-decoration: underline; }

  .login-wrap { min-height: 100vh; display: flex; align-items: center; justify-content: center; }
  .login-box { background: #111827; border: 1px solid #1e293b; border-radius: 12px; padding: 48px; max-width: 400px; width: 100%; text-align: center; }
  .login-box h1 { font-size: 20px; font-weight: 600; margin-bottom: 8px; }
  .login-box p { color: #7a8faa; font-size: 14px; margin-bottom: 24px; }
  .login-box input { width: 100%; padding: 12px 16px; background: #0a0f1a; border: 1px solid #1e293b; border-radius: 8px; color: #e0e8f5; font-size: 15px; margin-bottom: 12px; outline: none; }
  .login-box input:focus { border-color: #2d7fff; }
  .login-box button { width: 100%; padding: 12px; background: #2d7fff; color: white; border: none; border-radius: 8px; font-size: 15px; font-weight: 500; cursor: pointer; }
  .login-box button:hover { background: #1a6ae8; }
  .login-error { color: #f87171; font-size: 13px; margin-bottom: 12px; }

  .page { max-width: 1200px; margin: 0 auto; padding: 40px 24px 80px; }
  .page-header { text-align: center; margin-bottom: 64px; padding-top: 40px; }
  .page-header h1 { font-size: 36px; font-weight: 700; margin-bottom: 8px; }
  .page-header .sub { color: #7a8faa; font-size: 15px; line-height: 1.6; max-width: 700px; margin: 0 auto; }

  .nav-tabs { display: flex; gap: 4px; margin-bottom: 48px; border-bottom: 1px solid #1e293b; overflow-x: auto; }
  .nav-tab { padding: 12px 20px; font-size: 14px; font-weight: 500; color: #7a8faa; cursor: pointer; border-bottom: 2px solid transparent; white-space: nowrap; background: none; border-top: none; border-left: none; border-right: none; }
  .nav-tab:hover { color: #e0e8f5; }
  .nav-tab.active { color: #2d7fff; border-bottom-color: #2d7fff; }

  .section-title { font-size: 24px; font-weight: 700; margin-bottom: 8px; }
  .section-sub { color: #7a8faa; font-size: 14px; margin-bottom: 32px; }

  /* Two-column redesign sections */
  .redesign-section { margin-bottom: 48px; border: 1px solid #1e293b; border-radius: 12px; overflow: hidden; }
  .redesign-header { background: #111827; padding: 16px 24px; border-bottom: 1px solid #1e293b; display: flex; align-items: center; gap: 12px; }
  .redesign-num { background: #2d7fff; color: white; font-size: 13px; font-weight: 700; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; border-radius: 6px; font-family: 'JetBrains Mono', monospace; }
  .redesign-name { font-size: 18px; font-weight: 600; }
  .redesign-body { display: grid; grid-template-columns: 1fr 1fr; min-height: 200px; }
  @media (max-width: 768px) { .redesign-body { grid-template-columns: 1fr; } }
  .redesign-notes { padding: 24px; border-right: 1px solid #1e293b; }
  @media (max-width: 768px) { .redesign-notes { border-right: none; border-bottom: 1px solid #1e293b; } }
  .redesign-mockup { padding: 24px; background: #0d1321; }
  .note-item { margin-bottom: 16px; }
  .note-label { font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 500; color: #2d7fff; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
  .note-text { font-size: 14px; line-height: 1.65; color: #b0bdd0; }
  .mockup-pre { font-family: 'JetBrains Mono', monospace; font-size: 12.5px; line-height: 1.7; color: #7dd3fc; white-space: pre-wrap; word-break: break-word; }

  /* Comp analysis tables */
  .comp-table { width: 100%; border-collapse: collapse; margin-bottom: 32px; font-size: 14px; }
  .comp-table th { text-align: left; padding: 10px 14px; background: #111827; color: #7a8faa; font-weight: 500; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid #1e293b; }
  .comp-table td { padding: 10px 14px; border-bottom: 1px solid #0f172a; color: #b0bdd0; vertical-align: top; }
  .comp-table tr:hover td { background: #111827; }

  /* Portfolio grid */
  .portfolio-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; margin-bottom: 32px; }
  .portfolio-card { background: #111827; border: 1px solid #1e293b; border-radius: 10px; padding: 20px; }
  .portfolio-card h3 { font-size: 16px; font-weight: 600; margin-bottom: 4px; }
  .portfolio-card .sector { font-size: 12px; color: #7a8faa; margin-bottom: 8px; }
  .portfolio-card .desc { font-size: 13px; color: #b0bdd0; line-height: 1.5; margin-bottom: 10px; }
  .portfolio-tag { display: inline-block; font-size: 10px; font-weight: 600; padding: 3px 8px; border-radius: 4px; letter-spacing: 0.05em; }
  .tag-ai { background: rgba(45,127,255,0.15); color: #4da8ff; }
  .tag-space { background: rgba(200,80,255,0.15); color: #d08cff; }
  .tag-robotics { background: rgba(0,212,255,0.15); color: #00d4ff; }
  .tag-emerging { background: rgba(255,180,50,0.15); color: #ffb432; }
  .tag-platform { background: rgba(100,220,100,0.15); color: #6ddc6d; }

  /* Priority list */
  .priority-list { display: flex; flex-direction: column; gap: 12px; }
  .priority-item { display: grid; grid-template-columns: 40px 1fr 200px; gap: 16px; align-items: center; background: #111827; border: 1px solid #1e293b; border-radius: 10px; padding: 16px 20px; }
  @media (max-width: 768px) { .priority-item { grid-template-columns: 40px 1fr; } .priority-impact { display: none; } }
  .priority-rank { font-family: 'JetBrains Mono', monospace; font-size: 18px; font-weight: 700; color: #2d7fff; text-align: center; }
  .priority-action { font-size: 15px; font-weight: 600; }
  .priority-detail { font-size: 13px; color: #7a8faa; margin-top: 2px; }
  .priority-impact { font-size: 12px; color: #4da8ff; font-family: 'JetBrains Mono', monospace; text-align: right; }

  /* Freq bars */
  .freq-row { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
  .freq-label { width: 260px; font-size: 13px; color: #b0bdd0; flex-shrink: 0; }
  .freq-bar-bg { flex: 1; height: 24px; background: #111827; border-radius: 4px; overflow: hidden; position: relative; }
  .freq-bar { height: 100%; border-radius: 4px; display: flex; align-items: center; justify-content: flex-end; padding-right: 8px; font-size: 11px; font-weight: 600; color: white; font-family: 'JetBrains Mono', monospace; }
  .freq-val { width: 40px; font-size: 13px; font-weight: 600; text-align: right; font-family: 'JetBrains Mono', monospace; flex-shrink: 0; }

  /* Wireframe */
  .wireframe { background: #0d1321; border: 1px solid #1e293b; border-radius: 12px; padding: 32px; font-family: 'JetBrains Mono', monospace; font-size: 12px; line-height: 1.8; color: #7dd3fc; white-space: pre-wrap; overflow-x: auto; margin-bottom: 32px; }

  .stat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; margin-bottom: 40px; }
  .stat-card { background: #111827; border: 1px solid #1e293b; border-radius: 10px; padding: 20px; text-align: center; }
  .stat-num { font-size: 28px; font-weight: 700; color: #2d7fff; font-family: 'JetBrains Mono', monospace; }
  .stat-label { font-size: 12px; color: #7a8faa; margin-top: 4px; }

  .callout { background: rgba(45,127,255,0.08); border-left: 3px solid #2d7fff; padding: 16px 20px; border-radius: 0 8px 8px 0; margin-bottom: 32px; font-size: 14px; line-height: 1.6; color: #b0bdd0; }
  .callout strong { color: #e0e8f5; }

  .gh-link { display: inline-flex; align-items: center; gap: 8px; background: #111827; border: 1px solid #1e293b; padding: 10px 20px; border-radius: 8px; font-size: 14px; color: #e0e8f5; margin-top: 24px; }
  .gh-link:hover { background: #1e293b; text-decoration: none; }
`;

// ─── COMPONENTS ──────────────────────────────────────────────────────

function LoginGate({ onAuth }: { onAuth: () => void }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pw === PASSWORD) {
      onAuth();
    } else {
      setError(true);
    }
  };

  return (
    <div className="login-wrap">
      <form className="login-box" onSubmit={handleSubmit}>
        <h1>Davis Enterprises</h1>
        <p>Website Redesign Brief</p>
        {error && <div className="login-error">Incorrect password</div>}
        <input
          type="password"
          placeholder="Enter password"
          value={pw}
          onChange={(e) => { setPw(e.target.value); setError(false); }}
          autoFocus
        />
        <button type="submit">View Brief</button>
      </form>
    </div>
  );
}

function TagBadge({ tag }: { tag: string }) {
  const cls = tag === "AI" ? "tag-ai" : tag === "SPACE" ? "tag-space" : tag === "ROBOTICS" ? "tag-robotics" : tag === "PLATFORM" ? "tag-platform" : "tag-emerging";
  const labels: Record<string, string> = { AI: "AI & AUTOMATION", SPACE: "SPACE & DEFENSE", ROBOTICS: "ROBOTICS & DEEP TECH", PLATFORM: "PLATFORM", EMERGING: "EMERGING" };
  return <span className={`portfolio-tag ${cls}`}>{labels[tag] || tag}</span>;
}

// ─── MAIN ────────────────────────────────────────────────────────────

export default function Page() {
  const [authed, setAuthed] = useState(false);
  const [tab, setTab] = useState<"brief" | "analysis" | "portfolio">("brief");

  if (!authed) {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <LoginGate onAuth={() => setAuthed(true)} />
      </>
    );
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="page">
        <div className="page-header">
          <h1>Davis Enterprises Holdings</h1>
          <p className="sub">
            Website redesign brief informed by competitive analysis of 9 comparable early-stage and deep tech fund websites.
            Prepared February 2026.
          </p>
          <a className="gh-link" href="https://github.com/jgdeutsch/davis-enterprises-redesign" target="_blank" rel="noopener">
            View on GitHub
          </a>
        </div>

        <div className="nav-tabs">
          <button className={`nav-tab ${tab === "brief" ? "active" : ""}`} onClick={() => setTab("brief")}>Redesign Brief</button>
          <button className={`nav-tab ${tab === "analysis" ? "active" : ""}`} onClick={() => setTab("analysis")}>Competitive Analysis</button>
          <button className={`nav-tab ${tab === "portfolio" ? "active" : ""}`} onClick={() => setTab("portfolio")}>Portfolio</button>
        </div>

        {tab === "brief" && <BriefTab />}
        {tab === "analysis" && <AnalysisTab />}
        {tab === "portfolio" && <PortfolioTab />}
      </div>
    </>
  );
}

function BriefTab() {
  return (
    <>
      <div className="callout">
        <strong>How to read this brief:</strong> Each section below has two columns. The <strong>left column</strong> explains what was changed and why (backed by competitive evidence). The <strong>right column</strong> shows the proposed structure and copy direction. At the bottom you'll find the full page wireframe and priority actions.
      </div>

      {sections.map((s) => (
        <div className="redesign-section" key={s.num}>
          <div className="redesign-header">
            <div className="redesign-num">{s.num}</div>
            <div className="redesign-name">{s.title}</div>
          </div>
          <div className="redesign-body">
            <div className="redesign-notes">
              {s.notes.map((n, i) => (
                <div className="note-item" key={i}>
                  <div className="note-label">{n.label}</div>
                  <div className="note-text">{n.text}</div>
                </div>
              ))}
            </div>
            <div className="redesign-mockup">
              <div className="mockup-pre">{s.mockup}</div>
            </div>
          </div>
        </div>
      ))}

      <h2 className="section-title" style={{ marginTop: 64 }}>Full Page Wireframe</h2>
      <p className="section-sub">Complete section flow from top to bottom</p>
      <div className="wireframe">{`1. NAV         [Logo] -- [About] [Portfolio] [Thesis] [Team] [Journal] -- [PITCH US]
               _______________________________________________________________

2. HERO        "We back bold Australian founders building what's next"
               [1-2 sentence supporting paragraph]
               [CTA: See Our Portfolio]
               _______________________________________________________________

3. THESIS      "What We Back"
               [AI & Automation] [Space & Defense] [Robotics & Deep Tech] [Emerging]
               Stage: Pre-seed & Seed | Geography: Australia | Approach: Conviction-led
               _______________________________________________________________

4. PORTFOLIO   "Our Portfolio"
               [Actuals]      [Apollo]       [Aquila]
               AI Billing     AI Security    Laser Power

               [Chirp]        [Elita]        [Fluency]
               AI Sales       Pet Health     Work Intel

               [Flux]         [HEO]          [Keeyu]
               Ag Robots      Space Imaging  Ecom Ops

               [Kindling]     [Magic Valley] [Metahuman]
               Creator Tools  Cultured Meat  Supplements

               [MP Space]     [Puralink]     [Shopfront]
               Space Power    Pipe Robots    Resale Tools
               _______________________________________________________________

5. TESTIMONIALS "From Our Founders"
               [Quote 1]      [Quote 2]      [Quote 3]
               - Founder A    - Founder B    - Founder C
               _______________________________________________________________

6. HOW WE WORK "How We Work"
               [Fast Decisions] [Capital + Expertise] [Long-term Commitment]
               _______________________________________________________________

7. TEAM        "Who We Are"
               [Photo] Peter Davis - Founder
               [Bio paragraph]
               [LinkedIn + personal site]
               _______________________________________________________________

8. JOURNAL     "Thinking"
               [Post 1]       [Post 2]       [Post 3]
               [Newsletter signup]
               _______________________________________________________________

9. CTA         "Let's Talk"
               "Building something bold? We'd love to hear about it."
               [Email Us]     [LinkedIn]
               _______________________________________________________________

10. FOOTER     [Logo] "Conviction capital for Australia's boldest founders"
               [Nav links] | peter@... | Melbourne | LinkedIn | (c) 2026`}</div>

      <h2 className="section-title" style={{ marginTop: 64 }}>Priority Actions</h2>
      <p className="section-sub">Ranked by impact on founder conversion</p>
      <div className="priority-list">
        {priorityActions.map((p) => (
          <div className="priority-item" key={p.rank}>
            <div className="priority-rank">{p.rank}</div>
            <div>
              <div className="priority-action">{p.action}</div>
              <div className="priority-detail">{p.detail}</div>
            </div>
            <div className="priority-impact">{p.impact}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function AnalysisTab() {
  return (
    <>
      <div className="stat-grid">
        <div className="stat-card"><div className="stat-num">9</div><div className="stat-label">Funds Analyzed</div></div>
        <div className="stat-card"><div className="stat-num">9/9</div><div className="stat-label">Lead with bold hero</div></div>
        <div className="stat-card"><div className="stat-num">7/9</div><div className="stat-label">Founder-centric language</div></div>
        <div className="stat-card"><div className="stat-num">0/9</div><div className="stat-label">Lead with fund size</div></div>
      </div>

      <h2 className="section-title">Funds Analyzed</h2>
      <p className="section-sub">Comparable early-stage and deep tech investors</p>
      <table className="comp-table">
        <thead>
          <tr><th>Fund</th><th>Focus</th><th>Hero Message</th><th>Pattern</th></tr>
        </thead>
        <tbody>
          {funds.map((f) => (
            <tr key={f.name}>
              <td style={{ fontWeight: 600, color: "#e0e8f5" }}>{f.name}</td>
              <td>{f.focus}</td>
              <td style={{ fontStyle: "italic" }}>"{f.hero}"</td>
              <td><span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#4da8ff" }}>{f.pattern}</span></td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="section-title" style={{ marginTop: 48 }}>Language Patterns</h2>
      <p className="section-sub">How frequently each trait appears across 9 fund websites</p>
      {langPatterns.map((p) => {
        const [n, d] = p.freq.split("/").map(Number);
        const pct = (n / d) * 100;
        return (
          <div className="freq-row" key={p.trait}>
            <div className="freq-label">{p.trait}</div>
            <div className="freq-bar-bg">
              <div className="freq-bar" style={{ width: `${pct}%`, background: p.color }}>{p.freq}</div>
            </div>
          </div>
        );
      })}

      <h2 className="section-title" style={{ marginTop: 48 }}>Trust Signals</h2>
      <p className="section-sub">Ranked by frequency across 9 fund homepages</p>
      <table className="comp-table">
        <thead>
          <tr><th>Signal</th><th>Frequency</th><th>Bar</th></tr>
        </thead>
        <tbody>
          {trustSignals.map((t) => {
            const [n, d] = t.freq.split("/").map(Number);
            const pct = (n / d) * 100;
            return (
              <tr key={t.signal}>
                <td>{t.signal}</td>
                <td style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>{t.freq}</td>
                <td style={{ width: 200 }}>
                  <div style={{ height: 8, background: "#1e293b", borderRadius: 4, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${pct}%`, background: "#2d7fff", borderRadius: 4 }} />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h2 className="section-title" style={{ marginTop: 48 }}>Key Vocabulary</h2>
      <p className="section-sub">Words the best fund websites use vs. avoid</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 32 }}>
        <div style={{ background: "#111827", border: "1px solid #1e293b", borderRadius: 10, padding: 24 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#4ade80", marginBottom: 12, fontFamily: "'JetBrains Mono', monospace" }}>USE</div>
          <div style={{ fontSize: 14, color: "#b0bdd0", lineHeight: 2 }}>
            "Back" (not "invest in")<br />
            "Founders" (not "companies")<br />
            "Build" / "building"<br />
            "Future" / "tomorrow"<br />
            "Conviction" / "belief"
          </div>
        </div>
        <div style={{ background: "#111827", border: "1px solid #1e293b", borderRadius: 10, padding: 24 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#f87171", marginBottom: 12, fontFamily: "'JetBrains Mono', monospace" }}>AVOID</div>
          <div style={{ fontSize: 14, color: "#b0bdd0", lineHeight: 2 }}>
            "Synergy" / "ecosystem"<br />
            "Alpha" / "value-add"<br />
            Fund size in hero<br />
            Exclamation marks<br />
            Emojis
          </div>
        </div>
      </div>
    </>
  );
}

function PortfolioTab() {
  return (
    <>
      <div className="stat-grid">
        <div className="stat-card"><div className="stat-num">16</div><div className="stat-label">Portfolio Companies</div></div>
        <div className="stat-card"><div className="stat-num">63%</div><div className="stat-label">AI-Native Software</div></div>
        <div className="stat-card"><div className="stat-num">19%</div><div className="stat-label">Space & Defense</div></div>
        <div className="stat-card"><div className="stat-num">25%</div><div className="stat-label">Robotics & Deep Tech</div></div>
      </div>

      <h2 className="section-title">All Portfolio Companies</h2>
      <p className="section-sub">With one-line descriptors and category tags (as recommended in the brief)</p>
      <div className="portfolio-grid">
        {portfolio.map((p) => (
          <a href={p.url} target="_blank" rel="noopener" key={p.name} style={{ textDecoration: "none", color: "inherit" }}>
            <div className="portfolio-card">
              <h3>{p.name}</h3>
              <div className="sector">{p.sector}</div>
              <div className="desc">{p.desc}</div>
              <TagBadge tag={p.tag} />
            </div>
          </a>
        ))}
      </div>

      <h2 className="section-title" style={{ marginTop: 48 }}>Portfolio Themes</h2>
      <p className="section-sub">The investment thesis the portfolio reveals</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
        {[
          { title: "AI-Native Vertical Software", pct: "63%", companies: "Actuals, Apollo, Chirp, Fluency, Keeyu, Shopfront, Kindling, Elita", desc: "Each applies AI/automation to a specific, underserved operational pain point in a vertical.", color: "#2d7fff" },
          { title: "Space & Defense", pct: "19%", companies: "Aquila, HEO, MP Space", desc: "Betting on Australia's growing sovereign space and defense capability.", color: "#c850ff" },
          { title: "Robotics & Deep Tech", pct: "25%", companies: "Flux, Puralink, Aquila, MP Space", desc: "Companies building physical products with deep engineering, not just software.", color: "#00d4ff" },
          { title: "Emerging & Platform", pct: "19%", companies: "Kindling, Elita, Metahuman Labs, Aussie Angels", desc: "Creator tools, pet health, consumer wellness, and ecosystem infrastructure.", color: "#ffb432" },
        ].map((t) => (
          <div key={t.title} style={{ background: "#111827", border: "1px solid #1e293b", borderRadius: 10, padding: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <div style={{ fontSize: 16, fontWeight: 600 }}>{t.title}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 20, fontWeight: 700, color: t.color }}>{t.pct}</div>
            </div>
            <div style={{ fontSize: 13, color: "#7a8faa", marginBottom: 8 }}>{t.companies}</div>
            <div style={{ fontSize: 13, color: "#b0bdd0", lineHeight: 1.5 }}>{t.desc}</div>
          </div>
        ))}
      </div>
    </>
  );
}
