# Requirements: Arena Sunset (Sunset Sand Sports)

**Defined:** 2026-11-04
**Core Value:** Interface esportiva moderna, funcional e de fácil explicação conceitual, demonstrando com clareza os fundamentos de React (componentes funcionais, props com desestruturação, eventos e controle de estado com useState).

## v1 Requirements (Incremento 01)

### Apresentação e Identidade Visual (HOME)

- [x] **HOME-01**: Usuário visualiza a identificação da Arena Sunset com logotipo, cores da marca e slogan temático de esportes de areia
- [x] **HOME-02**: Usuário visualiza as modalidades esportivas oferecidas (Beach Tennis, Futevôlei e Vôlei de Praia) em cards interativos com detalhes
- [x] **HOME-03**: Usuário visualiza os diferenciais da arena (quadras cobertas, areia tratada padrão torneio, vestiários e iluminação noturna)
- [x] **HOME-04**: Usuário navega de forma suave entre as seções da página por meio dos links de âncora do Header

### Cadastro de Clientes (FORM)

- [ ] **FORM-01**: Usuário visualiza formulário estruturado com campos para Nome Completo, E-mail, Telefone e Seleção de Modalidade
- [ ] **FORM-02**: Usuário seleciona sua modalidade de interesse entre Beach Tennis, Futevôlei e Vôlei de Praia
- [ ] **FORM-03**: Aplicação valida o preenchimento dos campos obrigatórios no envio, impedindo o recarregamento (`e.preventDefault()`) e exibindo erros visuais amigáveis
- [ ] **FORM-04**: Usuário recebe mensagem visual de confirmação na interface quando o cadastro é concluído com sucesso
- [ ] **FORM-05**: Aplicação limpa automaticamente os campos do formulário após envio bem-sucedido para permitir novo cadastro

### Gerenciamento de Estado e Reatividade (STATE)

- [ ] **STATE-01**: Aplicação gerencia os inputs do formulário de forma controlada utilizando o Hook `useState`
- [ ] **STATE-02**: Aplicação armazena em memória durante a execução a lista de clientes cadastrados e renderiza esses cadastros na interface de forma reativa

### Fundamentos Técnicos e Didática (TECH)

- [x] **TECH-01**: Aplicação estruturada com React e Vite (JavaScript JSX), dividida em componentes funcionais reutilizáveis
- [x] **TECH-02**: Comunicação entre componentes realizada via props com desestruturação clara de propriedades
- [x] **TECH-03**: Estilização desenvolvida com CSS puro modular e variáveis CSS customizadas baseadas no design system `sunset_sand_sports.md` (sem bibliotecas externas)
- [ ] **TECH-04**: Layout responsivo adaptado com consistência visual para telas de desktop, tablets e dispositivos móveis

## v2 Requirements (Incrementos Posteriores)

### Persistência e Backend

- **BACK-01**: Armazenamento permanente de clientes em banco de dados ou integração com API REST
- **AUTH-01**: Sistema de autenticação de usuários, login e perfil de atleta
- **BOOK-01**: Sistema de reserva de quadras com visualização de horários disponíveis e confirmação

## Out of Scope

| Feature | Reason |
|---------|--------|
| Banco de dados / API backend | Enunciado do Incremento 01 define que os dados devem permanecer apenas no estado da aplicação durante a execução |
| Autenticação e login de usuários | Fora do escopo avaliativo do primeiro incremento; o foco são fundamentos de componentes, props e useState |
| Sistema completo de reserva e pagamentos | Funcionalidade avançada para incrementos posteriores da disciplina |
| Bibliotecas externas de UI/CSS (Tailwind, Bootstrap, MUI) | O enunciado exige estilização com CSS puro para demonstrar domínio de CSS e semântica web |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| HOME-01 | Phase 2 | Complete |
| HOME-02 | Phase 2 | Complete |
| HOME-03 | Phase 2 | Complete |
| HOME-04 | Phase 2 | Complete |
| FORM-01 | Phase 3 | Pending |
| FORM-02 | Phase 3 | Pending |
| FORM-03 | Phase 3 | Pending |
| FORM-04 | Phase 3 | Pending |
| FORM-05 | Phase 3 | Pending |
| STATE-01 | Phase 3 | Pending |
| STATE-02 | Phase 3 | Pending |
| TECH-01 | Phase 1 | Complete |
| TECH-02 | Phase 1 | Complete |
| TECH-03 | Phase 1 | Complete |
| TECH-04 | Phase 4 | Pending |

**Coverage:**
- v1 requirements: 15 total
- Mapped to phases: 15
- Unmapped: 0 ✓

---
*Requirements defined: 2026-11-04*
*Last updated: 2026-11-04 after initial definition*
