import React from 'react'
import './CardModalidade.css'

/**
 * ==============================================================================
 * COMPONENTE DIDÁTICO: CardModalidade
 * ==============================================================================
 *
 * CONCEITOS IMPORTANTES PARA A DEFESA / APRESENTAÇÃO:
 *
 * 1. PROPS DESESTRUTURADAS COM VALORES PADRÃO (Default Parameters):
 *    Em vez de acessar 'props.titulo', desestruturamos diretamente na assinatura:
 *      function CardModalidade({ titulo, descricao, icone, detalhes, badge, tipo = 'padrao' })
 *    Isso traz clareza ao contrato do componente, informando exatamente o que
 *    ele espera receber do componente pai (Modalidades).
 *
 * 2. COMPONENTE ALTAMENTE REUTILIZÁVEL:
 *    Um único componente CardModalidade é responsável por renderizar qualquer
 *    esporte de areia (Beach Tennis, Futevôlei, Vôlei de Praia), mudando apenas
 *    os dados transmitidos pelo pai através das propriedades.
 *
 * 3. RENDERIZAÇÃO CONDICIONAL E LISTAS ANINHADAS:
 *    Verificamos a existência de arrays opcionais (como 'detalhes') e renderizamos
 *    cada item com seu próprio '.map()' e chave 'key' individual.
 * ==============================================================================
 */
function CardModalidade({
  titulo,
  descricao,
  icone,
  detalhes = [],
  badge = 'Modalidade Oficial',
  tipo = 'padrao'
}) {
  return (
    <article className={`card-modalidade card-modalidade--${tipo}`}>
      {/* Cabeçalho do Card com Ícone e Badge */}
      <div className="card-modalidade-topo">
        <div className="card-modalidade-icone" aria-hidden="true">
          {icone}
        </div>
        <span className="card-modalidade-badge">{badge}</span>
      </div>

      {/* Título da Modalidade */}
      <h3 className="card-modalidade-titulo">{titulo}</h3>

      {/* Descrição Explicativa */}
      <p className="card-modalidade-descricao">{descricao}</p>

      {/* Lista de Detalhes / Diferenciais do Esporte */}
      {detalhes && detalhes.length > 0 && (
        <ul className="card-modalidade-detalhes">
          {detalhes.map((item, index) => (
            <li key={index} className="card-modalidade-detalhe-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="card-modalidade-check" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Ação rápida de convite ao esporte */}
      <div className="card-modalidade-rodape">
        <a href="#cadastro" className="card-modalidade-link">
          <span>Praticar {titulo}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </article>
  )
}

export default CardModalidade
