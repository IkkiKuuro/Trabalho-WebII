import React from 'react'
import './Header.css'

/**
 * ==============================================================================
 * COMPONENTE DIDÁTICO: Header (Barra de Navegação Superior)
 * ==============================================================================
 *
 * CONCEITOS IMPORTANTES PARA A DEFESA / APRESENTAÇÃO:
 *
 * 1. COMPONENTE FUNCIONAL SEM ESTADO (Stateless / Presentational):
 *    O Header é um componente puramente visual de apresentação. Ele não precisa
 *    de 'useState' neste momento pois sua função principal é renderizar a identidade
 *    visual da arena e os links de navegação estáticos.
 *
 * 2. ESTRUTURAÇÃO SEMÂNTICA (HTML5):
 *    Utilizamos tags semânticas (<header>, <nav>, <ul>, <li>, <a>) que melhoram
 *    a acessibilidade para leitores de tela e a indexação por mecanismos de busca (SEO).
 *
 * 3. NAVEGAÇÃO SUAVE POR ÂNCORAS LOCAIS:
 *    Os atributos 'href="#hero"', 'href="#modalidades"', etc., apontam para os 'id'
 *    das seções correspondentes na mesma página. Em conjunto com a regra CSS
 *    'scroll-behavior: smooth' configurada no 'global.css', o navegador realiza uma
 *    rolagem animada suave e natural até o elemento alvo.
 * ==============================================================================
 */
function Header() {
  return (
    <header className="header-principal">
      <div className="container header-container">
        {/* Identidade Visual / Logotipo da Arena */}
        <a href="#hero" className="header-logo" title="Ir para o início - Arena Sunset">
          <div className="header-logo-icone" aria-hidden="true">
            {/* Ícone SVG inline representando o sol da Arena Sunset e raquete de esporte de areia */}
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          </div>
          <div className="header-logo-textos">
            <span className="header-logo-titulo">Arena Sunset</span>
            <span className="header-logo-subtitulo">Sunset Sand Sports</span>
          </div>
        </a>

        {/* Menu de Navegação Semântica com Âncoras */}
        <nav className="header-nav" aria-label="Navegação principal">
          <ul className="header-nav-lista">
            <li className="header-nav-item">
              <a href="#hero" className="header-nav-link">
                Início
              </a>
            </li>
            <li className="header-nav-item">
              <a href="#modalidades" className="header-nav-link">
                Modalidades
              </a>
            </li>
            <li className="header-nav-item">
              <a href="#diferenciais" className="header-nav-link">
                Diferenciais
              </a>
            </li>
            <li className="header-nav-item">
              <a href="#cadastro" className="header-nav-link header-nav-link--cta">
                Garantir Cadastro
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
