import React from 'react'
import CardDiferencial from './CardDiferencial.jsx'
import './Diferenciais.css'

/**
 * ==============================================================================
 * COMPONENTE DIDÁTICO: Diferenciais (Infraestrutura da Arena)
 * ==============================================================================
 *
 * CONCEITOS IMPORTANTES PARA A DEFESA / APRESENTAÇÃO:
 *
 * 1. SEPARAÇÃO DE PREOCUPAÇÕES (Data vs Presentation):
 *    Os dados estruturados dos diferenciais (array 'diferenciais') ficam separados
 *    da casca visual. Isso facilita atualizações futuras de conteúdo sem a necessidade
 *    de alterar a marcação JSX.
 *
 * 2. COMPONENTE REUTILIZÁVEL FILHO:
 *    Cada item do array é transmitido para uma instância do componente 'CardDiferencial',
 *    reforçando a filosofia do React de criar blocos reutilizáveis com responsabilidade única.
 * ==============================================================================
 */
function Diferenciais() {
  // Lista com os 4 diferenciais principais da infraestrutura da Arena Sunset
  const diferenciais = [
    {
      id: 'quadras-cobertas',
      titulo: 'Quadras Cobertas',
      destaque: '100% Cobertas',
      descricao:
        'Proteção contra sol intenso e chuva, garantindo partidas e treinos contínuos com conforto térmico em qualquer época do ano.',
      icone: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" />
          <path d="M5 21V7l7-4 7 4v14" />
          <path d="M9 21v-8a3 3 0 0 1 6 0v8" />
        </svg>
      )
    },
    {
      id: 'areia-tratada',
      titulo: 'Areia Tratada Padrão Torneio',
      destaque: 'Padrão Oficial',
      descricao:
        'Grânulos selecionados e higienizados regularmente, que minimizam o impacto nas articulações e não grudam excessivamente na pele.',
      icone: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    },
    {
      id: 'iluminacao-led',
      titulo: 'Iluminação Noturna em LED',
      destaque: 'LED Noturno',
      descricao:
        'Refletores potentes com facho direcionado que evitam ofuscamento e garantem máxima visibilidade nos jogos e torneios noturnos.',
      icone: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="M4.93 4.93l2.83 2.83" />
          <path d="M16.24 16.24l2.83 2.83" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
          <path d="M4.93 19.07l2.83-2.83" />
          <path d="M16.24 7.76l2.83-2.83" />
        </svg>
      )
    },
    {
      id: 'vestiarios-lounge',
      titulo: 'Vestiários e Espaço Convivência',
      destaque: 'Sunset Lounge',
      descricao:
        'Duchas aquecidas, armários individuais com chave e área lounge aconchegante para confraternização e descanso pós-jogo.',
      icone: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    }
  ]

  return (
    <section id="diferenciais" className="diferenciais-secao">
      <div className="container">
        {/* Cabeçalho da Seção */}
        <div className="diferenciais-cabecalho">
          <span className="diferenciais-categoria">Nossa Estrutura</span>
          <h2 className="diferenciais-titulo">Por que escolher a Arena Sunset?</h2>
          <p className="diferenciais-subtitulo">
            Infraestrutura de ponta projetada para seu conforto e performance esportiva
          </p>
        </div>

        {/* Grid com os 4 Diferenciais */}
        <div className="diferenciais-grid">
          {diferenciais.map((item) => (
            <CardDiferencial
              key={item.id}
              titulo={item.titulo}
              destaque={item.destaque}
              descricao={item.descricao}
              icone={item.icone}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Diferenciais
