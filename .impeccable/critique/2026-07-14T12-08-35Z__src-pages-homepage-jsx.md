---
target: homepage re-run after fixes
total_score: 26
p0_count: 0
p1_count: 3
timestamp: 2026-07-14T12-08-35Z
slug: src-pages-homepage-jsx
---
#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Fake cards/LinkedIn fixed; splash/menu/chat feedback present |
| 2 | Match System / Real World | 3 | Resende/hotelaria/Proof clear; multi-tenant/ticker still leak jargon |
| 3 | User Control and Freedom | 3 | Splash skip; Esc on menu and chat |
| 4 | Consistency and Standards | 3 | DESIGN.md matches live; chatbot rounded vs radius 0 |
| 5 | Error Prevention | 3 | False affordances gone; /catalogo silent redirect |
| 6 | Recognition Rather Than Recall | 3 | Labeled nav; Proof only on scroll |
| 7 | Flexibility and Efficiency | 2 | Skip + contact channels; few accelerators |
| 8 | Aesthetic and Minimalist Design | 2 | Strong tokens; mid-page Process∥Proof + icon grids |
| 9 | Error Recovery | 2 | Chat → WA; no rich form errors |
| 10 | Help and Documentation | 2 | Proof helps; no FAQ |
| **Total** | | **26/40** | **Acceptable (near Good)** |

#### Anti-Patterns Verdict

**LLM assessment**: Partial pass. Prior AI scaffolding (01–08, fake card arrows, fat diffs, 5-col tech grid, DESIGN drift) is fixed. Residual tell: bordered icon cells (Services 8 + Hospitality 8) + duplicate method story (Process 5 + Proof 3) + zero product/place imagery. Reads as a well-edited software-house template, not raw AI.

**Deterministic scan**: detect.mjs on 14 JSX files → `[]`, exit 0. No automated findings.

**Visual overlays**: Unavailable — no browser automation in this environment.

#### Overall Impression

Clear step up from 21/40. Conversion end-state and system honesty improved; the remaining gap is mid-page fatigue and still-no-visual trust.

#### What's Working

1. Token system and brand mark in the hero feel intentional.
2. Proof is an ethical portfolio substitute (NDA + method + Resende).
3. Contact + sticky WhatsApp make the primary task obvious.

#### Priority Issues

**[P1] Process + Proof duplicate the method story**
- Fix: merge or demote one.
- Suggested: `/impeccable distill` · `/impeccable clarify`

**[P1] Trust still typographic (no visual anchor)**
- Fix: one NDA-safe UI crop, place photo, or anonymized local outcome — not a fake portfolio grid.
- Suggested: `/impeccable craft` · `/impeccable bolder`

**[P1] Services + Hospitality still 8+8 icon grids**
- Fix: 4 primary services; Hospitality as 2–3 capability narrative.
- Suggested: `/impeccable layout` · `/impeccable distill`

**[P2] Hero budget + generic ticker**
- Fix: cut ticker or caps; one primary CTA focus.
- Suggested: `/impeccable quieter` · `/impeccable typeset`

**[P3] Chatbot radius vs system; BrandStrip aria-hidden**
- Suggested: `/impeccable polish`

#### Persona Red Flags

**Jordan**: Dual CTAs; Process then Proof feels duplicated; no software visible.
**Casey**: Sticky WA + chat still compete; long 1-col hospitality list.
**Rafael**: Resende named well; hotelaria nav may filter non-hotels; wants local anonymized proof or price framing.

#### Minor Observations

Contact kicker echoes H2; PORTFOLIO data unused; /catalogo → /.

#### Questions to Consider

1. If Process and Proof became one block, what mid-page content still sells?
2. Does a PME need 15 logos — or one running system (even blurred)?
3. Is Hospitality in the nav a specialty beacon or an accidental lead filter?
