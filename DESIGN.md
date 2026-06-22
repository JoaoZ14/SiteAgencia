---
name: GMK Digital
description: Agência de marketing digital em Resende, RJ — ousada, direta, confiante.
colors:
  primary: "#5B8EF0"
  primary-dim: "rgba(91, 142, 240, 0.12)"
  bg-deep: "#0A0A0A"
  bg-layer: "#111111"
  ink-primary: "#F0F0F0"
  ink-muted: "#999999"
  ink-dim: "#606060"
  border-subtle: "#1E1E1E"
  border-mid: "#2A2A2A"
typography:
  display:
    fontFamily: "'PP Neue Montreal', 'Inter', sans-serif"
    fontSize: "clamp(2.6rem, 4.5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.04em"
  hero:
    fontFamily: "'Syncopate', 'PP Neue Montreal', sans-serif"
    fontSize: "clamp(2.4rem, 8vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "'Inter', sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.14em"
  manifesto:
    fontFamily: "'Space Grotesk', 'Inter', sans-serif"
    fontSize: "clamp(1.1rem, 2vw, 1.35rem)"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  sm: "3px"
spacing:
  section: "120px"
  container: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "13px 28px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.sm}"
    padding: "13px 28px"
---

# Design System: GMK Digital

## 1. Overview

**Creative North Star: "O Sinal Direto"**

GMK Digital opera em modo noturno de estúdio: fundo profundo, tipografia com presença e um único azul elétrico que guia o olhar para ação. O sistema rejeita o visual genérico de agência — sem cards repetidos, sem hero de métricas, sem gradiente decorativo em todo lugar. Cada superfície deve comunicar craft real e confiança direta, alinhada à personalidade ousada e sem rodeios da marca.

A densidade é editorial, não dashboard: seções amplas com respiro (120px de padding vertical), hierarquia tipográfica forte e CTAs sempre visíveis. Profundidade vem de overlays fotográficos, camadas de fundo (`--bg` / `--bg-2`) e bordas sutis — não de sombras pesadas.

**Key Characteristics:**
- Tema escuro como padrão (fundo `#0A0A0A`, não cream/beige)
- Um accent azul (`#5B8EF0`) com uso estratégico em CTAs, ícones e destaques
- Tipografia multi-role: Syncopate no hero, PP Neue Montreal em títulos, Inter no corpo
- Cantos quase retos (3px) — precisão, não softness genérico
- Motion com Framer Motion: ease `cubic-bezier(0.22, 1, 0.36, 1)`, respeitando `prefers-reduced-motion`
- Foco em conversão: botões primários e WhatsApp sempre acessíveis

## 2. Colors

Paleta escura com um único sinal azul — confiança técnica sem cair no corporativo frio.

### Primary
- **Electric Signal Blue** (`#5B8EF0`): CTAs primários, ícones de seção, eyebrow do hero, links de destaque. Raro o suficiente para marcar ação, frequente o suficiente para guiar.
- **Signal Dim** (`rgba(91, 142, 240, 0.12)`): fundos de destaque suaves, badges, estados hover sutis.

### Neutral
- **Deep Black** (`#0A0A0A`): fundo principal do body e seções.
- **Charcoal Layer** (`#111111`): footer, camadas secundárias.
- **Soft White Ink** (`#F0F0F0`): texto principal, títulos.
- **Muted Gray** (`#999999`): subtítulos, texto secundário, botões ghost.
- **Dim Gray** (`#606060`): labels de seção, metadados, texto terciário.
- **Border Subtle** (`#1E1E1E`): divisores de seção, bordas de navbar scrolled.
- **Border Mid** (`#2A2A2A`): bordas de botões ghost, inputs.

### Named Rules
**The One Signal Rule.** O azul primário aparece em CTAs, ícones ativos e no máximo um destaque tipográfico por seção. Não espalhar accent em fundos inteiros.

**The Dark Studio Rule.** O fundo é preto profundo, não warm-neutral. Calor vem de fotografia e copy, não de cream/sand no body.

## 3. Typography

**Display Font:** PP Neue Montreal (com Inter fallback)
**Hero Font:** Syncopate (com PP Neue Montreal fallback)
**Body Font:** Inter (com system-ui fallback)
**Manifesto Font:** Space Grotesk (com Inter fallback)

**Character:** Contraste de personalidades — Syncopate geométrico e impactante no hero; PP Neue Montreal editorial nos títulos; Inter legível no corpo; Space Grotesk no manifesto da marca.

