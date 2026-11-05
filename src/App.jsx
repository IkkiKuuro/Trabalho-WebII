import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Modalidades from './components/Modalidades.jsx'
import Diferenciais from './components/Diferenciais.jsx'

/**
 * ==============================================================================
 * COMPONENTE RAIZ: App.jsx (Arena Sunset)
 * ==============================================================================
 *
 * CONCEITOS IMPORTANTES PARA A DEFESA / APRESENTAÇÃO:
 *
 * 1. ARQUITETURA EM ÁRVORE DO REACT (Component Tree):
 *    No React, a interface é estruturada como uma árvore de componentes onde 'App'
 *    atua como o nó raiz (root node). Cada seção visual especializada (Header,
 *    Hero, Modalidades, Diferenciais) é um componente filho independente.
 *
 * 2. COMPOSIÇÃO DE INTERFACES COM JSX:
 *    Em vez de concentrar centenas de linhas de HTML em um único arquivo monolítico,
 *    o JSX nos permite compor componentes declarativamente como tags personalizadas:
 *    <Header />, <Hero />, <Modalidades />, <Diferenciais />.
 *
 * 3. SEPARAÇÃO DE RESPONSABILIDADES (Single Responsibility Principle):
 *    - Header: Gerencia identidade visual e navegação fixa com âncoras locais.
 *    - Hero: Apresenta a proposta de valor, slogan e chamadas para ação (CTAs).
 *    - Modalidades: Exibe dinamicamente o catálogo esportivo via props desestruturadas.
 *    - Diferenciais: Detalha a infraestrutura de ponta e vantagens competitivas.
 *    - #cadastro: Seção de ancoragem preparando o terreno para o formulário da Fase 3.
 *
 * 4. NAVEGAÇÃO SUAVE INTEGRADA:
 *    Todos os identificadores de âncoras ('#hero', '#modalidades', '#diferenciais',
 *    '#cadastro') coincidem com os atributos 'id' presentes nas respectivas seções.
 * ==============================================================================
 */
function App() {
  return (
    <div className="app-arena-sunset">
      {/* 1. Cabeçalho Fixo com Navegação Suave */}
      <Header />

      {/* 2. Conteúdo Principal da Landing Page */}
      <main>
        {/* Seção Hero com Slogan, Badges e Botões CTA (id="hero") */}
        <Hero />

        {/* Seção com Cards das 3 Modalidades Esportivas (id="modalidades") */}
        <Modalidades />

        {/* Seção com Cards dos 4 Diferenciais da Infraestrutura (id="diferenciais") */}
        <Diferenciais />

        {/* Seção de Ancoragem e Preparação para o Cadastro de Clientes (id="cadastro") */}
        <section id="cadastro" className="cadastro-preview-secao">
          <div className="container">
            <div className="cadastro-preview-card">
              <div className="cadastro-preview-conteudo">
                <div className="cadastro-preview-icone" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <line x1="20" y1="8" x2="20" y2="14" />
                    <line x1="23" y1="11" x2="17" y2="11" />
                  </svg>
                </div>
                <div>
                  <span className="cadastro-preview-tag">Área de Membros</span>
                  <h3 className="cadastro-preview-titulo">Cadastro de Atletas e Alunos</h3>
                  <p className="cadastro-preview-texto">
                    Faça seu cadastro para agendar horários, participar de turmas de Beach Tennis,
                    Futevôlei e Vôlei de Praia, e vivenciar a melhor experiência esportiva na areia.
                  </p>
                </div>
              </div>

              <div className="cadastro-preview-aviso">
                <span className="cadastro-preview-aviso-titulo">
                  Área de Cadastro de Clientes - Fase 3
                </span>
                <span className="cadastro-preview-aviso-sub">
                  O formulário interativo com validação e useState será integrado aqui.
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 3. Rodapé Institucional Simples */}
      <footer style={{
        textAlign: 'center',
        padding: 'var(--space-xl) var(--space-md)',
        backgroundColor: 'var(--color-bg)',
        borderTop: '1px solid var(--color-border-subtle)',
        fontSize: 'var(--font-size-sm)',
        color: 'var(--color-text-muted)'
      }}>
        <p>© 2026 Arena Sunset — Sunset Sand Sports. Todos os direitos reservados.</p>
        <p style={{ marginTop: 'var(--space-xs)', fontSize: 'var(--font-size-xs)' }}>
          IFCE Campus Tabuleiro do Norte • Desenvolvimento Web 2 (N2 - Incremento 01)
        </p>
      </footer>
    </div>
  )
}

export default App
