import React from 'react';

function TaskSummary({ total, concluidas, pendentes }) {
  return (
    <section className="summary-container">
      <div className="section-header-tag">
        <span className="tag-number">02</span>
        <h2 className="section-heading">Resumo das Tarefas</h2>
      </div>
      
      <div className="summary-cards">
        <div className="summary-card total">
          <div className="card-geom-indicator indicator-square" aria-hidden="true"></div>
          <span className="card-label">Total</span>
          <span className="card-value">{total}</span>
          <span className="card-subtext">atividades</span>
        </div>
        
        <div className="summary-card completed">
          <div className="card-geom-indicator indicator-circle" aria-hidden="true"></div>
          <span className="card-label">Concluídas</span>
          <span className="card-value">{concluidas}</span>
          <span className="card-subtext">finalizadas</span>
        </div>
        
        <div className="summary-card pending">
          <div className="card-geom-indicator indicator-triangle" aria-hidden="true"></div>
          <span className="card-label">Pendentes</span>
          <span className="card-value">{pendentes}</span>
          <span className="card-subtext">a realizar</span>
        </div>
      </div>

      <div className="conditional-message-box">
        {total === 0 && (
          <div className="status-message empty">
            <span className="message-shape shape-sq"></span>
            <p>ℹ️ Nenhuma tarefa cadastrada no momento. Adicione uma nova tarefa acima!</p>
          </div>
        )}

        {total > 0 && pendentes > 0 && (
          <div className="status-message pending-alert">
            <span className="message-shape shape-tr"></span>
            <p>⚠️ Você ainda possui <strong>{pendentes}</strong> {pendentes === 1 ? 'tarefa pendente' : 'tarefas pendentes'}.</p>
          </div>
        )}

        {total > 0 && pendentes === 0 && (
          <div className="status-message success-alert">
            <span className="message-shape shape-ci"></span>
            <p>🎉 Parabéns! Todas as tarefas foram concluídas!</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default TaskSummary;
