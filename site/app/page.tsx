"use client";
import { useState } from "react";

export default function Page() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [err, setErr] = useState(false);

  if (!authed) {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className="gate">
          <form onSubmit={e => { e.preventDefault(); pw === "keira26" ? setAuthed(true) : setErr(true); }}>
            <h1>Davis Enterprises Holdings</h1>
            <p>Website Redesign Brief</p>
            {err && <div className="err">Incorrect password</div>}
            <input type="password" placeholder="Enter password" value={pw} onChange={e => { setPw(e.target.value); setErr(false); }} autoFocus />
            <button type="submit">View Brief</button>
          </form>
        </div>
      </>
    );
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="wrap">

        {/* ── COVER ──────────────────────────────────────── */}
        <header className="cover">
          <div className="badge">CONFIDENTIAL BRIEF</div>
          <h1>Website Redesign Proposal</h1>
          <h2>davisenterprises.com.au</h2>
          <p className="covermeta">
            We analyzed 9 comparable fund websites to identify the patterns that attract
            the best founder deal flow. This brief explains what to change, why, and in what order.
          </p>
          <p className="coverdate">February 2026</p>
        </header>

        {/* ── EXECUTIVE SUMMARY ─────────────────────────── */}
        <section>
          <h2 className="sh">Executive Summary</h2>
          <div className="summary-grid">
            <div className="summary-card good">
              <div className="summary-label">What's working</div>
              <ul>
                <li>Strong dark visual identity (aligned with deep tech positioning)</li>
                <li>Clean portfolio grid with 16 companies</li>
                <li>Sophisticated typography (Cormorant Garamond + Outfit)</li>
                <li>Testimonials from people who know Peter</li>
              </ul>
            </div>
            <div className="summary-card gap">
              <div className="summary-label">Critical gaps</div>
              <ul>
                <li>No belief statement in the hero - just "Welcome"</li>
                <li>Portfolio shows logos but doesn't explain what companies do</li>
                <li>No "Pitch Us" CTA anywhere - founders can't easily reach out</li>
                <li>"Sector agnostic" hides a clear thesis that already exists</li>
                <li>Peter's bio isn't on the homepage</li>
                <li>Contact is LinkedIn-only (high friction)</li>
              </ul>
            </div>
          </div>
          <div className="verdict">
            <strong>The bottom line:</strong> The current site looks good but doesn't do the job a fund website
            needs to do - convince a founder in 30 seconds that Davis is the right investor for them,
            and give them a frictionless way to get in touch.
          </div>
        </section>

        {/* ── COMPETITIVE CONTEXT ───────────────────────── */}
        <section>
          <h2 className="sh">What the Best Fund Websites Do</h2>
          <p className="sp">We analyzed these 9 funds that compete for similar deal flow:</p>
          <div className="fund-strip">
            {["Main Sequence","Blackbird","AirTree","Square Peg","Tenacious Ventures","Skip Capital","Lux Capital","In-Q-Tel","Breakthrough Victoria"].map(f => (
              <span key={f} className="fund-chip">{f}</span>
            ))}
          </div>

          <h3 className="ssh">Universal patterns (things every fund does)</h3>
          <div className="pattern-list">
            {[
              { pattern: "Bold hero statement under 15 words", count: "9/9", note: "Davis has \"Welcome\" + generic copy" },
              { pattern: "Portfolio showcase with company context", count: "9/9", note: "Davis shows logos only, no descriptions" },
              { pattern: "Anti-jargon, human language", count: "9/9", note: "Davis is fine here" },
              { pattern: "Mission-first (never lead with fund size)", count: "9/9", note: "Davis is fine here" },
            ].map(p => (
              <div key={p.pattern} className="pattern-row">
                <div className="pattern-count">{p.count}</div>
                <div>
                  <div className="pattern-name">{p.pattern}</div>
                  <div className="pattern-note">{p.note}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="ssh">Common patterns (most funds do this)</h3>
          <div className="pattern-list">
            {[
              { pattern: "Founder-facing CTA in navigation (\"Pitch Us\")", count: "7/9", note: "Davis has no CTA" },
              { pattern: "Clear thesis / sector focus on homepage", count: "7/9", note: "Davis says \"sector agnostic\"" },
              { pattern: "Named team members visible", count: "6/9", note: "Peter's bio is off-site" },
              { pattern: "Thought leadership content", count: "6/9", note: "Davis has no blog or journal" },
              { pattern: "Newsletter signup", count: "5/9", note: "Davis has none" },
            ].map(p => (
              <div key={p.pattern} className="pattern-row">
                <div className="pattern-count">{p.count}</div>
                <div>
                  <div className="pattern-name">{p.pattern}</div>
                  <div className="pattern-note">{p.note}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="insight-box">
            <div className="insight-label">Key Insight</div>
            Every fund we analyzed uses the word <strong>"back"</strong> instead of "invest in" and centers
            <strong> "founders"</strong> instead of "companies." The language signals partnership, not transaction.
            The best hero messages read like beliefs, not descriptions.
          </div>

          <div className="hero-compare">
            <div className="hero-example">
              <div className="hero-fund">Main Sequence</div>
              <div className="hero-quote">"We back deep tech founders"</div>
            </div>
            <div className="hero-example">
              <div className="hero-fund">Lux Capital</div>
              <div className="hero-quote">"We turn sci-fi into sci-fact"</div>
            </div>
            <div className="hero-example">
              <div className="hero-fund">Blackbird</div>
              <div className="hero-quote">"Enter the world of Blackbird"</div>
            </div>
            <div className="hero-example current">
              <div className="hero-fund">Davis (current)</div>
              <div className="hero-quote">"Welcome"</div>
            </div>
          </div>
        </section>

        {/* ── THE HIDDEN THESIS ─────────────────────────── */}
        <section>
          <h2 className="sh">Your Thesis Already Exists - Name It</h2>
          <p className="sp">
            The site says "sector agnostic" but the portfolio tells a very specific story. These are the
            four themes we identified across your 16 companies. Naming them explicitly helps founders
            self-select and signals that you understand their domain.
          </p>
          <div className="thesis-grid">
            {[
              { title: "AI & Automation", pct: "63%", color: "#2d7fff", companies: ["Actuals","Apollo","Chirp","Fluency","Keeyu","Shopfront","Kindling","Elita"], desc: "AI applied to specific verticals - billing, cybersecurity, sales, ecommerce, enterprise ops, creator tools" },
              { title: "Space & Defense", pct: "19%", color: "#c850ff", companies: ["HEO","MP Space","Aquila"], desc: "Australian sovereign capability - orbital imaging, spacecraft power, wireless energy" },
              { title: "Robotics & Deep Tech", pct: "25%", color: "#00d4ff", companies: ["Flux","Puralink","Magic Valley"], desc: "Hardware solving physical-world problems in agriculture, infrastructure, and food" },
              { title: "Emerging & Platform", pct: "19%", color: "#ffb432", companies: ["Kindling","Elita","Metahuman Labs","Aussie Angels"], desc: "Creator tools, pet health, consumer wellness, and ecosystem infrastructure" },
            ].map(t => (
              <div key={t.title} className="thesis-card">
                <div className="thesis-head">
                  <span className="thesis-title">{t.title}</span>
                  <span className="thesis-pct" style={{ color: t.color }}>{t.pct}</span>
                </div>
                <div className="thesis-desc">{t.desc}</div>
                <div className="thesis-companies">{t.companies.join(" / ")}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 10 RECOMMENDATIONS ────────────────────────── */}
        <section>
          <h2 className="sh">10 Recommendations, Ranked by Impact</h2>
          <p className="sp">What to change, why, and what to aim for. Ordered so you can start from #1 and work down.</p>

          {recommendations.map((r, i) => (
            <div key={i} className="rec">
              <div className="rec-head">
                <span className="rec-num">{i + 1}</span>
                <span className="rec-title">{r.title}</span>
                <span className={`rec-effort ${r.effort}`}>{r.effortLabel}</span>
              </div>
              <div className="rec-body">
                <div className="rec-col">
                  <div className="rec-label">Now</div>
                  <div className="rec-text">{r.now}</div>
                  <div className="rec-label" style={{ marginTop: 16 }}>Why Change</div>
                  <div className="rec-text">{r.why}</div>
                  {r.evidence && (
                    <>
                      <div className="rec-label" style={{ marginTop: 16 }}>Evidence</div>
                      <div className="rec-text">{r.evidence}</div>
                    </>
                  )}
                </div>
                <div className="rec-col rec-target">
                  <div className="rec-label">Target</div>
                  <div className="rec-mock">{r.target}</div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ── PROPOSED PAGE FLOW ────────────────────────── */}
        <section>
          <h2 className="sh">Proposed Page Structure</h2>
          <p className="sp">How the homepage should flow from top to bottom after implementing all recommendations.</p>
          <div className="flow">
            {[
              { num: "01", name: "Navigation", desc: "Logo + 5 links + [PITCH US] button" },
              { num: "02", name: "Hero", desc: "Bold belief statement + 2-sentence supporting copy + CTA" },
              { num: "03", name: "What We Back", desc: "4 thesis pillars with portfolio proof under each" },
              { num: "04", name: "Portfolio", desc: "16 companies in grid, each with one-line descriptor + category tag" },
              { num: "05", name: "From Our Founders", desc: "3 testimonials from portfolio founders about specific value-add" },
              { num: "06", name: "How We Work", desc: "3 specific operating principles (not generic values)" },
              { num: "07", name: "Who We Are", desc: "Peter's photo, bio, credentials + one personal detail" },
              { num: "08", name: "Thinking", desc: "2-3 articles (investment notes, frameworks, sector views)" },
              { num: "09", name: "Let's Talk", desc: "Email + LinkedIn side by side, warm invitation copy" },
              { num: "10", name: "Footer", desc: "Belief tagline + direct email + location" },
            ].map(s => (
              <div key={s.num} className="flow-row">
                <div className="flow-num">{s.num}</div>
                <div className="flow-name">{s.name}</div>
                <div className="flow-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── DESIGN NOTES ──────────────────────────────── */}
        <section>
          <h2 className="sh">Design Notes</h2>
          <div className="design-grid">
            <div className="design-card keep">
              <div className="design-label">Keep</div>
              <ul>
                <li>Dark theme (aligned with Main Sequence, Lux, Blackbird)</li>
                <li>Cormorant Garamond for headlines + Outfit for body</li>
                <li>Blue accent color (#2d7fff)</li>
                <li>3-column portfolio grid</li>
              </ul>
            </div>
            <div className="design-card change">
              <div className="design-label">Change</div>
              <ul>
                <li>Remove scan lines, floating orbs, and glitch effects (0/9 funds use heavy animation)</li>
                <li>Increase whitespace between sections</li>
                <li>Ensure clean mobile stacking (founder-investor first contact often happens on mobile)</li>
                <li>Strip the background grid overlay and noise texture</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── PORTFOLIO REFERENCE ───────────────────────── */}
        <section>
          <h2 className="sh">Portfolio Reference</h2>
          <p className="sp">All 16 companies with the one-line descriptors we recommend adding to the site.</p>
          <div className="port-table">
            <div className="port-header">
              <span>Company</span><span>What they do</span><span>Category</span>
            </div>
            {[
              { name: "Actuals", desc: "AI billing - converts contracts into code for automated invoicing", tag: "AI & Automation" },
              { name: "Apollo", desc: "AI compliance for startups (SOC 2, ISO 27001, vuln scanning)", tag: "AI & Automation" },
              { name: "Aquila", desc: "Wireless power delivery via high-intensity laser for drones", tag: "Space & Defense" },
              { name: "Aussie Angels", desc: "Angel syndicate platform for co-investing in AU startups", tag: "Emerging" },
              { name: "Chirp", desc: "AI sales platform unifying CRM, email, Slack, WhatsApp, LinkedIn", tag: "AI & Automation" },
              { name: "Elita", desc: "Pet longevity - 100+ biomarkers + stem cell banking for dogs", tag: "Emerging" },
              { name: "Fluency", desc: "OS-level agent mapping how work happens for AI automation", tag: "AI & Automation" },
              { name: "Flux", desc: "Autonomous solar-electric agricultural robot for weed management", tag: "Robotics" },
              { name: "HEO", desc: "Space domain awareness - high-res imagery of objects in orbit", tag: "Space & Defense" },
              { name: "Keeyu", desc: "AI post-purchase ecommerce ops - proactive fulfillment fixes", tag: "AI & Automation" },
              { name: "Kindling", desc: "AI tools + advertiser marketplace for mid-tier creators", tag: "Emerging" },
              { name: "Magic Valley", desc: "Cultivated (cell-grown) meat as sustainable alternative", tag: "Robotics" },
              { name: "Metahuman Labs", desc: "Pharmaceutical-grade creatine monohydrate supplements", tag: "Emerging" },
              { name: "MP Space", desc: "Next-gen spacecraft power subsystems (battery + solar)", tag: "Space & Defense" },
              { name: "Puralink", desc: "Autonomous pipe inspection robots for infrastructure", tag: "Robotics" },
              { name: "Shopfront", desc: "Multi-channel listing for secondhand sellers + AI tools", tag: "AI & Automation" },
            ].map(p => (
              <div key={p.name} className="port-row">
                <span className="port-name">{p.name}</span>
                <span className="port-desc">{p.desc}</span>
                <span className="port-tag">{p.tag}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── FOOTER ────────────────────────────────────── */}
        <footer className="foot">
          <p>Prepared for Peter Davis, Davis Enterprises Holdings</p>
          <p>
            <a href="https://github.com/jgdeutsch/davis-enterprises-redesign" target="_blank" rel="noopener">
              View source files on GitHub
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}

// ─── RECOMMENDATION DATA ──────────────────────────────────────────

const recommendations = [
  {
    title: "Rewrite the hero as a belief statement",
    effort: "low", effortLabel: "Quick win",
    now: "The hero says \"Welcome\" followed by a generic paragraph. It doesn't differentiate Davis from any other angel investor.",
    why: "9 out of 9 funds we analyzed lead with a single bold statement under 15 words. The hero answers one question: \"Who are you and what do you believe?\" - not \"Welcome to our website.\"",
    evidence: "Main Sequence: \"We back deep tech founders.\" Lux: \"We turn sci-fi into sci-fact.\" Blackbird: \"Enter the world of Blackbird.\" Square Peg: \"We help founders from our corner of the world shape the future.\"",
    target: `Pick one:

"We back bold Australian founders building what's next"
"Private capital for Australia's most ambitious builders"
"Conviction capital for founders pushing boundaries"

Then add 1-2 sentences expanding on the thesis:
"Davis Enterprises backs early-stage Australian companies across AI, space, robotics, and deep tech. We provide private capital, strategic support, and the financial expertise to help bold founders scale."`,
  },
  {
    title: "Add one-line descriptors to every portfolio company",
    effort: "low", effortLabel: "Quick win",
    now: "The portfolio grid shows company names and logos. A founder scanning the grid has no idea what Actuals, Keeyu, or Fluency actually does.",
    why: "Portfolio is the #1 trust signal (used by 9/9 funds). But it only works if founders can assess relevance. A space tech founder needs to instantly see that you've backed HEO, MP Space, and Aquila - and what they do. One line per company is all it takes.",
    evidence: "See the Portfolio Reference section at the bottom of this brief for recommended one-liners for all 16 companies.",
    target: `Under each company name, add:

Flux
"Autonomous solar-electric robots for precision agriculture"
[ROBOTICS & DEEP TECH]

Bonus: add a small category tag (AI / Space / Robotics / Emerging) to let founders filter mentally.`,
  },
  {
    title: "Add a \"Pitch Us\" CTA to the navigation",
    effort: "low", effortLabel: "Quick win",
    now: "No clear call-to-action for founders. The only contact path is a \"Get in Touch\" button at the bottom that links to LinkedIn.",
    why: "7/9 funds put a founder-facing CTA in the top navigation. It's the primary conversion path. Founders who land on the site need to see in the first second that there's a clear, low-friction way to reach out.",
    evidence: "Main Sequence: \"Pitch\" in nav. Blackbird: \"Get Investment.\" AirTree: \"Get in touch.\" Square Peg: \"Get in Touch.\" Breakthrough Victoria: \"Submit your pitch.\"",
    target: `[Logo] -- About / Portfolio / Thesis / Team / Journal -- [PITCH US]

The button should be visually distinct (filled, accent color). It links to a simple email or contact form - not a 20-field application.`,
  },
  {
    title: "Name the thesis pillars instead of \"sector agnostic\"",
    effort: "med", effortLabel: "Medium effort",
    now: "Investment criteria are shown as a generic icon list (Geography: Australian, Stage: Early-stage, Sector: Agnostic). This is buried in the About section and tells founders nothing about fit.",
    why: "7/9 funds clearly articulate their thesis on the homepage. Founders self-select based on sector fit. A space tech founder seeing \"sector agnostic\" doesn't know if Davis understands their domain. But seeing \"Space & Defense\" with HEO, MP Space, and Aquila listed underneath creates instant relevance.",
    evidence: "Main Sequence organizes around \"Six Challenges\" (space, decarbonisation, AI, food, healthcare, industry). Lux has named sector cards (space, biotech, microelectronics, energy). Both make the thesis concrete.",
    target: `New section: "What We Back"

Four cards:
- AI & Automation (63% of portfolio)
- Space & Defense (19%)
- Robotics & Deep Tech (25%)
- Emerging & Platform (19%)

Each card: description + named portfolio companies as proof.

Below the cards, a clean row:
Stage: Pre-seed & Seed | Geography: Australia | Approach: Conviction-led`,
  },
  {
    title: "Put Peter's bio on the homepage",
    effort: "low", effortLabel: "Quick win",
    now: "No team section on the homepage. Peter is referenced in testimonials and the footer links to peterdavisau.com, but founders have to leave the site to learn about him.",
    why: "This is a personal fund. The investor IS the product. Founders choosing Davis are choosing to work with Peter - they need to see his face, read his background, and understand what he brings without clicking away. 6/9 funds show their team on the homepage.",
    evidence: "Skip Capital (also a personal/family fund) makes the team the ENTIRE homepage. Their bios mix credentials with personality - jiu jitsu, flat whites, Seinfeld. It makes the team human.",
    target: `Section: "Who We Are"

Photo + Name + Title
2-3 sentence bio mixing professional credentials with one personal detail.

Example tone: "Peter has been investing in early-stage Australian companies for [X] years, with a background in [specific]. He backs founders who are building real things that solve real problems - and he's not afraid to bet on the unconventional."

LinkedIn link + personal site link.`,
  },
  {
    title: "Source 3 testimonials from portfolio founders",
    effort: "med", effortLabel: "Medium effort",
    now: "The site has testimonials from people who know Peter (Sean Grealy, others). They're good character references but speak about Peter as a person, not about the experience of being in the portfolio.",
    why: "When a founder considering Davis reads another founder saying \"Peter connected us to our first defense customer\" or \"He helped us structure our Series A\" - that's what closes the deal. The question every founder has: \"What will this investor DO for me beyond the check?\"",
    evidence: "AirTree uses 7 founder testimonials. Square Peg uses 10. Both focus on specific value: \"supported us through talent, press, and customer introductions\" (Canva co-founder on AirTree). \"Through the ups and the downs\" (multiple Square Peg founders).",
    target: `Section: "From Our Founders"

3 quotes from portfolio company founders (Flux, HEO, Chirp, Apollo, etc.)

Each quote should reference specific help:
- Speed of decision-making
- Strategic introductions
- Financial structuring expertise
- Follow-on support

Format: "[Quote]" - Name, Title, Company`,
  },
  {
    title: "Add direct email alongside LinkedIn",
    effort: "low", effortLabel: "Quick win",
    now: "The only contact path is a \"Get in Touch\" button linking to the Davis Enterprises LinkedIn page. To message Peter, a founder must: click the button, log into LinkedIn, navigate to the page, find the message button, compose a message.",
    why: "Every additional click between \"I want to reach out\" and \"message sent\" loses roughly 20% of potential contacts. LinkedIn-only adds 3+ friction clicks compared to a direct email link. Both Square Peg and AirTree offer direct contact alongside social links.",
    target: `Bottom CTA section: "Let's Talk"

"Building something bold? We'd love to hear about it."

[Email Us: peter@davisenterprises.com.au]  [Connect on LinkedIn]

Also add the email to the footer.`,
  },
  {
    title: "Reduce visual effects and animation",
    effort: "med", effortLabel: "Medium effort",
    now: "The site has scan lines, floating orbs, glitch effects, a grid background overlay, and noise texture. Visually impressive, but heavy.",
    why: "0/9 funds we analyzed use heavy animation. The best sites (Blackbird, Skip, Lux) use generous whitespace and clean transitions instead. Heavy effects slow page load, distract from content, and can feel gimmicky in a trust-driven context. Founders are scanning for relevance, not admiring particle effects.",
    target: `Keep: dark background, serif/sans pairing, blue accent.
Remove: scan lines, floating orbs, glitch effects, grid overlay, noise texture.
Add: more whitespace between sections, clean fade-in transitions.`,
  },
  {
    title: "Start a lightweight journal or blog",
    effort: "high", effortLabel: "Longer-term",
    now: "No content, blog, newsletter, or thought leadership on the site.",
    why: "6/9 funds have thought leadership on their homepage. Content serves three purposes: (1) demonstrates domain expertise to founders, (2) builds SEO and discoverability, (3) gives founders something to share that builds reputation by proxy. Main Sequence publishes investment notes for every deal. Lux has an entire media platform.",
    target: `Section: "Thinking" or "Journal"

Start with 2-3 posts:
- "Why We Invested in [Company X]" (investment thesis note)
- "What I Look for in a Founder" (Peter's framework)
- "The Australian Space Opportunity" (sector insight)

Doesn't need a full blog platform. Linking to LinkedIn articles or a Substack works.`,
  },
  {
    title: "Add newsletter signup",
    effort: "low", effortLabel: "Quick win",
    now: "No email capture anywhere on the site.",
    why: "5/9 funds have newsletter signup on their homepage. It's a soft conversion for founders who aren't ready to pitch yet but want to stay on the radar. Over time, this builds a direct audience that doesn't depend on LinkedIn's algorithm.",
    target: `Simple row at the bottom of the Journal section:

"Stay in the loop" + email input + submit button

Can be powered by Substack, Mailchimp, or even a simple form.`,
  },
];

// ─── STYLES ───────────────────────────────────────────────────────

const styles = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #fafaf9; color: #1a1a1a; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 15px; line-height: 1.7; -webkit-font-smoothing: antialiased; }

  /* Gate */
  .gate { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #111; }
  .gate form { background: #1a1a1a; border: 1px solid #333; border-radius: 12px; padding: 48px; max-width: 380px; width: 100%; text-align: center; }
  .gate h1 { font-size: 18px; font-weight: 600; color: #fff; margin-bottom: 4px; }
  .gate p { color: #888; font-size: 14px; margin-bottom: 24px; }
  .gate input { width: 100%; padding: 12px 16px; background: #111; border: 1px solid #333; border-radius: 8px; color: #fff; font-size: 15px; margin-bottom: 12px; outline: none; }
  .gate input:focus { border-color: #555; }
  .gate button { width: 100%; padding: 12px; background: #fff; color: #111; border: none; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; }
  .gate button:hover { background: #eee; }
  .err { color: #e55; font-size: 13px; margin-bottom: 12px; }

  /* Layout */
  .wrap { max-width: 820px; margin: 0 auto; padding: 40px 24px 80px; }
  section { margin-bottom: 64px; }

  /* Cover */
  .cover { text-align: center; padding: 80px 0 64px; border-bottom: 1px solid #e5e5e5; margin-bottom: 64px; }
  .badge { display: inline-block; font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #888; border: 1px solid #ddd; padding: 4px 12px; border-radius: 20px; margin-bottom: 20px; }
  .cover h1 { font-size: 36px; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 4px; }
  .cover h2 { font-size: 18px; font-weight: 400; color: #666; margin-bottom: 24px; }
  .covermeta { max-width: 540px; margin: 0 auto 16px; color: #555; font-size: 15px; line-height: 1.65; }
  .coverdate { color: #999; font-size: 13px; }

  /* Section headers */
  .sh { font-size: 24px; font-weight: 700; letter-spacing: -0.01em; margin-bottom: 8px; }
  .sp { color: #555; font-size: 15px; margin-bottom: 28px; line-height: 1.65; }
  .ssh { font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: #999; margin: 32px 0 16px; }

  /* Executive Summary */
  .summary-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px; }
  @media (max-width: 640px) { .summary-grid { grid-template-columns: 1fr; } }
  .summary-card { border-radius: 10px; padding: 24px; }
  .summary-card.good { background: #f0fdf4; border: 1px solid #bbf7d0; }
  .summary-card.gap { background: #fef2f2; border: 1px solid #fecaca; }
  .summary-label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px; }
  .summary-card.good .summary-label { color: #16a34a; }
  .summary-card.gap .summary-label { color: #dc2626; }
  .summary-card ul { list-style: none; padding: 0; }
  .summary-card li { font-size: 14px; color: #333; padding: 4px 0; padding-left: 16px; position: relative; line-height: 1.55; }
  .summary-card li::before { content: ''; position: absolute; left: 0; top: 10px; width: 6px; height: 6px; border-radius: 50%; }
  .summary-card.good li::before { background: #22c55e; }
  .summary-card.gap li::before { background: #ef4444; }
  .verdict { background: #f8f8f8; border: 1px solid #e5e5e5; border-radius: 10px; padding: 20px 24px; font-size: 14px; color: #444; line-height: 1.65; }
  .verdict strong { color: #1a1a1a; }

  /* Fund chips */
  .fund-strip { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 32px; }
  .fund-chip { font-size: 12px; font-weight: 500; color: #555; background: #f0f0f0; padding: 5px 12px; border-radius: 20px; }

  /* Pattern rows */
  .pattern-list { display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; }
  .pattern-row { display: flex; gap: 16px; align-items: flex-start; padding: 14px 18px; background: #fff; border: 1px solid #eee; border-radius: 8px; }
  .pattern-count { font-size: 14px; font-weight: 700; color: #1a1a1a; min-width: 36px; font-variant-numeric: tabular-nums; }
  .pattern-name { font-size: 14px; font-weight: 600; color: #1a1a1a; }
  .pattern-note { font-size: 13px; color: #888; margin-top: 2px; }

  /* Insight box */
  .insight-box { background: #f8fafc; border: 1px solid #e2e8f0; border-left: 3px solid #1a1a1a; border-radius: 0 10px 10px 0; padding: 20px 24px; margin: 32px 0; font-size: 14px; color: #444; line-height: 1.65; }
  .insight-box strong { color: #1a1a1a; }
  .insight-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #1a1a1a; margin-bottom: 8px; }

  /* Hero compare */
  .hero-compare { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 24px; }
  @media (max-width: 640px) { .hero-compare { grid-template-columns: 1fr; } }
  .hero-example { background: #fff; border: 1px solid #eee; border-radius: 8px; padding: 16px 20px; }
  .hero-example.current { background: #fef2f2; border-color: #fecaca; }
  .hero-fund { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: #999; margin-bottom: 6px; }
  .hero-example.current .hero-fund { color: #dc2626; }
  .hero-quote { font-size: 16px; font-weight: 500; color: #1a1a1a; font-style: italic; }

  /* Thesis grid */
  .thesis-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  @media (max-width: 640px) { .thesis-grid { grid-template-columns: 1fr; } }
  .thesis-card { background: #fff; border: 1px solid #eee; border-radius: 10px; padding: 24px; }
  .thesis-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 10px; }
  .thesis-title { font-size: 16px; font-weight: 700; }
  .thesis-pct { font-size: 22px; font-weight: 800; font-variant-numeric: tabular-nums; }
  .thesis-desc { font-size: 13px; color: #666; line-height: 1.55; margin-bottom: 12px; }
  .thesis-companies { font-size: 12px; color: #999; font-weight: 500; }

  /* Recommendations */
  .rec { margin-bottom: 32px; border: 1px solid #e5e5e5; border-radius: 12px; overflow: hidden; }
  .rec-head { display: flex; align-items: center; gap: 14px; padding: 16px 24px; background: #fafafa; border-bottom: 1px solid #e5e5e5; }
  .rec-num { font-size: 14px; font-weight: 800; color: #1a1a1a; min-width: 24px; }
  .rec-title { font-size: 16px; font-weight: 700; flex: 1; }
  .rec-effort { font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.04em; }
  .rec-effort.low { background: #dcfce7; color: #16a34a; }
  .rec-effort.med { background: #fef9c3; color: #a16207; }
  .rec-effort.high { background: #fee2e2; color: #dc2626; }
  .rec-body { display: grid; grid-template-columns: 1fr 1fr; }
  @media (max-width: 640px) { .rec-body { grid-template-columns: 1fr; } }
  .rec-col { padding: 24px; }
  .rec-target { background: #f8fafc; border-left: 1px solid #e5e5e5; }
  @media (max-width: 640px) { .rec-target { border-left: none; border-top: 1px solid #e5e5e5; } }
  .rec-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #999; margin-bottom: 8px; }
  .rec-text { font-size: 14px; color: #444; line-height: 1.65; }
  .rec-mock { font-size: 13px; color: #1a1a1a; line-height: 1.7; white-space: pre-wrap; font-family: 'SF Mono', 'Fira Code', monospace; background: #f0f4f8; border-radius: 6px; padding: 16px; }

  /* Flow */
  .flow { border: 1px solid #e5e5e5; border-radius: 12px; overflow: hidden; }
  .flow-row { display: grid; grid-template-columns: 48px 140px 1fr; align-items: center; padding: 14px 20px; border-bottom: 1px solid #eee; }
  .flow-row:last-child { border-bottom: none; }
  .flow-num { font-size: 13px; font-weight: 700; color: #999; font-variant-numeric: tabular-nums; }
  .flow-name { font-size: 14px; font-weight: 700; }
  .flow-desc { font-size: 13px; color: #666; }

  /* Design notes */
  .design-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  @media (max-width: 640px) { .design-grid { grid-template-columns: 1fr; } }
  .design-card { border-radius: 10px; padding: 24px; }
  .design-card.keep { background: #f0fdf4; border: 1px solid #bbf7d0; }
  .design-card.change { background: #fefce8; border: 1px solid #fde68a; }
  .design-label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px; }
  .design-card.keep .design-label { color: #16a34a; }
  .design-card.change .design-label { color: #a16207; }
  .design-card ul { list-style: disc; padding-left: 18px; }
  .design-card li { font-size: 13px; color: #444; padding: 3px 0; line-height: 1.55; }

  /* Portfolio table */
  .port-table { border: 1px solid #e5e5e5; border-radius: 12px; overflow: hidden; }
  .port-header { display: grid; grid-template-columns: 120px 1fr 140px; padding: 10px 20px; background: #fafafa; border-bottom: 1px solid #e5e5e5; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #999; }
  .port-row { display: grid; grid-template-columns: 120px 1fr 140px; padding: 10px 20px; border-bottom: 1px solid #f0f0f0; align-items: center; }
  .port-row:last-child { border-bottom: none; }
  .port-name { font-size: 14px; font-weight: 600; }
  .port-desc { font-size: 13px; color: #555; }
  .port-tag { font-size: 11px; font-weight: 600; color: #888; }

  /* Footer */
  .foot { text-align: center; padding: 40px 0; border-top: 1px solid #e5e5e5; margin-top: 32px; }
  .foot p { font-size: 13px; color: #999; margin-bottom: 8px; }
  .foot a { color: #555; text-decoration: underline; }
  .foot a:hover { color: #1a1a1a; }

  @media (max-width: 640px) {
    .cover h1 { font-size: 28px; }
    .port-header, .port-row { grid-template-columns: 100px 1fr; }
    .port-tag { display: none; }
    .flow-row { grid-template-columns: 36px 1fr; }
    .flow-desc { display: none; }
  }
`;
