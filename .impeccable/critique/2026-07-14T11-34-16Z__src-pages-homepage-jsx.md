---
target: homepage
total_score: 21
p0_count: 1
p1_count: 2
timestamp: 2026-07-14T11-34-16Z
slug: src-pages-homepage-jsx
---
#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Service cards look clickable but go nowhere; LinkedIn href="#" |
| 2 | Match System / Real World | 2 | Stack/microservices jargon vs PME regional; hospitality helps |
| 3 | User Control and Freedom | 3 | Menu Esc works; chat lacks Esc; splash has no skip |
| 4 | Consistency and Standards | 2 | DESIGN.md dark ≠ live light Minimal Brutal; section index 06→08 |
| 5 | Error Prevention | 2 | False affordance on service cards; dead LinkedIn |
| 6 | Recognition Rather Than Recall | 3 | Labeled nav and anchors |
| 7 | Flexibility and Efficiency | 1 | Rigid path; mandatory splash |
| 8 | Aesthetic and Minimalist Design | 2 | Clean tokens, but identical section scaffolding is noise |
| 9 | Error Recovery | 2 | Chat recovers via WhatsApp; no form states |
| 10 | Help and Documentation | 2 | Chatbot helps if API works; no cases/FAQ |
| **Total** | | **21/40** | **Acceptable** |

#### Anti-Patterns Verdict

**LLM assessment**: Fails the AI slop test. Archivo + brutal borders show craft, but the page rhythm is saturated landing grammar: section indices 01–08, identical icon+title grids (Services/Hospitality/Diffs/Tech), mono uppercase kickers, no real product imagery. Second-order reflex: "anti-SaaS-cream → minimal brutal tech mono".

**Deterministic scan**: `detect.mjs --json` on 12 homepage JSX files → `[]`, exit 0. Zero automated findings. Detector did not catch the scaffolding/slop patterns that live mostly in CSS conventions and content structure.

**Visual overlays**: No reliable user-visible overlay. Browser visualization skipped — no browser automation available (Vite was reachable on :5173).

#### Overall Impression

The live site is a coherent light Minimal Brutal software-house surface, but PRODUCT/DESIGN.md still describe a dark marketing-agency studio. The biggest conversion hole: no proof of work on the home (Work intentionally removed, yet Contact still jumps 06→08). Without cases, the end CTA asks for trust Rafael never earned.

#### What's Working

1. Token system is committed: Archivo display, JetBrains Mono labels, 0-radius borders, invert hovers — not cream/purple AI default.
2. Conversion path at the end is clear: dark Contact + mobile sticky WhatsApp + chatbot elevation when sticky shows.
3. Hospitality is the only section with commercial POV/specificity.

#### Priority Issues

**[P0] Sem prova de trabalho na home**
- What: Work/portfolio not mounted; claims without cases, screens, or local proof.
- Why: PRODUCT principle 1 is "show the work"; PMEs comparing agencies leave without evidence.
- Fix: Even without a full portfolio, ship 1–2 real proof blocks (screenshot, named outcome, face/place) between Technologies and Contact — or openly own "em construção" with a different trust signal (process video, team, clientes stub).
- Suggested command: `/impeccable craft` prova na home · `/impeccable layout`

**[P1] Scaffolding AI: índices + grids idênticos**
- What: `.section-index` across sections; clone grids in Services, Hospitality, Differentiators, Technologies.
- Why: Fails brand slop test; dilutes bold personality.
- Fix: Keep numbers only on Process; vary 2–3 mid sections; cut Diffs to 3 evidenced claims.
- Suggested command: `/impeccable distill` · `/impeccable layout`

**[P1] Hero fraco em marca + sem imagery**
- What: Watermark nearly invisible; generic H1; no product/place image; tracking -0.05em below floor.
- Why: Brand test fails if nav is removed.
- Fix: Hero-level brand signal; one real visual; tracking ≥ -0.04em.
- Suggested command: `/impeccable bolder` Hero · `/impeccable typeset`

**[P2] Affordance falsa + dead ends**
- What: service-card hover/arrow without link; Footer LinkedIn `#`; `/catalogo` → `/`.
- Why: Breaks trust and status heuristics.
- Fix: Link or demote cards; real LinkedIn or remove; clarify catalog expectation.
- Suggested command: `/impeccable harden` · `/impeccable clarify`

**[P2] Document system drift**
- What: DESIGN.md dark GMK Digital ≠ live light GMK Software.
- Why: Next passes will "fix" the wrong system.
- Fix: `/impeccable document` from live code, or explicit decision to restyle to dark.
- Suggested command: `/impeccable document`

#### Persona Red Flags

**Jordan (First-Timer)**: Splash without skip; jargon (multi-tenant, stack); dual equal-weight hero CTAs; unclickable service cards.

**Casey (Mobile)**: Sticky CTA is good; chatbot + sticky still compete; long 8-cell grids = scroll fatigue in Process→Tech valley.

**Rafael (PME Sul Fluminense)**: No local cases, names, timelines, or pricing framing; hospitality nav may alienate non-hotels; 15 tech logos impress engineers, not "serve pro meu negócio em Resende?".

#### Minor Observations

- Contact index 08 without 07 smells like removed Work.
- Chatbot pills/circle send clash with radius 0.
- Chat placeholder contrast likely weak (`--text-3`).
- BrandStrip aria-hidden hides "Go Make Known" from SR.
- PRODUCT still mentions catalog as success path; `/catalogo` redirects home.

#### Questions to Consider

1. If hospitality and blue accent vanished, is this still GMK — or any Behance Minimal Brutal software house?
2. Why ask for a quote before showing one running system?
3. Do the 01–08 indices orient the user, or just make the page look "complete"?
4. DESIGN.md dark or live light — which truth owns the next sprint?
