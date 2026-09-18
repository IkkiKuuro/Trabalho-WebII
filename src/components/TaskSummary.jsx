import React from 'react';

function TaskSummary({ total, concluidas, pendentes }) {
  return (
    <section className="summary-container">
      <h2>Resumo das Tarefas</h2>
      
      <div className="summary-cards">
        <div className="summary-card total">
          <span className="card-label">Total</span>
          <span className="card-value">{total}</span>
        </div>
        
        <div className="summary-card completed">
          <span className="card-label">Concluídas</span>
          <span className="card-value">{concluidas}</span>
        </div>
        
        <div className="summary-card pending">
          <span className="card-label">Pendentes</span>
          <span className="card-value">{pendentes}</span>
        </div>
      </div>

      <div className="conditional-message-box">
        {total === 0 && (
          <p className="status-message empty">
            ℹ️ Nenhuma tarefa cadastrada no momento. Adicione uma nova tarefa abaixo!
          </p>
        )}

        {total > 0 && pendentes > 0 && (
          <p className="status-message pending-alert">
            ⚠️ Você ainda possui <strong>{pendentes}</strong> {pendentes === 1 ? 'tarefa pendente' : 'tarefas pendentes'}.
          </p>
        )}

        {total > 0 && pendentes === 0 && (
          <p className="status-message success-alert">
            🎉 Parabéns! Todas as tarefas foram concluídas!
          </p>
        )}
      </div>
    </section>
  );
}

export default TaskSummary;
