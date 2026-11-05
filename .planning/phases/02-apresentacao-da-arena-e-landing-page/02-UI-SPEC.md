---
phase: "02"
slug: "apresentacao-da-arena-e-landing-page"
status: approved
shadcn_initialized: false
preset: none
created: "2026-11-05"
---

# Phase 02 — UI Design Contract

> Contrato de design e interação visual para a Fase 02: Apresentação da Arena e Landing Page da Arena Sunset (Sunset Sand Sports).

---

## Design System

| Property | Value |
|----------|-------|
| Tool | none (CSS Puro com Custom Properties nativas) |
| Preset | not applicable |
| Component library | none (Componentes funcionais puros React JSX) |
| Icon library | SVG nativo inline / emojis desportivos padronizados |
| Font | Plus Jakarta Sans (400, 500, 600, 700, 800 via Google Fonts) |

---

## Component Inventory

> Componentes funcionais React modulares desenvolvidos para a apresentação da Arena Sunset.

| Component | Import path | Notes |
|-----------|-------------|-------|
| Header | `src/components/Header.jsx` | Barra de navegação fixa com logo da arena e links de âncora suaves (`#hero`, `#modalidades`, `#diferenciais`, `#cadastro`) |
| Hero | `src/components/Hero.jsx` | Seção de boas-vindas com slogan esportivo, badges temáticas e botão CTA com scroll suave |
| Modalidades | `src/components/Modalidades.jsx` | Seção em grid contendo os cards das 3 modalidades esportivas de areia |
| CardModalidade | `src/components/CardModalidade.jsx` | Componente reutilizável de card de esporte recebendo props desestruturadas (`{ titulo, descricao, icone, detalhes, tipo }`) |
| Diferenciais | `src/components/Diferenciais.jsx` | Seção destacando os 4 diferenciais da arena em cards leves com ícones e estatísticas |
| CardDiferencial | `src/components/CardDiferencial.jsx` | Componente reutilizável de diferencial (`{ titulo, descricao, destaque, icone }`) |
| BadgeExemplo | `src/components/BadgeExemplo.jsx` | Badge reutilizável do design system para status e tipos esportivos (`{ texto, tipo }`) |

---

## Spacing Scale

Declared values (múltiplos de 4 baseados no sistema modular de `variables.css`):

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Gaps de ícones e espaçamentos internos mínimos |
| sm | 8px | Espaçamento entre badges e títulos secundários |
| md | 16px | Padding interno de cards e gaps padrão |
| lg | 24px | Gaps do grid e padding de cards elevados |
| xl | 40px | Padding vertical de seções e separação de blocos |
| 2xl | 64px | Respiro vertical principal entre seções da landing page |

Exceptions: none

---

## Typography

| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Body | 16px (`--font-size-md`) | 400 Regular | 1.65 (`--line-height-relaxed`) |
| Label | 12px / 14px (`--font-size-xs` / `--font-size-sm`) | 600 Semibold / 700 Bold | 1.2 (`--line-height-tight`) |
| Heading (H2/H3) | 24px / 32px (`--font-size-2xl` / `--font-size-3xl`) | 700 Bold | 1.25 |
| Display (Hero H1) | 48px (`--font-size-5xl`) [32px em mobile] | 800 ExtraBold | 1.15 (-0.03em tracking) |

---

## Color

| Role | Value | Usage |
|------|-------|-------|
| Dominant (60%) | `#FDFBF7` (`--color-bg`) | Fundo geral da página (areia de duna clara) e superfícies neutras |
| Secondary (30%) | `#FFFFFF` (`--color-surface`) / `#F5EFEB` (`--color-surface-sand`) | Fundo de cards, cabeçalho e contêineres de destaque |
| Accent (10%) | `#F97316` (`--color-primary`) / `#0284C7` (`--color-secondary`) | Botão CTA principal, bordas ativas, badges de modalidade e links em foco |
| Destructive | `#DC2626` (`--color-error`) | Ações de cancelamento ou alertas |

Accent reserved for: Botões de Ação Principal (CTA), badges de destaque "HORÁRIO NOBRE" / "TORNEIOS", estados hover com anel de foco.

---

## Copywriting Contract

| Element | Copy |
|---------|------|
| Brand Header | **Arena Sunset** — Sunset Sand Sports |
| Nav Links | Início (`#hero`), Modalidades (`#modalidades`), Diferenciais (`#diferenciais`), Cadastro (`#cadastro`) |
| Hero Slogan | "Onde o esporte na areia encontra a energia do pôr do sol" |
| Hero Headline | "Viva a Experiência dos Esportes de Areia na Arena Sunset" |
| Hero Subtitle | "Quadras profissionais de Beach Tennis, Futevôlei e Vôlei de Praia em um complexo esportivo completo com iluminação noturna e areia de padrão oficial." |
| Hero Primary CTA | "Garantir Meu Cadastro" (com âncora suave para `#cadastro`) |
| Hero Secondary CTA | "Conhecer as Modalidades" (âncora suave para `#modalidades`) |
| Modalidades Title | "Modalidades Esportivas" |
| Modalidades Subtitle | "Estrutura preparada para todos os níveis, do iniciante ao avançado" |
| Diferenciais Title | "Por que escolher a Arena Sunset?" |
| Diferenciais Subtitle | "Infraestrutura de ponta projetada para seu conforto e performance esportiva" |

---

## UI Considerations

| Category | Element(s) | Status | Resolution / Reason |
|----------|------------|--------|---------------------|
| Navegação Suave | Header links âncora | ✅ covered | Implementação com CSS `scroll-behavior: smooth` e `id` explícito nas seções correspondentes |
| Modality Cards | Grid de modalidades | ✅ covered | Cards com hover lift (`translateY(-4px)`), sombra suave e borda destacada em Terracotta |
| Responsividade | Header, Hero, Grid de Cards | ✅ covered | Flexbox responsivo e CSS Grid auto-fit (`minmax(280px, 1fr)`) adaptável a telas menores |
| Acessibilidade | Botões e links âncoras | ✅ covered | Contraste adequado entre textos e fundos conforme diretrizes do guia sunset_sand_sports.md |

---

## Registry Safety

| Registry | Blocks Used | Safety Gate |
|----------|-------------|-------------|
| shadcn official | none | not required |
| third-party | none | not required (CSS nativo) |

---

## Checker Sign-Off

- [x] Dimension 1 Copywriting: PASS
- [x] Dimension 2 Visuals: PASS
- [x] Dimension 3 Color: PASS
- [x] Dimension 4 Typography: PASS
- [x] Dimension 5 Spacing: PASS
- [x] Dimension 6 Registry Safety: PASS
- [x] Dimension 7 Inventory Provenance: PASS

**Approval:** approved 2026-11-05
