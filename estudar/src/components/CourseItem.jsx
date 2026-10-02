export default function CourseItem({ disciplina, onToggle, onExcluir }) {
  return (
    <div className={`course-item ${disciplina.concluida ? 'concluida' : ''}`}>
      <div className="course-info">
        <h3>{disciplina.nome}</h3>
        <p>{disciplina.horas} horas</p>
      </div>
      <div className="course-actions">
        <button onClick={() => onToggle(disciplina.id)}>
          {disciplina.concluida ? 'Desmarcar' : 'Concluir'}
        </button>
        <button className="btn-excluir" onClick={() => onExcluir(disciplina.id)}>
          Excluir
        </button>
      </div>
    </div>
  );
}
