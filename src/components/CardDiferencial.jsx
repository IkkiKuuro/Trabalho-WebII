import React from 'react'
import './CardDiferencial.css'

/**
 * ==============================================================================
 * COMPONENTE DIDÁTICO: CardDiferencial
 * ==============================================================================
 *
 * CONCEITOS IMPORTANTES PARA A DEFESA / APRESENTAÇÃO:
 *
 * 1. PROPS DESESTRUTURADAS:
 *    Recebemos as propriedades diretamente como parâmetros do componente:
 *      function CardDiferencial({ titulo, descricao, destaque, icone })
 *    Essa prática é uma das convenções mais fortes do React moderno, dispensando
 *    o acesso verboso a 'props.propriedade'.
 *
 * 2. PADRÃO DE DESIGN SYSTEM EM CSS PURO:
 *    As classes aplicadas neste componente utilizam variáveis nativas (custom properties)
 *    para manter o ritmo vertical, bordas arredondadas e sombras quentes sem dependência
 *    de bibliotecas como Tailwind ou Bootstrap.
 * ==============================================================================
 */
function CardDiferencial({ titulo, descricao, destaque, icone }) {
  return (
    <div className="card-diferencial">
      {/* Topo com Ícone e Selo de Destaque */}
      <div className="card-diferencial-topo">
        <div className="card-diferencial-icone" aria-hidden="true">
          {icone}
        </div>
        {destaque && (
          <span className="card-diferencial-destaque">
            {destaque}
          </span>
        )}
      </div>

      {/* Título do Diferencial */}
      <h3 className="card-diferencial-titulo">{titulo}</h3>

      {/* Descrição Explicativa */}
      <p className="card-diferencial-descricao">{descricao}</p>
    </div>
  )
}

export default CardDiferencial
