---
target: landing HomePage (re-run)
total_score: 31
p0_count: 0
p1_count: 0
timestamp: 2026-06-22T15-23-14Z
slug: src-pages-homepage-jsx
---
# Critique (re-run): Landing GMK Digital (`src/pages/HomePage.jsx`)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Splash pulável + motion seguro; sem estados de carregamento async (aceitável em marketing) |
| 2 | Match System / Real World | 3 | PT-BR, WhatsApp, contexto regional — sólido |
| 3 | User Control and Freedom | 3 | Botão "Pular", `sessionStorage`, reduced-motion instantâneo |
| 4 | Consistency and Standards | 3 | Chatbot, splash e seções usam tokens GMK |
| 5 | Error Prevention | 4 | Fluxo por links; baixa superfície de erro |
| 6 | Recognition Rather Than Recall | 3 | Nav, 3 pilares, CTAs claros |
| 7 | Flexibility and Efficiency | 3 | Splash não repete na sessão; atalho de pular |
| 8 | Aesthetic and Minimalist Design | 3 | 3 pilares vs 9 cards; menos ruído visual |
| 9 | Error Recovery | 3 | n/a — site institucional |
| 10 | Help and Documentation | 3 | Chatbot + FAQ JSON-LD |
| **Total** | | **31/40** | **Good — base sólida; polish fino restante** |

**Delta vs. run anterior:** 25 → **31** (+6 pontos)

## Anti-Patterns Verdict

**LLM assessment:** Melhoria clara. O tell de "template de agência IA" recuou: sem gradient-text, sem bounce, chatbot integrado, serviços destilados. Ainda restam eyebrows uppercase em Missão/Sobre/Contato e fotos stock (agora temáticas audiovisual, mas não portfolio GMK). Um visitante exigente ainda notaria stock + labels repetidos, mas não diria "100% gerado por IA".

**Deterministic scan:** **1 achado** (antes: 35 na árvore de componentes)
- `Hero.css:84` — `border-radius: 100px` no `.hero-tag` (advisory, fora do scale 3px)

**Visual overlays:** não disponíveis nesta sessão.

## Overall Impression

A landing evoluiu de "acceptable com fricção" para "good com identidade coerente". O caminho até o contato está mais rápido, o sistema visual fala a mesma língua, e a seção de serviços respira. O próximo salto é conteúdo real (fotos/vídeo da GMK) e reduzir os últimos tells tipográficos.

## What's Working

1. **Fluxo de conversão** — splash curto/pulável, hero com CTA duplo, contato com WhatsApp em destaque, catálogo como escape para detalhe.
2. **Coerência de marca** — dark studio + accent azul de ponta a ponta, inclusive no chatbot.
3. **Acessibilidade em progresso** — `useMotionSafe` na landing, contraste `--text-2` melhorado, splash com dialog label e skip.

## Priority Issues

### [P2] Fotos hero ainda são stock Unsplash
- **Why:** PRODUCT.md pede "mostre o trabalho"; stock audiovisual genérico é melhor que reunião corporativa, mas não prova craft da GMK.
- **Fix:** Substituir por frames de produção real, reel em loop, ou still de case cliente.
- **Suggested command:** `/impeccable polish` (hero media)

### [P2] Eyebrows uppercase em Missão, Sobre e Contato
- **Why:** Padrão de scaffolding que o DESIGN.md marca como tell; serviços já removeu o label.
- **Fix:** Remover labels ou substituir por lead sentence integrada ao h2.
- **Suggested command:** `/impeccable typeset` (section headers)

### [P3] `.hero-tag` com radius 100px
- **Why:** Drift do design system (3px everywhere).
- **Fix:** `border-radius: var(--radius)` ou remover tags se redundantes com pilares.
- **Suggested command:** `/impeccable polish` (hero tags)

## Persona Red Flags

**Jordan:** Splash com "Pular" resolve a ansiedade inicial. Três pilares são escaneáveis; catálogo para detalhe funciona.

**Casey:** Retorno na mesma sessão não vê splash de novo. CTA WhatsApp permanece forte no contato e chatbot.

**Mariana:** Imagens ainda não mostram entrega real da GMK — principal gap de credibilidade regional.

## Cognitive Load

**1 falha** (eyebrows repetidos) — carga **baixa/moderada** (antes: alta com 9 serviços).

## Questions to Consider

- Quando tiver 1 vídeo ou 3 fotos de case, o hero vira prova social imediata?
- Missão/Sobre/Contato precisam de label, ou o título basta?
- Vale remover as hero-tags de serviço (redundantes com a seção de pilares)?
