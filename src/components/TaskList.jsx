import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tarefas, onToggle, onDelete }) {
  if (tarefas.length === 0) {
    return (
      <div className="empty-state">
        <p>Sua lista de tarefas está vazia.</p>
      </div>
    );
  }

  return (
    <section className="task-list-section">
      <h2>Lista de Tarefas</h2>
      <ul className="task-list">
        {tarefas.map((tarefa) => (
          <TaskItem
            key={tarefa.id}
            id={tarefa.id}
            titulo={tarefa.titulo}
            concluida={tarefa.concluida}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </section>
  );
}

export default TaskList;
