import { useState, useEffect } from 'react';
import Header from './components/Header';
import CourseList from './components/CourseList';
import CourseSummary from './components/CourseSummary';
import './App.css';

function App() {
  const [disciplinas, setDisciplinas] = useState([
    { id: 1, nome: 'Programação Web II', horas: 80, concluida: false },
    { id: 2, nome: 'Banco de Dados', horas: 60, concluida: true },
    { id: 3, nome: 'Engenharia de Software', horas: 40, concluida: false },
    { id: 4, nome: 'Sistemas Operacionais', horas: 60, concluida: false }
  ]);

  // Efeito colateral com useEffect
  useEffect(() => {
    const pendentes = disciplinas.filter(d => !d.concluida).length;
    document.title = pendentes > 0 ? `Estudos: ${pendentes} pendentes` : 'Estudos em dia!';
  }, [disciplinas]);

  // Função para alternar o status (Previous State)
  const handleToggle = (id) => {
    setDisciplinas(prevDisciplinas => 
      prevDisciplinas.map(disciplina => 
        disciplina.id === id 
          ? { ...disciplina, concluida: !disciplina.concluida } 
          : disciplina
      )
    );
  };

  // Função para excluir (Previous State)
  const handleExcluir = (id) => {
    setDisciplinas(prevDisciplinas => 
      prevDisciplinas.filter(disciplina => disciplina.id !== id)
    );
  };

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <CourseSummary disciplinas={disciplinas} />
        <CourseList 
          disciplinas={disciplinas} 
          onToggle={handleToggle} 
          onExcluir={handleExcluir} 
        />
      </main>
    </div>
  );
}

export default App;
