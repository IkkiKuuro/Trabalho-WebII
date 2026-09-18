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
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Digite o título da nova tarefa acadêmica..."
        value={novoTitulo}
        onChange={(e) => setNovoTitulo(e.target.value)}
      />
      <button type="submit" className="btn btn-add">
        + Adicionar Tarefa
      </button>
    </form>
  );
}

export default AddTaskForm;
