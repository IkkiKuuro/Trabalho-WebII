import React from 'react';

function TaskItem({ id, index, titulo, concluida, onToggle, onDelete }) {
  const indexFormatted = index ? String(index).padStart(2, '0') : null;

  return (
    <li className={`task-item ${concluida ? 'completed' : 'pending'}`}>
      <div className="task-indicator-strip" aria-hidden="true"></div>

      <div className="task-content">
        <div className="task-header-info">
          {indexFormatted && <span className="task-number">#{indexFormatted}</span>}
          <div className="task-status">
            <span className="status-label">Status:</span>
            <span className={`status-badge ${concluida ? 'badge-completed' : 'badge-pending'}`}>
              <span className="status-icon-dot" aria-hidden="true"></span>
              {concluida ? 'Concluída' : 'Pendente'}
            </span>
          </div>
        </div>

        <span className="task-title">{titulo}</span>
      </div>

      <div className="task-actions">
        <button
          type="button"
          className={`btn btn-toggle ${concluida ? 'btn-undo' : 'btn-complete'}`}
          onClick={() => onToggle(id)}
          title={concluida ? 'Marcar como pendente' : 'Marcar como concluída'}
        >
          {concluida ? (
            <>
              <span className="btn-icon">↺</span>
              <span className="btn-text">Refazer</span>
            </>
          ) : (
            <>
              <span className="btn-icon">✓</span>
              <span className="btn-text">Concluir</span>
            </>
          )}
        </button>

        <button
          type="button"
          className="btn btn-delete"
          onClick={() => onDelete(id)}
          title="Excluir tarefa"
        >
          <span className="btn-icon">✕</span>
          <span className="btn-text">Excluir</span>
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
