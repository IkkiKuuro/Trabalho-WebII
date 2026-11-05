# Roadmap: Arena Sunset (Sunset Sand Sports)

## Overview

Construção incremental da aplicação web da Arena Sunset com React e Vite, focada na excelência visual e na didática dos fundamentos de React (componentes funcionais, props, manipulação de eventos e estado com `useState`). O projeto é dividido em 4 fases claras para permitir a avaliação contínua do professor e a defesa oral das decisões de desenvolvimento.

## Phases

- [x] **Phase 1: Setup da Base e Design System** - Inicialização do ambiente Vite + React e definição de variáveis CSS a partir do Sunset Sand Sports (completed 2026-11-05)
- [x] **Phase 2: Apresentação da Arena e Landing Page** - Construção dos componentes visuais (Header, Hero, Modalidades e Diferenciais) com props (completed 2026-11-05)
- [x] **Phase 3: Formulário de Cadastro e Controle de Estado** - Implementação do formulário controlado com `useState`, validações, feedbacks e listagem em memória (completed 2026-11-05)
- [ ] **Phase 4: Responsividade, Polimento e Preparação da Apresentação** - Adaptação mobile completa, componente Footer e comentários explicativos no código

## Phase Details

### Phase 1: Setup da Base e Design System
**Goal**: Inicializar o projeto com Vite e React (JavaScript JSX), estruturar a organização de pastas limpa (`src/components`, `src/styles`, `src/assets`) e configurar as variáveis CSS e tokens visuais com base no guia `sunset_sand_sports.md`.
**Mode:** mvp
**Depends on**: Nothing (primeira fase)
**Requirements**: TECH-01, TECH-02, TECH-03
**Success Criteria** (what must be TRUE):
  1. Projeto Vite + React configurado e executando com sucesso no ambiente local via `npm run dev`.
  2. Estrutura de diretórios organizada de forma didática com separação clara de componentes e estilos.
  3. Arquivo de estilos globais contendo a paleta de cores (Terracotta Sunset, Ocean Blue, Solar Sand Gold), tipografia e escalas de espaçamento pronto para consumo.
**Plans**: 1/1 plans complete

Plans:
- [x] 01-01: Setup do ambiente Vite, organização de arquivos e tokens CSS de design

### Phase 2: Apresentação da Arena e Landing Page
**Goal**: Desenvolver os componentes da página inicial que apresentam a Arena Sunset (Header com âncoras de navegação, Hero com chamada para ação, cards de Modalidades e seção de Diferenciais) utilizando componentes funcionais e desestruturação de props.
**Mode:** mvp
**Depends on**: Phase 1
**Requirements**: HOME-01, HOME-02, HOME-03, HOME-04
**Success Criteria** (what must be TRUE):
  1. Componente `Header` exibe o nome/logo da arena e links funcionais de navegação suave por âncoras.
  2. Componente `Hero` exibe apresentação atrativa da arena com slogan e botão CTA direcionando ao cadastro.
  3. Componentes `Modalidades` e `Diferenciais` renderizam cards organizados para Beach Tennis, Futevôlei e Vôlei de Praia, além da infraestrutura esportiva.
**Plans**: 1/1 plans complete

Plans:
- [x] 02-01-PLAN.md — Implementação dos componentes da Landing Page com props funcionais e navegação por âncoras

### Phase 3: Formulário de Cadastro e Controle de Estado
**Goal**: Implementar o formulário de cadastro de clientes com inputs controlados via `useState`, validação de campos obrigatórios, tratamento de eventos (`onSubmit` com prevenção de recarregamento), feedback visual de sucesso/erro, limpeza automática e exibição dos clientes cadastrados em memória na sessão.
**Mode:** mvp
**Depends on**: Phase 2
**Requirements**: FORM-01, FORM-02, FORM-03, FORM-04, FORM-05, STATE-01, STATE-02
**Success Criteria** (what must be TRUE):
  1. Formulário contém campos funcionais para Nome Completo, E-mail, Telefone e Seleção de Modalidade.
  2. Validação visual impede envio de campos vazios ou inválidos, alertando o usuário sem recarregar a página.
  3. Envio bem-sucedido exibe mensagem de confirmação, limpa os campos para novo cadastro e insere o cliente na lista renderizada dinamicamente em memória.
**Plans**: 1/1 plans complete

Plans:
- [x] 03-01-PLAN.md — Construção do formulário de cadastro, manipuladores de evento, controle com useState e lista reativa

### Phase 4: Responsividade, Polimento e Preparação da Apresentação
**Goal**: Garantir a responsividade perfeita em dispositivos móveis e desktops, adicionar o componente Footer com dados institucionais e incluir documentação/comentários didáticos no código para fundamentar a arguição oral com o professor.
**Mode:** mvp
**Depends on**: Phase 3
**Requirements**: TECH-04
**Success Criteria** (what must be TRUE):
  1. Layout visualmente equilibrado e adaptado para resoluções de smartphone, tablet e desktop.
  2. Componente `Footer` com dados de contato e informações complementares da arena.
  3. Código devidamente comentado explicando os conceitos de componentes, props, eventos e useState para a apresentação de 70% da nota.
**Plans**: 1 plan

Plans:
- [ ] 04-01: Ajustes de responsividade mobile, componente Footer e guia de apresentação conceitual

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Setup da Base e Design System | 1/1 | Complete    | 2026-11-05 |
| 2. Apresentação da Arena e Landing Page | 1/1 | Complete    | 2026-11-05 |
| 3. Formulário de Cadastro e Controle de Estado | 1/1 | Complete    | 2026-11-05 |
| 4. Responsividade, Polimento e Preparação | 0/1 | Not started | - |
