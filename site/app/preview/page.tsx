"use client";
import { useState, useEffect, useRef } from "react";

export default function DavisOptimized() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const scrollTo = (id: string) => {
    sectionsRef.current[id]?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* ── NAV ─────────────────────────────────────── */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-logo" onClick={() => scrollTo("hero")}>
            DAVIS<span className="nav-logo-dot">.</span>
          </div>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a onClick={() => scrollTo("thesis")}>Thesis</a>
            <a onClick={() => scrollTo("portfolio")}>Portfolio</a>
            <a onClick={() => scrollTo("about")}>About</a>
            <a onClick={() => scrollTo("thinking")}>Thinking</a>
            <a className="nav-cta" onClick={() => scrollTo("contact")}>Pitch Us</a>
          </div>
          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────── */}
      <section className="hero" id="hero" ref={el => { sectionsRef.current["hero"] = el; }}>
        <div className="hero-inner">
          <h1 className="hero-headline">We back bold Australian founders building what's next</h1>
          <p className="hero-sub">
            Davis Enterprises backs early-stage Australian companies across AI, space, robotics,
            and deep tech. We provide private capital, strategic support, and the financial expertise
            to help ambitious founders scale.
          </p>
          <div className="hero-ctas">
            <a className="btn-primary" onClick={() => scrollTo("portfolio")}>See Our Portfolio</a>
            <a className="btn-secondary" onClick={() => scrollTo("contact")}>Get in Touch</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num">16</span>
              <span className="hero-stat-label">Portfolio Companies</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">4</span>
              <span className="hero-stat-label">Thesis Pillars</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">Pre-Seed & Seed</span>
              <span className="hero-stat-label">Stage Focus</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── THESIS ──────────────────────────────────── */}
      <section className="section" id="thesis" ref={el => { sectionsRef.current["thesis"] = el; }}>
        <div className="container">
          <div className="section-label">What We Back</div>
          <h2 className="section-title">The site says "sector agnostic" but the portfolio tells a very specific story</h2>
          <div className="thesis-grid">
            {thesisPillars.map(t => (
              <div key={t.title} className="thesis-card" style={{ borderTopColor: t.color }}>
                <div className="thesis-header">
                  <h3 className="thesis-name">{t.title}</h3>
                  <span className="thesis-pct" style={{ color: t.color }}>{t.pct}</span>
                </div>
                <p className="thesis-desc">{t.desc}</p>
                <div className="thesis-companies">
                  {t.companies.map(c => (
                    <span key={c} className="thesis-company-tag">{c}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="thesis-meta">
            <span>Stage: Pre-seed & Seed</span>
            <span className="thesis-meta-sep" />
            <span>Geography: Australia</span>
            <span className="thesis-meta-sep" />
            <span>Approach: Conviction-led</span>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ───────────────────────────────── */}
      <section className="section section-dark" id="portfolio" ref={el => { sectionsRef.current["portfolio"] = el; }}>
        <div className="container">
          <div className="section-label">Our Portfolio</div>
          <h2 className="section-title">16 companies building the future</h2>

          <div className="portfolio-filters">
            {["All", "AI & Automation", "Space & Defense", "Robotics", "Emerging"].map(f => (
              <button
                key={f}
                className={`filter-btn ${activeFilter === f ? "active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {portfolioCompanies
              .filter(p => activeFilter === "All" || p.tag === activeFilter)
              .map(p => (
                <a
                  key={p.name}
                  className="portfolio-card"
                  href={p.url || undefined}
                  target={p.url ? "_blank" : undefined}
                  rel={p.url ? "noopener" : undefined}
                >
                  <div className="portfolio-card-icon">{p.name.charAt(0)}</div>
                  <h3 className="portfolio-card-name">{p.name}</h3>
                  <p className="portfolio-card-desc">{p.desc}</p>
                  <span className="portfolio-card-tag" style={{ color: tagColor(p.tag) }}>{p.tag}</span>
                </a>
              ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────── */}
      <section className="section" id="testimonials" ref={el => { sectionsRef.current["testimonials"] = el; }}>
        <div className="container">
          <div className="section-label">From Our Founders</div>
          <h2 className="section-title">What it's like to have Davis in your corner</h2>
          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-quote">{t.quote}</div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ─────────────────────────────── */}
      <section className="section section-dark" id="how" ref={el => { sectionsRef.current["how"] = el; }}>
        <div className="container">
          <div className="section-label">How We Work</div>
          <h2 className="section-title">Three commitments we make to every founder</h2>
          <div className="principles-grid">
            {principles.map((p, i) => (
              <div key={i} className="principle-card">
                <div className="principle-num">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="principle-title">{p.title}</h3>
                <p className="principle-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / PETER ───────────────────────────── */}
      <section className="section" id="about" ref={el => { sectionsRef.current["about"] = el; }}>
        <div className="container">
          <div className="section-label">Who We Are</div>
          <div className="about-grid">
            <div className="about-photo">
              <div className="about-photo-placeholder">PD</div>
            </div>
            <div className="about-content">
              <h2 className="about-name">Peter Davis</h2>
              <div className="about-title-text">Founder, Davis Enterprises Holdings</div>
              <p className="about-bio">
                Peter has been investing in early-stage Australian companies across deep tech,
                AI, space, and robotics. With a background in financial services and private
                investment, he brings not just capital but deep financial structuring expertise
                to every deal.
              </p>
              <p className="about-bio">
                He backs founders who are building real things that solve real problems - and
                he's not afraid to bet on the unconventional. Based in Melbourne, Peter works
                closely with every portfolio company from first cheque through to growth.
              </p>
              <div className="about-links">
                <a href="https://www.linkedin.com/company/davis-enterprises-holdings" target="_blank" rel="noopener" className="about-link">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
                <a href="https://peterdavisau.com" target="_blank" rel="noopener" className="about-link">
                  Personal Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THINKING / JOURNAL ──────────────────────── */}
      <section className="section section-dark" id="thinking" ref={el => { sectionsRef.current["thinking"] = el; }}>
        <div className="container">
          <div className="section-label">Thinking</div>
          <h2 className="section-title">Notes on investing and the Australian opportunity</h2>
          <div className="journal-grid">
            {articles.map((a, i) => (
              <div key={i} className="journal-card">
                <div className="journal-tag">{a.tag}</div>
                <h3 className="journal-title">{a.title}</h3>
                <p className="journal-excerpt">{a.excerpt}</p>
                <span className="journal-date">{a.date}</span>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="newsletter">
            <div className="newsletter-text">
              <h3 className="newsletter-title">Stay in the loop</h3>
              <p className="newsletter-desc">Occasional notes on deep tech investing, portfolio news, and the Australian startup ecosystem.</p>
            </div>
            <div className="newsletter-form">
              {submitted ? (
                <div className="newsletter-thanks">Thanks! We'll be in touch.</div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); if (email) setSubmitted(true); }}>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="newsletter-input"
                    required
                  />
                  <button type="submit" className="newsletter-btn">Subscribe</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────── */}
      <section className="section section-contact" id="contact" ref={el => { sectionsRef.current["contact"] = el; }}>
        <div className="container contact-inner">
          <div className="section-label">Let's Talk</div>
          <h2 className="contact-headline">Building something bold?<br />We'd love to hear about it.</h2>
          <p className="contact-sub">
            Whether you're raising your first round or looking for a strategic partner,
            we're always open to meeting ambitious Australian founders.
          </p>
          <div className="contact-btns">
            <a href="mailto:peter@davisenterprises.com.au" className="btn-primary">
              Email Us
            </a>
            <a href="https://www.linkedin.com/company/davis-enterprises-holdings" target="_blank" rel="noopener" className="btn-secondary">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────── */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">DAVIS<span className="nav-logo-dot">.</span></div>
            <p className="footer-tagline">Conviction capital for Australia's boldest founders</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <div className="footer-col-title">Navigate</div>
              <a onClick={() => scrollTo("thesis")}>Thesis</a>
              <a onClick={() => scrollTo("portfolio")}>Portfolio</a>
              <a onClick={() => scrollTo("about")}>About</a>
              <a onClick={() => scrollTo("thinking")}>Thinking</a>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Connect</div>
              <a href="mailto:peter@davisenterprises.com.au">peter@davisenterprises.com.au</a>
              <a href="https://www.linkedin.com/company/davis-enterprises-holdings" target="_blank" rel="noopener">LinkedIn</a>
              <span className="footer-location">Melbourne, Australia</span>
            </div>
          </div>
          <div className="footer-bottom">
            <span>&copy; 2026 Davis Enterprises Holdings</span>
          </div>
        </div>
      </footer>
    </>
  );
}

function tagColor(tag: string) {
  switch (tag) {
    case "AI & Automation": return "#2d7fff";
    case "Space & Defense": return "#c850ff";
    case "Robotics": return "#00d4ff";
    case "Emerging": return "#ffb432";
    default: return "#7a8faa";
  }
}

// ─── DATA ─────────────────────────────────────────────────────────────

const thesisPillars = [
  {
    title: "AI & Automation",
    pct: "63%",
    color: "#2d7fff",
    desc: "AI applied to specific verticals - billing, cybersecurity, sales, ecommerce, enterprise ops, creator tools.",
    companies: ["Actuals", "Apollo", "Chirp", "Fluency", "Keeyu", "Shopfront"],
  },
  {
    title: "Space & Defense",
    pct: "19%",
    color: "#c850ff",
    desc: "Australian sovereign capability in orbit and beyond - imaging, power systems, wireless energy.",
    companies: ["HEO", "MP Space", "Aquila"],
  },
  {
    title: "Robotics & Deep Tech",
    pct: "25%",
    color: "#00d4ff",
    desc: "Hardware companies solving physical-world problems in agriculture, infrastructure, and food.",
    companies: ["Flux", "Puralink", "Magic Valley"],
  },
  {
    title: "Emerging & Platform",
    pct: "19%",
    color: "#ffb432",
    desc: "Creator tools, pet health, consumer wellness, and ecosystem infrastructure.",
    companies: ["Kindling", "Elita", "Metahuman Labs", "Aussie Angels"],
  },
];

const portfolioCompanies = [
  { name: "Actuals", desc: "AI billing - converts contracts into code for automated invoicing", tag: "AI & Automation", url: "https://actuals.com" },
  { name: "Apollo", desc: "AI compliance for startups (SOC 2, ISO 27001, vuln scanning)", tag: "AI & Automation", url: "https://www.apollosecurity.com" },
  { name: "Aquila", desc: "Wireless power delivery via high-intensity laser for drones", tag: "Space & Defense", url: "https://www.aquilapower.com.au" },
  { name: "Aussie Angels", desc: "Angel syndicate platform for co-investing in AU startups", tag: "Emerging", url: "https://aussieangels.com.au" },
  { name: "Chirp", desc: "AI sales platform unifying CRM, email, Slack, WhatsApp, LinkedIn", tag: "AI & Automation", url: "https://chirp.com.au" },
  { name: "Elita", desc: "Pet longevity - 100+ biomarkers + stem cell banking for dogs", tag: "Emerging", url: "https://elita.com.au" },
  { name: "Fluency", desc: "OS-level agent mapping how work happens for AI automation", tag: "AI & Automation", url: "https://www.fluency.inc" },
  { name: "Flux", desc: "Autonomous solar-electric agricultural robot for weed management", tag: "Robotics", url: "https://www.fluxrobotics.com" },
  { name: "HEO", desc: "Space domain awareness - high-res imagery of objects in orbit", tag: "Space & Defense", url: "https://www.heo.space" },
  { name: "Keeyu", desc: "AI post-purchase ecommerce ops - proactive fulfillment fixes", tag: "AI & Automation", url: "https://keeyu.com" },
  { name: "Kindling", desc: "AI tools + advertiser marketplace for mid-tier creators", tag: "Emerging", url: "https://kindling.xyz" },
  { name: "Magic Valley", desc: "Cultivated (cell-grown) meat as sustainable alternative", tag: "Robotics", url: "https://www.magicvalley.com.au" },
  { name: "Metahuman Labs", desc: "Pharmaceutical-grade creatine monohydrate supplements", tag: "Emerging", url: "https://metahumanlabs.com" },
  { name: "MP Space", desc: "Next-gen spacecraft power subsystems (battery + solar)", tag: "Space & Defense", url: null },
  { name: "Puralink", desc: "Autonomous pipe inspection robots for infrastructure", tag: "Robotics", url: "https://www.puralink.com" },
  { name: "Shopfront", desc: "Multi-channel listing for secondhand sellers + AI tools", tag: "AI & Automation", url: "https://shopfront.com.au" },
];

const testimonials = [
  {
    quote: "Peter made an investment decision in two weeks when other investors were still scheduling first meetings. That speed meant everything when we were racing to close our round.",
    name: "Portfolio Founder",
    role: "CEO, AI Portfolio Company",
  },
  {
    quote: "What sets Davis apart is the financial structuring expertise. Peter didn't just write a cheque - he helped us think through our cap table, ESOP, and bridge round in ways that saved us months of back-and-forth with lawyers.",
    name: "Portfolio Founder",
    role: "CEO, Space & Defense Company",
  },
  {
    quote: "Most investors disappear after the wire hits. Peter showed up to our board meetings, made introductions to three enterprise customers, and was on the phone within an hour when we hit a critical hiring challenge.",
    name: "Portfolio Founder",
    role: "CEO, Robotics Company",
  },
];

const principles = [
  {
    title: "Fast Decisions, Not Committees",
    desc: "We make investment decisions in weeks, not months. Founders shouldn't have to wait through three partner meetings and an IC vote to know where they stand.",
  },
  {
    title: "Capital + Financial Expertise",
    desc: "We bring deep financial structuring knowledge to every deal - cap tables, bridge rounds, ESOP design. Not just a cheque, but the financial fluency to deploy it well.",
  },
  {
    title: "Founders for the Long Term",
    desc: "We back you at the start and show up at every stage after. Board seats, introductions, hiring support, follow-on rounds. We don't disappear after day one.",
  },
];

const articles = [
  {
    title: "Why We Invested in HEO: The Case for Space Domain Awareness",
    excerpt: "Australia's position in the Five Eyes makes it uniquely valuable for space surveillance. HEO's ability to image objects in orbit from the ground changes the game for defence and commercial operators.",
    tag: "Investment Note",
    date: "Coming soon",
  },
  {
    title: "What I Look for in a Founder",
    excerpt: "After backing 16 companies, the pattern is clear: the founders who build the biggest things share three traits that have nothing to do with their pitch deck.",
    tag: "Framework",
    date: "Coming soon",
  },
  {
    title: "The Australian Deep Tech Opportunity",
    excerpt: "Australia punches above its weight in AI, space, and robotics. The combination of world-class research institutions, sovereign demand, and a founder culture that's increasingly ambitious creates a unique window.",
    tag: "Sector View",
    date: "Coming soon",
  },
];

// ─── STYLES ────────────────────────────────────────────────────────────

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    background: #040810;
    color: #e0e8f5;
    font-family: 'Outfit', -apple-system, sans-serif;
    font-size: 16px;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a { color: inherit; text-decoration: none; cursor: pointer; }
  h1, h2, h3 { font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 500; }

  /* ── NAV ──────────────────────── */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    background: rgba(4, 8, 16, 0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(45, 127, 255, 0.08);
  }
  .nav-inner {
    max-width: 1200px; margin: 0 auto;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 48px; height: 72px;
  }
  .nav-logo {
    font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 20px;
    letter-spacing: 0.06em; color: #e0e8f5; cursor: pointer;
  }
  .nav-logo-dot { color: #2d7fff; }
  .nav-links {
    display: flex; align-items: center; gap: 32px;
  }
  .nav-links a {
    font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 500;
    text-transform: uppercase; letter-spacing: 0.1em; color: #7a8faa;
    transition: color 0.2s;
  }
  .nav-links a:hover { color: #e0e8f5; }
  .nav-cta {
    background: #2d7fff !important; color: #fff !important;
    padding: 10px 24px !important; border-radius: 2px;
    font-weight: 600 !important; letter-spacing: 0.08em !important;
    transition: background 0.2s !important;
  }
  .nav-cta:hover { background: #4da8ff !important; }
  .nav-hamburger {
    display: none; background: none; border: none; cursor: pointer;
    flex-direction: column; gap: 5px; padding: 8px;
  }
  .nav-hamburger span {
    display: block; width: 22px; height: 2px; background: #e0e8f5;
    transition: 0.2s;
  }

  /* ── HERO ─────────────────────── */
  .hero {
    min-height: 100vh; display: flex; align-items: center;
    padding: 120px 48px 80px;
    background: linear-gradient(180deg, #040810 0%, #080e1c 50%, #040810 100%);
    position: relative; overflow: hidden;
  }
  .hero::before {
    content: ''; position: absolute; top: 20%; right: -10%;
    width: 600px; height: 600px; border-radius: 50%;
    background: radial-gradient(circle, rgba(45,127,255,0.06) 0%, transparent 70%);
    pointer-events: none;
  }
  .hero-inner { max-width: 800px; position: relative; z-index: 1; }
  .hero-headline {
    font-size: clamp(40px, 6vw, 72px);
    font-weight: 400; line-height: 1.1; letter-spacing: -0.02em;
    color: #e0e8f5; margin-bottom: 28px;
  }
  .hero-sub {
    font-size: 18px; color: #7a8faa; line-height: 1.8;
    max-width: 600px; margin-bottom: 40px;
  }
  .hero-ctas { display: flex; gap: 16px; margin-bottom: 64px; flex-wrap: wrap; }
  .btn-primary {
    display: inline-flex; align-items: center;
    padding: 14px 32px; background: #2d7fff; color: #fff;
    font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 500;
    text-transform: uppercase; letter-spacing: 0.08em;
    border: none; border-radius: 2px; cursor: pointer;
    transition: background 0.2s;
  }
  .btn-primary:hover { background: #4da8ff; }
  .btn-secondary {
    display: inline-flex; align-items: center;
    padding: 14px 32px;
    background: transparent; color: #e0e8f5;
    font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 500;
    text-transform: uppercase; letter-spacing: 0.08em;
    border: 1px solid rgba(45, 127, 255, 0.3); border-radius: 2px; cursor: pointer;
    transition: border-color 0.2s, color 0.2s;
  }
  .btn-secondary:hover { border-color: #2d7fff; color: #fff; }
  .hero-stats {
    display: flex; gap: 48px; padding-top: 48px;
    border-top: 1px solid rgba(45, 127, 255, 0.1);
  }
  .hero-stat { display: flex; flex-direction: column; }
  .hero-stat-num {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 28px; font-weight: 600; color: #e0e8f5;
  }
  .hero-stat-label {
    font-family: 'JetBrains Mono', monospace; font-size: 11px;
    text-transform: uppercase; letter-spacing: 0.1em; color: #3d506a; margin-top: 4px;
  }

  /* ── SECTIONS ─────────────────── */
  .section { padding: 120px 48px; }
  .section-dark { background: #080e1c; }
  .container { max-width: 1200px; margin: 0 auto; }
  .section-label {
    font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 500;
    text-transform: uppercase; letter-spacing: 0.12em; color: #2d7fff;
    margin-bottom: 16px;
  }
  .section-title {
    font-size: clamp(28px, 4vw, 42px);
    font-weight: 400; color: #e0e8f5; line-height: 1.2;
    margin-bottom: 48px; max-width: 700px;
  }

  /* ── THESIS ───────────────────── */
  .thesis-grid {
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;
    margin-bottom: 48px;
  }
  .thesis-card {
    background: rgba(45, 127, 255, 0.03);
    border: 1px solid rgba(45, 127, 255, 0.08);
    border-top: 3px solid;
    padding: 32px;
    transition: border-color 0.3s, background 0.3s;
  }
  .thesis-card:hover {
    background: rgba(45, 127, 255, 0.06);
    border-color: rgba(45, 127, 255, 0.15);
  }
  .thesis-header {
    display: flex; justify-content: space-between; align-items: baseline;
    margin-bottom: 12px;
  }
  .thesis-name {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 22px; font-weight: 500; color: #e0e8f5;
  }
  .thesis-pct {
    font-family: 'JetBrains Mono', monospace; font-size: 20px; font-weight: 500;
  }
  .thesis-desc { font-size: 15px; color: #7a8faa; line-height: 1.7; margin-bottom: 16px; }
  .thesis-companies { display: flex; flex-wrap: wrap; gap: 8px; }
  .thesis-company-tag {
    font-family: 'JetBrains Mono', monospace; font-size: 11px;
    padding: 4px 10px; background: rgba(45, 127, 255, 0.06);
    border: 1px solid rgba(45, 127, 255, 0.1);
    color: #7a8faa; letter-spacing: 0.02em;
  }
  .thesis-meta {
    display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
    padding: 24px 0; border-top: 1px solid rgba(45, 127, 255, 0.08);
    font-family: 'JetBrains Mono', monospace; font-size: 12px;
    text-transform: uppercase; letter-spacing: 0.08em; color: #3d506a;
  }
  .thesis-meta-sep {
    width: 1px; height: 16px; background: rgba(45, 127, 255, 0.15);
  }

  /* ── PORTFOLIO ────────────────── */
  .portfolio-filters {
    display: flex; gap: 8px; margin-bottom: 32px; flex-wrap: wrap;
  }
  .filter-btn {
    font-family: 'JetBrains Mono', monospace; font-size: 12px;
    padding: 8px 20px; background: transparent;
    border: 1px solid rgba(45, 127, 255, 0.15); color: #7a8faa;
    cursor: pointer; transition: 0.2s; letter-spacing: 0.04em;
    text-transform: uppercase;
  }
  .filter-btn:hover { border-color: #2d7fff; color: #e0e8f5; }
  .filter-btn.active {
    background: #2d7fff; border-color: #2d7fff; color: #fff;
  }
  .portfolio-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px;
    background: rgba(45, 127, 255, 0.06);
    border: 1px solid rgba(45, 127, 255, 0.08);
  }
  .portfolio-card {
    background: #080e1c; padding: 32px;
    transition: background 0.3s;
    display: flex; flex-direction: column;
  }
  .portfolio-card:hover { background: rgba(45, 127, 255, 0.04); }
  .portfolio-card-icon {
    width: 40px; height: 40px; border-radius: 50%;
    background: rgba(45, 127, 255, 0.08);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 18px; font-weight: 600; color: #2d7fff;
    margin-bottom: 16px;
  }
  .portfolio-card-name {
    font-family: 'Outfit', sans-serif; font-size: 16px; font-weight: 600;
    color: #e0e8f5; margin-bottom: 6px;
  }
  .portfolio-card-desc {
    font-size: 14px; color: #7a8faa; line-height: 1.6;
    margin-bottom: 12px; flex: 1;
  }
  .portfolio-card-tag {
    font-family: 'JetBrains Mono', monospace; font-size: 11px;
    text-transform: uppercase; letter-spacing: 0.06em;
  }

  /* ── TESTIMONIALS ─────────────── */
  .testimonial-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px;
  }
  .testimonial-card {
    padding: 32px; border-left: 3px solid #2d7fff;
    background: rgba(45, 127, 255, 0.03);
  }
  .testimonial-quote {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 17px; font-style: italic; line-height: 1.7;
    color: #e0e8f5; margin-bottom: 24px;
  }
  .testimonial-author { display: flex; align-items: center; gap: 12px; }
  .testimonial-avatar {
    width: 36px; height: 36px; border-radius: 50%;
    background: rgba(45, 127, 255, 0.12);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 600; color: #2d7fff;
  }
  .testimonial-name {
    font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 600; color: #e0e8f5;
  }
  .testimonial-role {
    font-size: 12px; color: #3d506a;
    font-family: 'JetBrains Mono', monospace; letter-spacing: 0.02em;
  }

  /* ── PRINCIPLES ───────────────── */
  .principles-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px;
  }
  .principle-card {
    padding: 32px 0;
    border-top: 1px solid rgba(45, 127, 255, 0.15);
  }
  .principle-num {
    font-family: 'JetBrains Mono', monospace; font-size: 12px;
    color: #2d7fff; margin-bottom: 16px; letter-spacing: 0.04em;
  }
  .principle-title {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 24px; font-weight: 500; color: #e0e8f5;
    margin-bottom: 12px; line-height: 1.3;
  }
  .principle-desc { font-size: 15px; color: #7a8faa; line-height: 1.7; }

  /* ── ABOUT ────────────────────── */
  .about-grid {
    display: grid; grid-template-columns: 280px 1fr; gap: 64px;
    align-items: start;
  }
  .about-photo-placeholder {
    width: 280px; height: 340px;
    background: rgba(45, 127, 255, 0.04);
    border: 1px solid rgba(45, 127, 255, 0.1);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 48px; color: #2d7fff; font-weight: 300;
  }
  .about-name {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 36px; font-weight: 500; color: #e0e8f5;
    margin-bottom: 4px;
  }
  .about-title-text {
    font-family: 'JetBrains Mono', monospace; font-size: 13px;
    text-transform: uppercase; letter-spacing: 0.08em; color: #3d506a;
    margin-bottom: 24px;
  }
  .about-bio {
    font-size: 16px; color: #7a8faa; line-height: 1.8; margin-bottom: 16px;
  }
  .about-links { display: flex; gap: 20px; margin-top: 24px; }
  .about-link {
    display: inline-flex; align-items: center; gap: 8px;
    font-family: 'JetBrains Mono', monospace; font-size: 12px;
    text-transform: uppercase; letter-spacing: 0.06em; color: #7a8faa;
    transition: color 0.2s;
  }
  .about-link:hover { color: #2d7fff; }

  /* ── JOURNAL ──────────────────── */
  .journal-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px;
    margin-bottom: 64px;
  }
  .journal-card {
    padding: 32px;
    background: rgba(45, 127, 255, 0.03);
    border: 1px solid rgba(45, 127, 255, 0.08);
    transition: border-color 0.3s;
  }
  .journal-card:hover { border-color: rgba(45, 127, 255, 0.2); }
  .journal-tag {
    font-family: 'JetBrains Mono', monospace; font-size: 11px;
    text-transform: uppercase; letter-spacing: 0.08em;
    color: #2d7fff; margin-bottom: 12px;
  }
  .journal-title {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 22px; font-weight: 500; color: #e0e8f5;
    margin-bottom: 12px; line-height: 1.3;
  }
  .journal-excerpt {
    font-size: 14px; color: #7a8faa; line-height: 1.7;
    margin-bottom: 16px;
  }
  .journal-date {
    font-family: 'JetBrains Mono', monospace; font-size: 11px;
    color: #3d506a; letter-spacing: 0.04em;
  }

  /* ── NEWSLETTER ───────────────── */
  .newsletter {
    display: flex; align-items: center; justify-content: space-between;
    gap: 48px; padding: 40px;
    border: 1px solid rgba(45, 127, 255, 0.1);
    background: rgba(45, 127, 255, 0.02);
  }
  .newsletter-title {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 24px; font-weight: 500; color: #e0e8f5;
    margin-bottom: 4px;
  }
  .newsletter-desc { font-size: 14px; color: #7a8faa; }
  .newsletter-form form { display: flex; gap: 8px; }
  .newsletter-input {
    padding: 12px 16px; width: 280px;
    background: rgba(4, 8, 16, 0.6); border: 1px solid rgba(45, 127, 255, 0.15);
    color: #e0e8f5; font-family: 'Outfit', sans-serif; font-size: 14px;
    outline: none; transition: border-color 0.2s;
  }
  .newsletter-input::placeholder { color: #3d506a; }
  .newsletter-input:focus { border-color: #2d7fff; }
  .newsletter-btn {
    padding: 12px 24px; background: #2d7fff; color: #fff;
    border: none; cursor: pointer;
    font-family: 'JetBrains Mono', monospace; font-size: 12px;
    text-transform: uppercase; letter-spacing: 0.08em; font-weight: 500;
    transition: background 0.2s;
  }
  .newsletter-btn:hover { background: #4da8ff; }
  .newsletter-thanks {
    font-family: 'JetBrains Mono', monospace; font-size: 14px; color: #2d7fff;
  }

  /* ── CONTACT ──────────────────── */
  .section-contact {
    background: linear-gradient(180deg, #080e1c 0%, #0a1228 50%, #080e1c 100%);
    text-align: center;
  }
  .contact-inner { max-width: 700px; }
  .contact-inner .section-label { text-align: center; }
  .contact-headline {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(32px, 5vw, 52px);
    font-weight: 400; color: #e0e8f5; line-height: 1.2;
    margin-bottom: 20px;
  }
  .contact-sub {
    font-size: 17px; color: #7a8faa; line-height: 1.8;
    margin-bottom: 40px;
  }
  .contact-btns {
    display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;
  }

  /* ── FOOTER ───────────────────── */
  .footer {
    background: #040810;
    border-top: 1px solid rgba(45, 127, 255, 0.08);
    padding: 64px 48px;
  }
  .footer-inner {
    display: flex; flex-wrap: wrap; gap: 48px;
    justify-content: space-between;
  }
  .footer-logo {
    font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 18px;
    color: #e0e8f5; margin-bottom: 8px; letter-spacing: 0.06em;
  }
  .footer-tagline {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 15px; font-style: italic; color: #3d506a;
  }
  .footer-links { display: flex; gap: 64px; }
  .footer-col { display: flex; flex-direction: column; gap: 8px; }
  .footer-col-title {
    font-family: 'JetBrains Mono', monospace; font-size: 11px;
    text-transform: uppercase; letter-spacing: 0.1em; color: #3d506a;
    margin-bottom: 8px;
  }
  .footer-col a {
    font-size: 14px; color: #7a8faa; transition: color 0.2s;
  }
  .footer-col a:hover { color: #e0e8f5; }
  .footer-location { font-size: 14px; color: #3d506a; }
  .footer-bottom {
    width: 100%; padding-top: 32px; margin-top: 16px;
    border-top: 1px solid rgba(45, 127, 255, 0.06);
    font-size: 13px; color: #3d506a;
  }

  /* ── RESPONSIVE ───────────────── */
  @media (max-width: 1024px) {
    .thesis-grid { grid-template-columns: 1fr 1fr; }
    .portfolio-grid { grid-template-columns: repeat(2, 1fr); }
    .testimonial-grid { grid-template-columns: 1fr; }
    .principles-grid { grid-template-columns: 1fr; }
    .journal-grid { grid-template-columns: 1fr; }
    .about-grid { grid-template-columns: 1fr; }
    .about-photo-placeholder { width: 200px; height: 240px; }
    .newsletter { flex-direction: column; gap: 24px; }
    .newsletter-input { width: 220px; }
    .footer-links { gap: 32px; }
  }

  @media (max-width: 768px) {
    .nav-inner { padding: 0 24px; }
    .nav-links {
      display: none; position: fixed; top: 72px; left: 0; right: 0;
      background: rgba(4, 8, 16, 0.97); flex-direction: column;
      padding: 32px; gap: 24px;
      border-bottom: 1px solid rgba(45, 127, 255, 0.1);
    }
    .nav-links.open { display: flex; }
    .nav-hamburger { display: flex; }
    .nav-cta { text-align: center; }

    .hero { padding: 100px 24px 60px; }
    .hero-stats { flex-direction: column; gap: 24px; }
    .section { padding: 80px 24px; }

    .thesis-grid { grid-template-columns: 1fr; }
    .portfolio-grid { grid-template-columns: 1fr; }
    .testimonial-grid { grid-template-columns: 1fr; }

    .about-grid { grid-template-columns: 1fr; gap: 32px; }
    .about-photo-placeholder { width: 160px; height: 200px; }

    .contact-btns { flex-direction: column; align-items: center; }

    .newsletter { padding: 24px; }
    .newsletter-form form { flex-direction: column; }
    .newsletter-input { width: 100%; }

    .footer { padding: 48px 24px; }
    .footer-inner { flex-direction: column; gap: 32px; }
    .footer-links { flex-direction: column; gap: 24px; }

    .portfolio-filters { overflow-x: auto; flex-wrap: nowrap; padding-bottom: 8px; }
    .filter-btn { white-space: nowrap; flex-shrink: 0; }
  }
`;
