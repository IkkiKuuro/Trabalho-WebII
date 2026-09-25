import React from 'react';

function Header() {
  return (
    <header className="app-header">
      {/* Faixa geométrica superior icônica Bauhaus: Kandinsky (Quadrado Vermelho, Círculo Azul, Triângulo Amarelo) */}
      <div className="bauhaus-accent-bar" aria-hidden="true">
        <div className="bauhaus-shape shape-red-square" title="Quadrado Vermelho"></div>
        <div className="bauhaus-shape shape-blue-circle" title="Círculo Azul"></div>
        <div className="bauhaus-shape shape-yellow-triangle" title="Triângulo Amarelo"></div>
        <div className="bauhaus-bar-line"></div>
      </div>

      <div className="header-meta-row">
        <div className="header-badge">Web II · 2026.2</div>
        <span className="header-subtag">FORMA & FUNÇÃO // BAUHAUS DESIGN SYSTEM</span>
      </div>

      <h1 className="header-title">Organizador de Tarefas Acadêmicas</h1>

      <p className="header-description">
        Gerencie suas atividades acadêmicas, acompanhe o progresso de tarefas pendentes e conclua seus estudos com eficiência.
      </p>
    </header>
  );
}

export default Header;
