import CourseItem from './CourseItem';

export default function CourseList({ disciplinas, onToggle, onExcluir }) {
  if (disciplinas.length === 0) {
    return <p className="empty-message">Nenhuma disciplina cadastrada.</p>;
  }

  return (
    <div className="course-list">
      {disciplinas.map((disciplina) => (
        <CourseItem 
          key={disciplina.id} 
          disciplina={disciplina} 
          onToggle={onToggle} 
          onExcluir={onExcluir} 
        />
      ))}
    </div>
  );
}
