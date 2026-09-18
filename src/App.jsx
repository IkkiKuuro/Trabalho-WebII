import React, { useState } from 'react';
import Header from './components/Header';
import TaskSummary from './components/TaskSummary';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import './App.css';

function App() {
  // Requisito 1: Estado inicial com no mínimo 4 tarefas
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: "Estudar React e Hooks (useState)", concluida: false },
    { id: 2, titulo: "Fazer atividade avaliativa N1 de Web II", concluida: false },
    { id: 3, titulo: "Estudar conceitos de JavaScript ES6", concluida: true },
    { id: 4, titulo: "Revisar estrutura de componentes e Props", concluida: false }
  ]);

  // Requisito 3: Alteração de estado utilizando Previous State (prevTarefas => ...)
  const handleToggleTask = (id) => {
    setTarefas((prevTarefas) =>
      prevTarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  // Requisito 3 & 7: Excluir tarefa utilizando Previous State (prevTarefas => ...)
  const handleDeleteTask = (id) => {
    setTarefas((prevTarefas) =>
      prevTarefas.filter((tarefa) => tarefa.id !== id)
    );
  };

  // Adicionar nova tarefa utilizando Previous State
  const handleAddTask = (titulo) => {
    const novaTarefa = {
      id: Date.now(),
      titulo,
      concluida: false
    };
    setTarefas((prevTarefas) => [...prevTarefas, novaTarefa]);
  };

  // Requisito 6: Resumo calculado dinamicamente a partir do estado atual
  const total = tarefas.length;
  const concluidas = tarefas.filter((t) => t.concluida).length;
  const pendentes = tarefas.filter((t) => !t.concluida).length;

  return (
    <div className="app-container">
      <div className="app-card">
        <Header />
        
        <TaskSummary
          total={total}
          concluidas={concluidas}
          pendentes={pendentes}
        />

        <AddTaskForm onAddTask={handleAddTask} />

        <TaskList
          tarefas={tarefas}
          onToggle={handleToggleTask}
          onDelete={handleDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
