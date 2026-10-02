export default function CourseSummary({ disciplinas }) {
  const total = disciplinas.length;
  const concluidas = disciplinas.filter(d => d.concluida).length;
  const pendentes = total - concluidas;

  return (
    <div className="course-summary">
      <h2>Resumo</h2>
      <p>Total de disciplinas: {total}</p>
      <p>Concluídas: {concluidas}</p>
      <p>Pendentes: {pendentes}</p>
      
      <div className="status-message">
        {pendentes > 0 ? (
          <p className="message-pendente">Você ainda possui disciplinas para estudar.</p>
        ) : total > 0 ? (
          <p className="message-concluida">Parabéns! Todas as disciplinas foram concluídas!</p>
        ) : null}
      </div>
    </div>
  );
}
