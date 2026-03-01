# Davis Enterprises Holdings - Website Redesign Project

A comprehensive analysis and redesign brief for [davisenterprises.com.au](https://davisenterprises.com.au/), informed by competitive research across 9 comparable early-stage and deep tech venture funds.

## Live Brief

**View the interactive brief:** [davis-brief.vercel.app](https://davis-brief.vercel.app)
**Password:** `keira26`

The brief includes side-by-side comparisons to best-in-class fund websites, clickable links to all 9 analyzed sites, and links to all 16 portfolio company websites.

## What's In This Repo

### 1. [REDESIGN_BRIEF.md](./REDESIGN_BRIEF.md)
The main deliverable. A two-column redesign proposal where:
- **Left column:** What was changed and why (with evidence from competitive analysis)
- **Right column:** Proposed structure, copy direction, and layout for each section

Includes a full page wireframe, design recommendations, and priority-ranked action items.

### 2. [COMPETITIVE_ANALYSIS.md](./COMPETITIVE_ANALYSIS.md)
Deep analysis of 9 fund websites that compete for the same type of deal flow:

| Fund | URL | Standout strength |
|------|-----|-------------------|
| Main Sequence | [mseq.vc](https://mseq.vc) | Thesis framed as 6 global "Challenges" |
| Blackbird Ventures | [blackbird.vc](https://blackbird.vc) | Filterable portfolio grid (130+ companies) |
| AirTree Ventures | [airtree.vc](https://airtree.vc) | Open Source VC founder toolkit |
| Square Peg Capital | [squarepeg.vc](https://squarepeg.vc) | Founder testimonial carousel |
| Tenacious Ventures | [tenacious.ventures](https://tenacious.ventures) | Deep agri-food thought leadership |
| Skip Capital | [skipcapital.com](https://skipcapital.com) | Personal team bios with personality |
| Lux Capital | [luxcapital.com](https://luxcapital.com) | Riskgaming platform + podcast + newsletter |
| In-Q-Tel (IQT) | [iqt.org](https://iqt.org) | 800+ company portfolio with sector filtering |
| Breakthrough Victoria | [breakthroughvictoria.com](https://breakthroughvictoria.com) | Full investment lifecycle (uni to growth) |

Covers: hero messaging patterns, language/tone analysis, positioning angles, target audience breakdown, homepage structure patterns, trust signals, and social proof tactics.

### 3. [PORTFOLIO_ANALYSIS.md](./PORTFOLIO_ANALYSIS.md)
Analysis of all 16 Davis Enterprises portfolio companies, organized by theme:
- AI-Native Vertical Software (10/16 companies)
- Space & Defense (3/16)
- Robotics & Deep Tech (4/16)
- Consumer / Health / Lifestyle
- Ecosystem plays

### 4. `site/` - Interactive Brief
The password-protected Next.js app deployed at [davis-brief.vercel.app](https://davis-brief.vercel.app). NYT-style editorial design with all analysis, comparisons, and recommendations in a single-scroll format.

## Top 10 Recommendations

Each recommendation in the brief includes a direct comparison to the best-in-class fund for that area.

1. **Rewrite the hero as a belief statement** (vs. Main Sequence)
2. **Add one-line descriptors to portfolio companies** (vs. Skip Capital)
3. **Add a "Pitch Us" CTA to the navigation** (vs. Blackbird)
4. **Name the thesis pillars instead of "sector agnostic"** (vs. Main Sequence)
5. **Put Peter's bio on the homepage** (vs. Skip Capital)
6. **Source 3 testimonials from portfolio founders** (vs. Square Peg)
7. **Add direct email alongside LinkedIn** (vs. AirTree)
8. **Reduce visual effects and animation** (vs. Lux Capital)
9. **Start a lightweight journal or blog** (vs. Tenacious Ventures)
10. **Add newsletter signup** (vs. Lux Capital)

## How to Use This

### For Peter (reviewing the brief)
- Visit [davis-brief.vercel.app](https://davis-brief.vercel.app) and enter password `keira26`
- Click through to any of the 9 fund websites to see the best-in-class examples yourself
- The markdown files in this repo contain the same content in a format you can share with a designer or developer

### For a designer or developer (implementing the redesign)
- Fork this repo or clone it: `git clone https://github.com/jgdeutsch/davis-enterprises-redesign.git`
- The `REDESIGN_BRIEF.md` is the spec - it contains everything needed to understand what to build and why
- The `COMPETITIVE_ANALYSIS.md` provides the supporting evidence and reference sites
- The `PORTFOLIO_ANALYSIS.md` has the one-line descriptors for all 16 companies

### To run the brief site locally
```bash
cd site
npm install
npm run dev
# Opens at localhost:3000, password: keira26
```

---

*Prepared February 2026*
