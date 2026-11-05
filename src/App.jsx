import React, { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Modalidades from './components/Modalidades.jsx'
import Diferenciais from './components/Diferenciais.jsx'
import FormularioCadastro from './components/FormularioCadastro.jsx'

/**
 * ==============================================================================
 * COMPONENTE RAIZ: App.jsx (Arena Sunset)
 * ==============================================================================
 *
 * CONCEITOS IMPORTANTES PARA A DEFESA / APRESENTAÇÃO:
 *
 * 1. GERENCIAMENTO DE ESTADO CENTRALIZADO (State Management com useState):
 *    O React opera sob o princípio da reatividade: quando o estado de um componente
 *    muda, o React recalcula a renderização daquele componente e de seus filhos.
 *    Aqui, o estado 'atletas' reside no topo da árvore de componentes (em 'App'),
 *    permitindo que tanto o formulário quanto a listagem compartilhem a mesma
 *    fonte de dados sem conflitos.
 *
 * 2. ELEVAÇÃO DE ESTADO (Lifting State Up):
 *    Quando dois componentes irmãos precisam compartilhar dados (ex: o 'FormularioCadastro'
 *    produz novos atletas e a 'ListaAtletas' precisa exibi-los), elevamos o estado para
 *    o ancestral comum mais próximo ('App'). O componente pai provê:
 *    - O estado atual ('atletas') como propriedade (prop) para o consumidor.
 *    - Uma função manipuladora ('handleCadastrarAtleta') repassada como prop de retorno
 *      (callback prop) para o produtor.
 *
 * 3. IMUTABILIDADE NO REACT:
 *    Ao atualizar estados no React, NUNCA devemos modificar o array original diretamente
 *    com métodos mutáveis como '.push()' ou '.splice()'. Em vez disso, geramos um novo
 *    array utilizando o spread operator ('[novoAtleta, ...prev]'), garantindo que o React
 *    detecte a alteração por comparação de referência e acione a re-renderização.
 *
 * 4. ARQUITETURA EM ÁRVORE DO REACT (Component Tree):
 *    No React, a interface é estruturada como uma árvore de componentes onde 'App'
 *    atua como o nó raiz (root node). Cada seção visual especializada (Header,
 *    Hero, Modalidades, Diferenciais, Formulario/Listagem) é um componente modular.
 * ==============================================================================
 */
function App() {
  // 1. Estado central de atletas cadastrados na sessão (demonstração didática inicial)
  const [atletas, setAtletas] = useState([
    {
      id: 'atleta-demo-1',
      nome: 'Mariana Souza Lima',
      email: 'mariana.souza@praia.com.br',
      telefone: '(88) 99745-1234',
      modalidade: 'beach-tennis',
      dataCadastro: '05/11/2026'
    },
    {
      id: 'atleta-demo-2',
      nome: 'Rodrigo Silveira Duarte',
      email: 'rodrigo.fute@sunset.com',
      telefone: '(88) 98821-5678',
      modalidade: 'futevolei',
      dataCadastro: '05/11/2026'
    }
  ])

  /**
   * Adiciona um novo atleta ao estado central preservando a imutabilidade
   * @param {Object} novoAtleta - Objeto contendo dados do atleta recém-cadastrado
   */
  const handleCadastrarAtleta = (novoAtleta) => {
    // Atualização funcional do estado com operador spread para imutabilidade
    setAtletas((prev) => [novoAtleta, ...prev])
  }

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

        {/* Seção Interativa de Cadastro de Atletas (id="cadastro") */}
        <section id="cadastro" className="cadastro-secao">
          <div className="container">
            {/* Componente Controlado de Formulário de Cadastro */}
            <FormularioCadastro onCadastrarAtleta={handleCadastrarAtleta} />

            {/* Listagem preliminar do tracer vertical para validação de reatividade */}
            <div style={{
              marginTop: 'var(--space-xl)',
              padding: 'var(--space-lg)',
              backgroundColor: 'var(--color-surface)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-border)',
              maxWidth: '680px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              <h4 style={{
                margin: '0 0 var(--space-md) 0',
                color: 'var(--color-text)',
                fontSize: 'var(--font-size-md)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span>Atletas Inscritos (Tracer Vertical)</span>
                <span style={{
                  fontSize: 'var(--font-size-xs)',
                  backgroundColor: 'var(--color-primary-light)',
                  color: 'var(--color-primary-dark)',
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-full)'
                }}>
                  {atletas.length} {atletas.length === 1 ? 'atleta' : 'atletas'}
                </span>
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-xs)'
              }}>
                {atletas.map((atleta) => (
                  <li
                    key={atleta.id}
                    style={{
                      padding: 'var(--space-sm) var(--space-md)',
                      backgroundColor: 'var(--color-surface-sand)',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: 'var(--font-size-sm)'
                    }}
                  >
                    <span style={{ fontWeight: 600, color: 'var(--color-text)' }}>
                      {atleta.nome}
                    </span>
                    <span style={{
                      color: 'var(--color-primary-dark)',
                      textTransform: 'capitalize'
                    }}>
                      {atleta.modalidade.replace('-', ' ')}
                    </span>
                  </li>
                ))}
              </ul>
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