### Hierarchy
- **Hero** (700, clamp até ~5.5rem, line-height 1.05): headline principal da landing, linhas animadas independentes.
- **Display** (700, clamp 2.6–3.75rem, -0.04em tracking): títulos de seção (Serviços, Sobre, Contato).
- **Title** (700, clamp 1.85–2.9rem): subtítulos de missão e blocos internos.
- **Body** (400, 1rem, line-height 1.6): parágrafos descritivos, máx. ~65–75ch onde aplicável.
- **Label** (600, 0.72rem, 0.14em tracking, uppercase): marcadores de seção com ícone opcional.

### Named Rules
**The Letter-Spacing Floor Rule.** Display headings nunca abaixo de -0.04em — letras não se tocam.

**The Hero Ceiling Rule.** Títulos hero com clamp máximo ≤ 6rem (~96px). Acima disso é gritar, não desenhar.

## 4. Elevation

Sistema predominantemente flat com profundidade por camadas tonais e overlays fotográficos. Sombras são raras; quando aparecem, são sutis (hover em botões: `translateY(-1px)` + opacity).

### Shadow Vocabulary
- **Button lift** (`transform: translateY(-1px)` + `opacity: 0.88`): feedback tátil em hover de `.btn-primary`.
- **Navbar glass** (`backdrop-filter: blur(20px)` + `rgba(10,10,10,0.95)`): apenas na navbar scrolled — uso funcional, não decorativo.

### Named Rules
**The Flat-By-Default Rule.** Superfícies em repouso são planas. Elevação responde a estado (hover, scroll) ou a overlay de imagem no hero.

## 5. Components

### Buttons
- **Shape:** Quase reto (3px radius)
- **Primary:** gradiente azul (`linear-gradient(135deg, #6FA3F7 0%, #2D5FD4 100%)`), texto branco, padding 13px 28px, font-weight 700, letter-spacing 0.04em
- **Hover / Focus:** opacity 0.88, translateY(-1px), transição 0.2s ease
- **Ghost:** transparente, borda `var(--border-mid)`, texto `var(--text-2)`; hover eleva cor da borda e do texto

### Labels / Section markers
- **Style:** uppercase, 0.72rem, tracking 0.14em, cor `var(--text-3)`, ícone inline com opacity 0.55
- **Uso:** um por seção, com ícone React Icons — não repetir eyebrow em todas as seções como scaffolding automático

### Cards / Containers
- **Corner Style:** 3px ou sem radius
- **Background:** `var(--bg)` ou `var(--bg-2)` para footer
- **Border:** `1px solid var(--border)` entre seções
- **Internal Padding:** container 32px (24px tablet, 16px mobile), seções 120px vertical

### Navigation
- **Style:** fixed top, transparente em repouso, glass ao scroll
- **Links:** 0.8rem, weight 500, cor `var(--text-2)`, hover `var(--text)`
- **Mobile:** menu hamburger com overlay full-screen escuro

### Hero
- **Background:** imagem full-bleed com overlay gradiente escuro (esquerda 98% opacidade → direita 65%)
- **Eyebrow:** accent color, uppercase, tracking 0.18em — único kicker da página
- **Tags:** pills com borda `rgba(255,255,255,0.1)`, sem fill

### Contact CTA
- **Style:** botão primário ampliado (16px 32px), ícone WhatsApp inline
- **Título:** display grande com `<em>` em accent — evitar expandir gradient-text para outros elementos

## 6. Do's and Don'ts

### Do:
- **Do** manter contraste WCAG AA: `#F0F0F0` sobre `#0A0A0A` para corpo; revisar `#999999` em textos longos.
- **Do** usar `prefers-reduced-motion` em todas as animações Framer Motion.
- **Do** limitar line-length do corpo a 65–75ch.
- **Do** usar `text-wrap: balance` em h1–h3.
- **Do** manter CTAs de contato visíveis e com caminho claro (WhatsApp, formulário).
- **Do** usar o accent azul com intenção — CTA, ícone ativo, um destaque por seção.

### Don't:
- **Don't** usar templates genéricos de SaaS: cards idênticos, hero com métricas, gradientes decorativos sem função.
- **Don't** criar agência "barulhenta": neon excessivo, animação poluída, visual que grita.
- **Don't** cair no corporativo frio: azul genérico sem personalidade, stock photos sem tratamento, linguagem burocrática.
- **Don't** parecer "site de agência gerado por IA" — evitar eyebrow uppercase em toda seção, grids de cards iguais, números 01/02/03 como scaffolding.
- **Don't** usar `border-left` colorido > 1px em cards ou callouts.
- **Don't** expandir `background-clip: text` com gradiente além do destaque pontual já existente no contato.
- **Don't** usar glassmorphism como padrão — apenas navbar scrolled com propósito funcional.
- **Don't** usar fundo cream/sand/beige — o body é preto profundo.
