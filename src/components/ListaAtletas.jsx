import React from 'react'
import CardAtleta from './CardAtleta.jsx'
import './ListaAtletas.css'

/**
 * ==============================================================================
 * COMPONENTE DIDÁTICO: ListaAtletas (Listagem Reativa de Praticantes)
 * ==============================================================================
 *
 * CONCEITOS IMPORTANTES PARA A DEFESA / APRESENTAÇÃO:
 *
 * 1. RENDERIZAÇÃO CONDICIONAL DE INTERFACE:
 *    Demonstramos duas formas elegantes de renderização condicional no JSX:
 *    - Se 'atletas.length === 0', exibimos o 'empty state' convidativo.
 *    - Se 'atletas.length > 0', renderizamos a grade dinâmica de cards.
 *
 * 2. TRANSFORMAÇÃO DE DADOS EM COMPONENTES (.map()):
 *    O método '.map()' do JavaScript transforma cada objeto do array 'atletas' em
 *    uma instância do componente 'CardAtleta', passando todas as propriedades
 *    através do operador spread ('{...atleta}') ou props explícitas.
 *
 * 3. IDENTIFICADOR ÚNICO ('key'):
 *    Cada item da lista recebe 'key={atleta.id}'. Essa chave é fundamental para
 *    que o algoritmo de reconciliação do Virtual DOM do React identifique exatamente
 *    qual item foi adicionado ou removido, evitando reconstruções desnecessárias.
 *
 * 4. PROP DRILLING CONTROLADO (Comunicação de Eventos):
 *    A função 'onRemoverAtleta' recebida do 'App.jsx' é repassada para cada 'CardAtleta'
 *    como 'onRemover', garantindo o fluxo reativo da exclusão.
 * ==============================================================================
 */
function ListaAtletas({ atletas = [], onRemoverAtleta }) {
  const total = atletas.length

  return (
    <section className="lista-atletas-secao" aria-labelledby="titulo-lista-atletas">
      {/* Cabeçalho da Lista com Contador Dinâmico */}
      <div className="lista-atletas-cabecalho">
        <div>
          <h3 id="titulo-lista-atletas" className="lista-atletas-titulo">
            Atletas Inscritos na Sessão
          </h3>
          <p className="lista-atletas-subtitulo">
            Listagem dinâmica atualizada em tempo real via controle de estado do React.
          </p>
        </div>

        {/* Contador dinâmico de atletas inscritos */}
        <span className="badge-contador" aria-live="polite">
          {total} {total === 1 ? 'atleta' : 'atletas'}
        </span>
      </div>

      {/* Renderização Condicional: Empty State vs. Grade Populada */}
      {total === 0 ? (
        <div className="lista-vazia" role="region" aria-label="Nenhum atleta cadastrado">
          <div className="icone-vazio-container" aria-hidden="true">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M7 15h0" />
              <path d="M2 9.5h20" />
              <circle cx="12" cy="14" r="2" />
            </svg>
          </div>
          <h4 className="titulo-vazio">Nenhum atleta cadastrado ainda</h4>
          <p className="texto-vazio">
            Preencha o formulário acima para registrar o primeiro atleta na arena e acompanhar as inscrições em tempo real.
          </p>
        </div>
      ) : (
        <div className="grade-atletas" role="list">
          {atletas.map((atleta) => (
            <CardAtleta
              key={atleta.id}
              id={atleta.id}
              nome={atleta.nome}
              email={atleta.email}
              telefone={atleta.telefone}
              modalidade={atleta.modalidade}
              dataCadastro={atleta.dataCadastro}
              onRemover={onRemoverAtleta}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default ListaAtletas
