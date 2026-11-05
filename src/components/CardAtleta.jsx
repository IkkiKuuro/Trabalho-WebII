import React from 'react'
import './CardAtleta.css'

/**
 * ==============================================================================
 * COMPONENTE DIDÁTICO: CardAtleta (Cartão Individual do Praticante)
 * ==============================================================================
 *
 * CONCEITOS IMPORTANTES PARA A DEFESA / APRESENTAÇÃO:
 *
 * 1. PROPS DESESTRUTURADAS (Destructuring Props):
 *    Em vez de acessar 'props.nome', 'props.email', desestruturamos diretamente
 *    os parâmetros da função: '{ id, nome, email, telefone, modalidade, dataCadastro, onRemover }'.
 *    Isso torna a assinatura do componente autoexplicativa e o código muito mais legível.
 *
 * 2. COMUNICAÇÃO FILHO -> PAI VIA CALLBACKS (onRemover):
 *    Ao clicar no botão de remover, disparamos a função 'onRemover(id)' repassada pelo
 *    componente pai. O filho não manipula o estado global de atletas diretamente; ele
 *    apenas emite o evento com seu identificador único.
 *
 * 3. RENDERIZAÇÃO CONDICIONAL DE CLASSES (Badges por Modalidade):
 *    Utilizamos um mapeamento ou lógica condicional para atribuir classes e rótulos
 *    específicos a cada modalidade esportiva (Beach Tennis, Futevôlei, Vôlei de Praia),
 *    demonstrando a flexibilidade do JSX com JavaScript.
 *
 * 4. ROBUSTEZ VISUAL (Long-text Backstop):
 *    A classe '.atleta-nome' aplica 'word-break: break-word' e 'overflow-wrap: anywhere',
 *    garantindo que nomes extensos não quebrem o grid ou sobreponham elementos.
 * ==============================================================================
 */
function CardAtleta({
  id,
  nome,
  email,
  telefone,
  modalidade,
  dataCadastro,
  onRemover
}) {
  // Configurações visuais de cada modalidade esportiva
  const modalidadesInfo = {
    'beach-tennis': {
      nome: 'Beach Tennis',
      classeBadge: 'badge-beach-tennis'
    },
    'futevolei': {
      nome: 'Futevôlei',
      classeBadge: 'badge-futevolei'
    },
    'volei-praia': {
      nome: 'Vôlei de Praia',
      classeBadge: 'badge-volei-praia'
    }
  }

  const infoAtual = modalidadesInfo[modalidade] || {
    nome: modalidade,
    classeBadge: 'badge-padrao'
  }

  const handleRemover = () => {
    if (onRemover) {
      onRemover(id)
    }
  }

  return (
    <article className="card-atleta" aria-label={`Atleta ${nome}`}>
      {/* Topo do Card: Badge da Modalidade e Botão de Remoção */}
      <div className="card-atleta-topo">
        <span className={`badge-modalidade ${infoAtual.classeBadge}`}>
          {infoAtual.nome}
        </span>

        <button
          type="button"
          className="btn-remover-atleta"
          onClick={handleRemover}
          title={`Remover ${nome} da lista de atletas`}
          aria-label={`Remover atleta ${nome}`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
          </svg>
        </button>
      </div>

      {/* Nome do Atleta (com quebra segura de strings extensas) */}
      <h4 className="atleta-nome">{nome}</h4>

      {/* Informações de Contato e Inscrição */}
      <div className="atleta-dados">
        {/* E-mail */}
        <div className="dado-item">
          <svg
            className="dado-icone"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <span className="dado-valor">{email}</span>
        </div>

        {/* Telefone */}
        <div className="dado-item">
          <svg
            className="dado-icone"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="dado-valor">{telefone}</span>
        </div>
      </div>

      {/* Rodapé do Card: Data de Inscrição */}
      <div className="card-atleta-rodape">
        <span className="atleta-registro">
          Inscrito em {dataCadastro || 'Hoje'}
        </span>
      </div>
    </article>
  )
}

export default CardAtleta
