# Organizador de Tarefas Acadêmicas · Estilo Bauhaus

Aplicação React desenvolvida para a disciplina **Web II (2026.2)** com foco em **estilização com CSS**, estruturação de componentes, responsividade e aplicação da identidade visual inspirada na **Escola Bauhaus**.

---

## 🎨 Identidade Visual & Conceito: Bauhaus

A identidade visual foi desenvolvida com base nos pilares da **Escola Bauhaus** (Weimar/Dessau), unindo arte, arquitetura e funcionalidade:
- **"Forma Segue a Função" (*Form folgt Funktion*)**: A disposição dos elementos prioriza clareza visual, facilidade de leitura e fluxo de trabalho direto.
- **Paleta de Cores Primárias**:
  - 🔴 **Vermelho Bauhaus** (`#D82424`): Utilizado para métrica Total, ações de exclusão e formas geométricas de destaque.
  - 🔵 **Azul Cobalto Bauhaus** (`#184CA1`): Utilizado para tarefas e métrica de Concluídas, botão principal de adição e confirmação.
  - 🟡 **Amarelo Cádmio Bauhaus** (`#F4BA06`): Utilizado para tarefas e métrica de Pendentes, avisos de atenção e ações de refazer.
  - ⚫ **Preto Estrutural** (`#121212`): Bordas nítidas de 2.5px a 3px e sombras duras ortogonais (*hard cast shadows* `5px 5px 0px`).
  - 📜 **Creme / Papel Técnico** (`#F4EFE6`): Fundo acolhedor com grade sutil de 32px inspirada em pranchetas de arquitetura.
- **Geometria Sagrada de Kandinsky**: Combinação de quadrado (vermelho), círculo (azul) e triângulo (amarelo) integrados no cabeçalho, nas métricas e no rodapé.
- **Tipografia Geométrica**: Tipografia Grotesk moderna via **Space Grotesk** para títulos, contadores e badges, e **Inter** para leitura de textos e títulos de tarefas.

---

## 📐 Estrutura e Reposicionamento dos Elementos

O layout foi organizado em uma **grade assimétrica moderna (2 colunas no desktop)**:
1. **Cabeçalho (Header)**: Faixa geométrica superior com as três formas elementares, identificador do curso (*Web II · 2026.2*), título principal em caixa alta e descrição de escopo.
2. **Coluna Lateral (Painel de Gestão)**:
   - **Formulário de Nova Tarefa (`AddTaskForm`)**: Entrada de texto emoldurada e botão estilizado com alta interatividade.
   - **Resumo de Métricas (`TaskSummary`)**: 3 cards geométricos com contadores dinâmicos de Total, Concluídas e Pendentes, acompanhados de faixas de status condicionais.
3. **Coluna Principal (Mural de Tarefas)**:
   - **Lista de Tarefas (`TaskList` & `TaskItem`)**: Cards com bordas espessas, tarja lateral de identificação de estado, numeração sequencial (`#01`, `#02`...), distintivo de status e botões de ação tátil.
4. **Rodapé Institucional**: Selo histórico da escola e identificação da atividade.

---

## ⚡ Interatividade dos Botões e Estados Visuais

Todos os botões contam com estilização própria, cursores customizados e estados visuais perceptíveis:
- **`:hover`**: Deslocamento ortogonal com expansão de sombra (`transform: translate(-2px, -2px)` e `box-shadow: 5px 5px 0px #121212`), além de inversão de cores.
- **`:active`**: Simulação mecânica de clique com afundamento do botão (`transform: translate(2px, 2px)` e redução da sombra).
- **`:focus-visible`**: Contorno de acessibilidade evidente em alto contraste.

---

## 📱 Responsividade (Media Queries)

A interface se adapta dinamicamente a diferentes tamanhos de viewport:
- **Desktop (> 960px)**: Grade de duas colunas (painel lateral de 360px + mural flexível de tarefas).
- **Tablets e Telas Médias (<= 960px)**: Transição suave para fluxo vertical de coluna única com preservação de todas as margens e sombras.
- **Celulares (<= 640px)**: Adaptação completa dos cards de resumo, reorganização dos botões de ação e otimização de preenchimento interno.

---

## 🛠️ Tecnologias Utilizadas

- **React 19**
- **Vite**
- **Vanilla CSS (CSS3 Moderno com Custom Properties)**
- **Google Fonts (Space Grotesk & Inter)**

---

## 🚀 Como Executar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/IkkiKuuro/Trabalho-WebII.git
   cd Trabalho-WebII
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse no navegador:
   ```
   http://localhost:5173
   ```
