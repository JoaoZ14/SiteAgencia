---
name: GMK Software House
description: Software house em Resende, RJ — Minimal Brutal, direta, tipográfica.
colors:
  ink: "#000000"
  bg: "#FFFFFF"
  bg-2: "#F4F4F4"
  surface: "#FAFAFA"
  text: "#0A0A0A"
  text-2: "#4B4B4B"
  text-3: "#8A8A8A"
  graphite: "#1A1A1A"
  line: "#000000"
  line-soft: "#E2E2E2"
  hover: "#EFEFEF"
  accent: "#5B8EF0"
  accent-dark: "#3D6FCC"
typography:
  display:
    fontFamily: "'Archivo', 'Inter', sans-serif"
    fontSize: "clamp(1.6rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  hero:
    fontFamily: "'Archivo', 'Inter', sans-serif"
    fontSize: "clamp(2.75rem, 8vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  body:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  mono:
    fontFamily: "'JetBrains Mono', 'SFMono-Regular', Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.06em"
rounded:
  none: "0px"
spacing:
  section: "clamp(72px, 9vw, 128px)"
  gutter: "clamp(20px, 4vw, 48px)"
  container: "1240px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "#FFFFFF"
    rounded: "{rounded.none}"
    padding: "15px 28px"
  button-primary-hover:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "15px 28px"
---

# Design System: GMK Software House

## Overview

**Creative North Star: "Sinal técnico, entrega humana"**

GMK é uma software house com presença tipográfica forte em fundo claro: monócromo brutal, bordas pretas de 1px, cantos retos e um azul elétrico `#5B8EF0` usado com parcimônia (CTA pontual, ícones ativos, um destaque por viewport). O site vende confiança por clareza e especificidade regional (Resende + remoto), não por decks genéricos de SaaS.

Densidade editorial: seções com respiro, hierarquia Archivo/Inter/JetBrains Mono, motion Framer com ease `cubic-bezier(0.25, 1, 0.5, 1)` e respeito a `prefers-reduced-motion`. Sem cards idênticos em sequência, sem índices `01/02/03` em toda seção (números só onde há sequência real, ex.: Processo), sem portfólio falso.

**Key Characteristics:**
- Tema claro (`#FFFFFF` / `#F4F4F4`), não cream e não dark studio
- Accent azul ≤10% da superfície
- Tipografia: Archivo (display/hero), Inter (corpo), JetBrains Mono (labels)
- `border-radius: 0` — precisão industrial
- CTAs pretos que invertem no hover; Contact full-bleed preto no fim

## Colors

Paleta monócroma com um sinal azul.

### Primary
- **Signal Blue** (`#5B8EF0`): destaque tipográfico, ícones ativos, linha do kicker do hero.
- **Signal Dark** (`#3D6FCC`): hover de links/accent.

### Neutral
- **Ink** (`#000000`): texto forte, bordas, botões primários, seções dark (Contact/Hospitality).
- **BG** (`#FFFFFF`): body.
- **BG-2** (`#F4F4F4`): faixas secundárias, watermark suave.
- **Text-2** (`#4B4B4B`): corpo secundário.
- **Text-3** (`#8A8A8A`): metadata curta (não blocos longos).
- **Line / Line-soft** (`#000` / `#E2E2E2`): grades e divisores.

### Named Rules
**The One Signal Rule.** Azul só em ação ou ênfase — nunca como background de página.

**The Flat Studio Rule.** Profundidade por contraste ink/bg e bordas; sombras raras.

## Typography

**Display / Hero:** Archivo  
**Body:** Inter  
**Mono:** JetBrains Mono

### Hierarchy
- **Hero** (800, clamp até 6rem, tracking ≥ −0.04em)
- **Section title** (700, clamp 1.6–2.25rem)
- **Body** (400, 1rem, max ~65–75ch)
- **Mono label** (0.75rem, tracking largo) — kicker pontual, não em toda seção

### Named Rules
**Letter-Spacing Floor.** Display nunca abaixo de −0.04em.  
**Hero Ceiling.** Clamp max ≤ 6rem.

## Elevation

Flat por padrão. Hover de botão = invert fill. Navbar scrolled = blur leve funcional. Contact e Hospitality usam bloco ink full-bleed como contraste tonal, não shadow.

## Components

### Buttons
- Primary: ink + texto branco; hover invert.
- Ghost: borda ink; hover fill ink.
- Radius 0. Sem gradiente em CTA.

### Section heads
- Título + lead opcional. Sem índice `01 / NOME` scaffolding.
- Processo: números 01–05 só nos steps.

### Navigation
- Fixed; glass ao scroll; mobile overlay full-screen claro com tipografia display e CTA ink.

### Hero
- Coluna única central; marca GMK como sinal hero-level; watermark de apoio; um kicker; um H1; um sub; um grupo CTA.

### Contact
- Full-bleed ink; CTA WhatsApp + e-mail; kicker sem numeração de seção.

## Do's and Don'ts

### Do
- Manter contraste AA em corpo e CTAs.
- Mostrar especificidade (Resende, hotelaria, processo).
- Preferir prova concreta ou honestidade (“cases sob NDA”) a portfólio fictício.
- Respeitar `prefers-reduced-motion`.

### Don't
- Índices numerados em todas as seções.
- Grids idênticos icon+label repetidos como única linguagem visual.
- Cards que parecem clicáveis sem destino.
- Gradiente em botões sticky/CTA.
- Cream/sand body ou purple SaaS default.
- Side-stripe colorida >1px; gradient-text; glass decorativo.
- Documentar um tema dark se o código shippa light (manter DESIGN.md alinhado ao live).
