import React from 'react'
import CardModalidade from './CardModalidade.jsx'
import './Modalidades.css'

/**
 * ==============================================================================
 * COMPONENTE DIDÁTICO: Modalidades (Seção de Esportes de Areia)
 * ==============================================================================
 *
 * CONCEITOS IMPORTANTES PARA A DEFESA / APRESENTAÇÃO:
 *
 * 1. RENDERIZAÇÃO DINÂMICA DE LISTAS (.map()):
 *    Em vez de repetir 3 vezes a estrutura HTML para cada esporte, definimos uma
 *    fonte de dados (array de objetos 'modalidades') e utilizamos a função nativa
 *    '.map()' do JavaScript para iterar e retornar um componente 'CardModalidade'.
 *
 * 2. PROPRIEDADE 'key' NO REACT:
 *    Ao renderizar elementos iterativos, o React exige uma propriedade 'key' única
 *    e estável em cada item (aqui usamos 'modalidade.id'). O React utiliza essa chave
 *    em seu algoritmo de reconciliação (Virtual DOM) para identificar eficientemente
 *    quais itens foram adicionados, alterados ou removidos.
 *
 * 3. PASSAGEM EXPLÍCITA DE PROPS (Componente Pai para Componente Filho):
 *    Demonstramos a comunicação unidirecional de dados do React: o componente pai
 *    (Modalidades) repassa informações para o componente filho (CardModalidade)
 *    através de atributos JSX desestruturados.
 * ==============================================================================
 */
function Modalidades() {
  // Lista centralizada com os dados das modalidades esportivas da Arena Sunset
  const modalidades = [
    {
      id: 'beach-tennis',
      titulo: 'Beach Tennis',
      badge: 'Mais Popular',
      tipo: 'destaque',
      descricao:
        'Dinamismo, agilidade e fácil aprendizado em duplas na areia. A febre esportiva nacional praticada com raquetes e bolas despressurizadas.',
      detalhes: [
        'Partidas dinâmicas e divertidas em duplas',
        'Aulas do nível iniciante ao avançado',
        'Raquetes e bolinhas oficiais disponíveis'
      ],
      icone: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M4.93 4.93l4.24 4.24" />
          <path d="M14.83 14.83l4.24 4.24" />
          <path d="M14.83 9.17l4.24-4.24" />
          <path d="M4.93 19.07l4.24-4.24" />
        </svg>
      )
    },
    {
      id: 'futevolei',
      titulo: 'Futevôlei',
      badge: 'Alta Intensidade',
      tipo: 'solar',
      descricao:
        'Controle refinado de bola, impulsão atlética e agilidade utilizando pés, ombros e cabeça, combinando a paixão do futebol com o ambiente da areia.',
      detalhes: [
        'Excelente queima calórica e tônus muscular',
        'Trabalho de coordenação e reflexos rápidos',
        'Clínicas técnicas e treinos funcionais'
      ],
      icone: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      )
    },
    {
      id: 'volei-de-praia',
      titulo: 'Vôlei de Praia',
      badge: 'Tradição Olímpica',
      tipo: 'esporte',
      descricao:
        'Tradição consagrada com saques, levantamentos, ataques e bloqueios em areia limpa e fofa de padrão internacional.',
      detalhes: [
        'Tradição e cooperação em equipe',
        'Formações em duplas ou quartetos mistos',
        'Torneios internos e festivais mensais'
      ],
      icone: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    }
  ]

  return (
    <section id="modalidades" className="modalidades-secao">
      <div className="container">
        {/* Cabeçalho da Seção com Título Semântico H2 */}
        <div className="modalidades-cabecalho">
          <span className="modalidades-categoria">Modalidades da Arena</span>
          <h2 className="modalidades-titulo">Modalidades Esportivas</h2>
          <p className="modalidades-subtitulo">
            Estrutura preparada para todos os níveis, do iniciante ao avançado
          </p>
        </div>

        {/* Grid de Cards das Modalidades */}
        <div className="modalidades-grid">
          {modalidades.map((modalidade) => (
            <CardModalidade
              key={modalidade.id}
              titulo={modalidade.titulo}
              descricao={modalidade.descricao}
              icone={modalidade.icone}
              detalhes={modalidade.detalhes}
              badge={modalidade.badge}
              tipo={modalidade.tipo}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Modalidades
