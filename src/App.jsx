import React, { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Modalidades from './components/Modalidades.jsx'
import Diferenciais from './components/Diferenciais.jsx'
import FormularioCadastro from './components/FormularioCadastro.jsx'
import ListaAtletas from './components/ListaAtletas.jsx'

/**
 * ==============================================================================
 * COMPONENTE RAIZ: App.jsx (Arena Sunset)
 * ==============================================================================
 *
 * CONCEITOS IMPORTANTES PARA A DEFESA / APRESENTAÇÃO:
 *
 * 1. GERENCIAMENTO CENTRALIZADO DE ESTADO (State Management com useState):
 *    O React opera sob o princípio da reatividade: quando o estado de um componente
 *    muda, o React recalcula a renderização daquele componente e de seus filhos.
 *    Aqui, o estado 'atletas' reside no topo da árvore de componentes (em 'App'),
 *    permitindo que tanto o formulário quanto a listagem compartilhem a mesma
 *    fonte de dados sem conflitos.
 *
 * 2. ELEVAÇÃO DE ESTADO (Lifting State Up):
 *    Quando dois componentes irmãos precisam compartilhar dados (ex: 'FormularioCadastro'
 *    produz novos atletas e 'ListaAtletas' precisa exibi-los), elevamos o estado para
 *    o ancestral comum mais próximo ('App'). O componente pai provê:
 *    - O estado atual ('atletas') como propriedade (prop) para o consumidor ('ListaAtletas').
 *    - Uma função manipuladora ('handleCadastrarAtleta') repassada como prop de retorno
 *      (callback prop) para o produtor ('FormularioCadastro').
 *
 * 3. IMUTABILIDADE NO GERENCIAMENTO DE ESTADO:
 *    Ao atualizar estados no React, NUNCA devemos modificar o array original diretamente
 *    com métodos mutáveis como '.push()' ou '.splice()'.
 *    - Inclusão: utilizamos o spread operator ('[novoAtleta, ...prev]'), inserindo o
 *      novo elemento no início e preservando os anteriores.
 *    - Remoção: utilizamos o método '.filter(atleta => atleta.id !== id)', que retorna
 *      um novo array excluindo apenas o item correspondente ao id informado.
 *    Isso garante que o React detecte a alteração por comparação de referência e acione
 *    a re-renderização imediata da interface.
 *
 * 4. RENDERIZAÇÃO CONDICIONAL E LISTAS COM CHAVE ÚNICA ('key'):
 *    - O componente 'ListaAtletas' implementa a transição entre zero atletas (Empty State)
 *      e múltiplos atletas (Grade responsiva).
 *    - Cada item mapeado com '.map()' recebe obrigatoriamente a prop 'key={atleta.id}',
 *      permitindo ao Virtual DOM rastrear cada nó de forma eficiente.
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

  /**
   * Remove um atleta do estado central por seu identificador único
   * @param {string} id - Identificador único do atleta a ser excluído
   */
  const handleRemoverAtleta = (id) => {
    // Filtragem imutável: gera novo array contendo apenas os atletas cujo id é diferente
    setAtletas((prev) => prev.filter((atleta) => atleta.id !== id))
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

        {/* Seção Interativa de Cadastro e Listagem de Atletas (id="cadastro") */}
        <section id="cadastro" className="cadastro-secao">
          <div className="container">
            {/* Formulário Controlado para Registro de Atletas */}
            <FormularioCadastro onCadastrarAtleta={handleCadastrarAtleta} />

            {/* Listagem Reativa de Atletas Cadastrados com Remoção e Empty State */}
            <ListaAtletas
              atletas={atletas}
              onRemoverAtleta={handleRemoverAtleta}
            />
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
