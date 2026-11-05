import React from 'react'
import BadgeExemplo from './components/BadgeExemplo.jsx'

/**
 * Componente principal da aplicação Arena Sunset.
 * Atua como o ponto central onde os módulos visuais e os estados são integrados.
 *
 * Neste estágio inicial (Fase 01 - Setup e Design System), demonstra:
 * 1. A aplicação da tipografia e variáveis globais CSS.
 * 2. O consumo de componentes funcionais filhos (BadgeExemplo).
 * 3. A passagem explícita de propriedades (props) para componentes reutilizáveis.
 */
function App() {
  return (
    <div className="container" style={{ padding: 'var(--space-2xl) var(--space-md)' }}>
      <header style={{ marginBottom: 'var(--space-xl)' }}>
        <div style={{ display: 'flex', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
          {/* Exemplo de passagem de props: 'texto' e 'tipo' desestruturados no filho */}
          <BadgeExemplo texto="Sunset Sand Sports" tipo="destaque" />
          <BadgeExemplo texto="Beach Tennis & Vôlei" tipo="esporte" />
          <BadgeExemplo texto="Horário Nobre" tipo="solar" />
        </div>
        <h1>Arena Sunset - Sand Sports</h1>
        <p style={{ marginTop: 'var(--space-sm)', fontSize: 'var(--font-size-lg)' }}>
          Centro esportivo de areia focado em Beach Tennis, Vôlei de Praia e Futevôlei.
        </p>
      </header>

      <section style={{
        backgroundColor: 'var(--color-surface)',
        padding: 'var(--space-xl)',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-card)'
      }}>
        <h2>Base do Projeto e Design System Configurados</h2>
        <p style={{ marginTop: 'var(--space-sm)' }}>
          Estrutura modular em React com Vite, variáveis CSS semânticas e componentes didáticos prontos para os próximos incrementos.
        </p>
      </section>
    </div>
  )
}

export default App
