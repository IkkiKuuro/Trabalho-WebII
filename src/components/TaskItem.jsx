import React from 'react';

function TaskItem({ id, titulo, concluida, onToggle, onDelete }) {
  return (
    <li className={`task-item ${concluida ? 'completed' : 'pending'}`}>
      <div className="task-content">
        <span className="task-title">{titulo}</span>
        <div className="task-status">
          Status:{' '}
          <span className={`status-badge ${concluida ? 'badge-completed' : 'badge-pending'}`}>
            {concluida ? 'Concluída' : 'Pendente'}
          </span>
        </div>
      </div>

      <div className="task-actions">
        <button
          className={`btn btn-toggle ${concluida ? 'btn-undo' : 'btn-complete'}`}
          onClick={() => onToggle(id)}
          title={concluida ? 'Marcar como pendente' : 'Marcar como concluída'}
        >
          {concluida ? 'Refazer' : 'Concluir'}
        </button>

        <button
          className="btn btn-delete"
          onClick={() => onDelete(id)}
          title="Excluir tarefa"
        >
          Excluir
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
