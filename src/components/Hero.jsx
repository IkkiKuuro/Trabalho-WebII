import React from 'react'
import BadgeExemplo from './BadgeExemplo.jsx'
import './Hero.css'

/**
 * ==============================================================================
 * COMPONENTE DIDÁTICO: Hero (Seção Principal de Boas-Vindas)
 * ==============================================================================
 *
 * CONCEITOS IMPORTANTES PARA A DEFESA / APRESENTAÇÃO:
 *
 * 1. COMPOSIÇÃO DE COMPONENTES:
 *    Demonstra como o React permite compor interfaces ricas reutilizando componentes
 *    menores. Aqui, incluímos o 'BadgeExemplo' passando propriedades customizadas
 *    para destacar a identidade e o conceito esportivo da arena.
 *
 * 2. HIERARQUIA VISUAL E COPYWRITING:
 *    O elemento <h1> define o título de maior relevância semântica da página,
 *    enquanto o slogan e a descrição detalham a proposta de valor, guiando o olhar
 *    do visitante naturalmente para os botões de Chamada para Ação (CTA).
 *
 * 3. NAVEGAÇÃO E ANCORAGEM:
 *    Os botões de CTA utilizam links âncoras nativos ('#cadastro' e '#modalidades')
 *    que conduzem o usuário diretamente para as respectivas áreas da landing page.
 * ==============================================================================
 */
function Hero() {
  return (
    <section id="hero" className="hero-secao">
      <div className="container hero-container">
        {/* Badges de destaque reutilizando o componente BadgeExemplo */}
        <div className="hero-badges">
          <BadgeExemplo texto="Sunset Sand Sports" tipo="destaque" />
          <BadgeExemplo texto="Complexo Esportivo de Areia" tipo="esporte" />
        </div>

        {/* Slogan temático */}
        <p className="hero-slogan">
          Onde o esporte na areia encontra a energia do pôr do sol
        </p>

        {/* Título principal de alto impacto visual (H1) */}
        <h1 className="hero-titulo">
          Viva a Experiência dos Esportes de Areia na Arena Sunset
        </h1>

        {/* Subtítulo descritivo com a proposta de valor */}
        <p className="hero-descricao">
          Quadras profissionais de Beach Tennis, Futevôlei e Vôlei de Praia em um
          complexo esportivo completo com iluminação noturna e areia de padrão oficial.
        </p>

        {/* Grupo de Ações Principais (CTAs) */}
        <div className="hero-acoes">
          <a href="#cadastro" className="hero-btn hero-btn--primary">
            <span>Garantir Meu Cadastro</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="#modalidades" className="hero-btn hero-btn--secondary">
            <span>Conhecer as Modalidades</span>
          </a>
        </div>

        {/* Destaques rápidos / mini-badges de apoio */}
        <div className="hero-destaques">
          <div className="hero-destaque-item">
            <span className="hero-destaque-ponto" aria-hidden="true"></span>
            <span>4 Quadras Oficiais</span>
          </div>
          <div className="hero-destaque-item">
            <span className="hero-destaque-ponto" aria-hidden="true"></span>
            <span>Areia Padrão Torneio</span>
          </div>
          <div className="hero-destaque-item">
            <span className="hero-destaque-ponto" aria-hidden="true"></span>
            <span>Iluminação Noturna</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
