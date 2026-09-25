import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tarefas, onToggle, onDelete }) {
  if (tarefas.length === 0) {
    return (
      <section className="task-list-section">
        <div className="section-header-tag">
          <span className="tag-number">03</span>
          <h2 className="section-heading">Lista de Tarefas</h2>
        </div>
        <div className="empty-state">
          <div className="empty-state-geom">
            <span className="empty-shape-circle"></span>
            <span className="empty-shape-line"></span>
          </div>
          <h3 className="empty-title">Nenhuma Tarefa Pendente</h3>
          <p className="empty-description">Sua lista de tarefas acadêmicas está vazia no momento.</p>
          <span className="empty-hint">Utilize o formulário ao lado para adicionar novas atividades.</span>
        </div>
      </section>
    );
  }

  return (
    <section className="task-list-section">
      <div className="section-header-tag">
        <span className="tag-number">03</span>
        <h2 className="section-heading">Lista de Tarefas</h2>
        <span className="task-count-tag">
          {tarefas.length} {tarefas.length === 1 ? 'item' : 'itens'}
        </span>
      </div>
      <ul className="task-list">
        {tarefas.map((tarefa, index) => (
          <TaskItem
            key={tarefa.id}
            id={tarefa.id}
            index={index + 1}
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
