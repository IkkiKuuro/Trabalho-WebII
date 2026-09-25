import React, { useState } from 'react';

function AddTaskForm({ onAddTask }) {
  const [novoTitulo, setNovoTitulo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!novoTitulo.trim()) return;

    onAddTask(novoTitulo.trim());
    setNovoTitulo('');
  };

  return (
    <section className="add-task-container">
      <div className="section-header-tag">
        <span className="tag-number">01</span>
        <h2 className="section-heading">Criar Nova Tarefa</h2>
      </div>

      <form className="add-task-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="task-input"
            placeholder="Digite o título da nova tarefa acadêmica..."
            value={novoTitulo}
            onChange={(e) => setNovoTitulo(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-add">
          <span className="btn-icon">+</span>
          <span className="btn-label">Adicionar Tarefa</span>
        </button>
      </form>
    </section>
  );
}

export default AddTaskForm;
