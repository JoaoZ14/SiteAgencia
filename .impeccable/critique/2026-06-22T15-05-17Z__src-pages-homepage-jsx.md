---
target: landing HomePage
total_score: 25
p0_count: 0
p1_count: 3
timestamp: 2026-06-22T15-05-17Z
slug: src-pages-homepage-jsx
---
# Critique: Landing GMK Digital (`src/pages/HomePage.jsx`)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Splash de ~3,4s sem opção de pular; animações sem feedback de `prefers-reduced-motion` |
| 2 | Match System / Real World | 3 | Linguagem em PT-BR, WhatsApp e canais familiares; contexto regional claro |
| 3 | User Control and Freedom | 1 | Splash bloqueia scroll e interação; usuário preso até o timer acabar |
| 4 | Consistency and Standards | 2 | Chatbot com paleta verde/arredondada diverge do sistema escuro GMK |
| 5 | Error Prevention | 4 | Fluxo baseado em links; pouca superfície de erro |
| 6 | Recognition Rather Than Recall | 3 | Nav fixa, CTAs rotulados, canais de contato explícitos |
| 7 | Flexibility and Efficiency | 2 | Sem atalho para pular splash; visitante impaciente perde tempo |
| 8 | Aesthetic and Minimalist Design | 2 | Grid de 9 serviços com padrão icon+título+texto repetido; labels uppercase em cada seção |
| 9 | Error Recovery | 3 | n/a — site institucional sem formulários complexos |
| 10 | Help and Documentation | 3 | Chatbot como suporte; FAQ em JSON-LD para SEO |
| **Total** | | **25/40** | **Acceptable — melhorias significativas antes de escalar tráfego** |

## Anti-Patterns Verdict

**LLM assessment:** Parcialmente AI-adjacent. O tema escuro e a tipografia Syncopate dão personalidade, mas vários tells aparecem juntos: eyebrow uppercase em múltiplas seções, gradient-text no hero e contato, grid homogêneo de 9 serviços, foto stock genérica de reunião corporativa, e chatbot estilo "widget verde padrão". Um visitante experiente pode suspeitar de template refinado, não de craft proprietário.

**Deterministic scan:** 35 achados em `src/components` — 2× `gradient-text` (Hero.css:109, Contact.css:29), 2× `bounce-easing` (Hero.css:167, Chatbot.css:240), 1× `layout-transition` (Navbar.css:8), restante drift de design system no Chatbot (cores `#22c55e`, raios 16–100px).

**Visual overlays:** Não disponíveis nesta sessão — injeção no browser não foi executada (sem automação de browser). Evidência baseada em scan CLI + revisão de código-fonte.

## Overall Impression

A landing comunica credibilidade e tem hierarquia clara no hero com CTAs bem posicionados. O maior gap entre intenção (leads, ousadia, anti-clichê) e execução está no caminho até o contato: splash obrigatório atrasa conversão, o chatbot parece outro produto, e os padrões visuais que o próprio DESIGN.md proíbe ainda estão no código.

## What's Working

1. **Hero com CTA duplo claro** — "Falar com a equipe" (primário) + "Ver serviços" (ghost) logo abaixo do headline; caminho de conversão óbvio.
2. **Seção de contato focada em ação** — WhatsApp em destaque com link pré-preenchido; três canais com label + valor legível.
3. **SEO e acessibilidade parcial bem pensados** — `sr-only` no h1, `aria-labelledby` em serviços, landmarks semânticos, meta/JSON-LD completos.

## Priority Issues

### [P1] Splash screen bloqueia conversão por ~3,4s
- **Why:** Objetivo do site é gerar leads; cada segundo antes do CTA reduz conversão, especialmente em mobile e tráfego pago.
- **Fix:** Remover splash, reduzir para <1s, ou adicionar "Pular" + respeitar `prefers-reduced-motion` / `sessionStorage` para não repetir.
- **Suggested command:** `/impeccable polish` (hero/splash flow)

### [P1] Animações sem suporte a `prefers-reduced-motion`
- **Why:** PRODUCT.md exige WCAG AA + reduced motion; Framer Motion em Hero, Services, Contact, Navbar ignora a preferência do sistema.
- **Fix:** Wrapper `useReducedMotion()` ou CSS `@media (prefers-reduced-motion: reduce)` desabilitando `y` offsets e delays.
- **Suggested command:** `/impeccable audit` (a11y/motion)

### [P1] Gradient-text em hero e contato
- **Why:** Anti-pattern explícito do Impeccable e do DESIGN.md; leitura pior em alguns browsers e tell de "AI design".
- **Fix:** Substituir por `color: var(--accent)` sólido ou peso/tamanho para ênfase.
- **Suggested command:** `/impeccable quieter` (hero + contact)

### [P2] Chatbot visualmente desconectado da marca
- **Why:** Verde WhatsApp (`#22c55e`), pills arredondadas e bounce quebram "O Sinal Direto" escuro/azul.
- **Fix:** Re-skin com tokens GMK (`--accent`, `--bg`, radius 3px) ou integrar como extensão do CTA WhatsApp.
- **Suggested command:** `/impeccable colorize` (chatbot)

### [P2] Grid de 9 serviços com padrão repetitivo
- **Why:** Icon + título + parágrafo × 9 ativa o tell de "card grid idêntico"; carga cognitiva alta (9 opções sem hierarquia).
- **Fix:** Agrupar em 3 pilares, destacar 3 serviços principais, linkar resto ao catálogo.
- **Suggested command:** `/impeccable distill` (services section)

## Persona Red Flags

**Jordan (First-Timer):** Splash sem instrução nem botão pular — não sabe se o site carregou ou travou. Nove serviços com descrições longas na mesma dobra geram paralisia; não fica claro qual é o primeiro passo além de "Falar com a equipe".

**Casey (Mobile distraído):** Splash bloqueia scroll com `overflow: hidden` no body por ~3,4s — se for interrompido e voltar, pode perder paciência antes do CTA. Botão WhatsApp no contato está bem, mas o chatbot flutuante compete com o CTA principal na zona inferior.

**Mariana (Gestora regional — persona do projeto):** Foto hero genérica de escritório não mostra craft audiovisual da GMK — contradiz "mostre o trabalho". Labels "O QUE FAZEMOS", "SOBRE A GMK", "CONTATO" em uppercase tracking lembram template de agência, não posicionamento ousado.

## Minor Observations

- `#999999` (`--text-2`) em parágrafos longos pode ficar abaixo de 4.5:1 sobre `#0A0A0A` — validar no audit.
- `hero-bounce` e `cb-bounce` usam easing que o detector marca como dated.
- Navbar anima `padding` no scroll (layout thrash menor, mas evitável).
- Imagem hero é stock Unsplash de reunião — anti-referência "corporativo frio / stock photos".

## Cognitive Load

**4 falhas** no checklist (single focus, chunking, minimal choices, progressive disclosure): carga cognitiva **alta** na seção de serviços.

## Questions to Consider

- O splash agrega marca o suficiente para custar leads?
- E se os 9 serviços virassem 3 pilares com um único CTA cada?
- O que aconteceria se o hero mostrasse frame de vídeo real da GMK em vez de stock?
