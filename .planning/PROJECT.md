# Arena Sunset (Sunset Sand Sports)

## What This Is

Aplicação web desenvolvida em React com Vite para a **Arena Sunset**, um centro esportivo de areia focado em Beach Tennis, Vôlei de Praia e Futevôlei. O projeto é construído de forma incremental para as avaliações da disciplina de Web 2 (IFCE – Campus Tabuleiro do Norte), estruturado com código modular, didático e de fácil compreensão para permitir ao estudante explicar detalhadamente cada conceito durante a defesa perante o professor.

## Core Value

Interface moderna, esportiva e responsiva que atende integralmente aos requisitos do Incremento 01, com código React limpo e autoexplicativo que evidencia com clareza a criação de componentes funcionais, o uso de props desestruturadas, tratamento de eventos e gerenciamento de estado com `useState`.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Inicialização do projeto com Vite + React (JavaScript JSX) e organização limpa de pastas (`src/components`, `src/styles`, `src/assets`)
- [ ] Configuração do sistema de design e variáveis CSS globais baseadas no `sunset_sand_sports.md` (paleta Terracotta/Ocean/Sand, tipografia Plus Jakarta Sans)
- [ ] Componente `Header` com identidade da arena, logo e âncoras de navegação suave
- [ ] Componente `Hero` com apresentação da arena, proposta de valor e botão CTA direto para cadastro
- [ ] Componente `Modalidades` exibindo cards dos esportes (Beach Tennis, Futevôlei e Vôlei de Praia) com detalhes e ícones
- [ ] Componente `Diferenciais` destacando as vantagens da arena (quadras cobertas, areia tratada, vestiários e iluminação noturna)
- [ ] Componente `FormularioCadastro` com inputs controlados para Nome Completo, E-mail, Telefone e seleção de Modalidade
- [ ] Validação visual amigável dos campos obrigatórios e prevenção do recarregamento de página (`e.preventDefault()`)
- [ ] Gerenciamento de estado via `useState` para os campos do formulário, mensagens de feedback e lista de clientes em memória
- [ ] Exibição visual de confirmação de cadastro e listagem em tempo real dos clientes cadastrados durante a sessão
- [ ] Mecanismo de limpeza dos campos do formulário após envio bem-sucedido para permitir novos cadastros
- [ ] Componente `Footer` com informações da arena, localização e rodapé institucional
- [ ] Responsividade completa e consistente para visualização em desktops, tablets e dispositivos móveis

### Out of Scope

- Banco de dados permanente ou API/backend externo — [Enunciado especifica que os dados devem permanecer apenas no estado da aplicação com useState no Incremento 01]
- Autenticação e controle de acesso / login — [Não solicitado nesta etapa inicial]
- Sistema complexo de agendamento e pagamento online de quadras — [Explicitamente fora do escopo deste primeiro incremento]
- Bibliotecas externas de componentes ou frameworks CSS (Bootstrap, Tailwind, MUI) — [Requisito do enunciado prioriza CSS puro e domínio dos fundamentos]

## Context

- Projeto acadêmico para o Instituto Federal do Ceará (IFCE) – Campus Tabuleiro do Norte.
- Avaliação N2 (Incremento 01 – Web 2): peso de 30% na implementação técnica e 70% na apresentação oral e explicação conceitual do código.
- Identidade visual previamente prototipada em `sunset_sand_sports.md` e mockups em `inspiration/` (`p_gina_inicial_arena_sunset.html` e `cadastro_de_clientes_arena_sunset.html`).

## Constraints

- **Tech Stack**: React 18+ com Vite (JavaScript / JSX).
- **Estilização**: CSS puro estruturado com variáveis CSS (custom properties) para cores, fontes e espaçamentos.
- **Arquitetura**: Divisão da interface em componentes funcionais reutilizáveis, com passagem de propriedades via props desestruturadas.
- **Gerenciamento de Estado**: Exclusivamente React Hooks nativos (`useState`).
- **Didática do Código**: Nomenclatura clara em português para componentes, variáveis e funções, permitindo explicação fluida na apresentação.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| JavaScript (JSX) em vez de TypeScript | Prioriza o entendimento direto dos conceitos fundamentais de React sem barreiras de tipagem estática durante a arguição oral | — Pending |
| CSS puro modular com tokens de design | Atende à exigência do professor de não utilizar bibliotecas externas de estilo e aproveita o guia visual Sunset Sand Sports | — Pending |
| Página única (Landing Page) com âncoras | Apresenta a arena e a área de cadastro de forma coesa sem necessidade de roteador complexo | — Pending |
| Exibição dos cadastros da sessão em memória | Prova visualmente a reatividade do `useState` e a renderização dinâmica de listas no React | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-11-04 after initialization*
