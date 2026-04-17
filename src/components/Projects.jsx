export default function Projects() {
  const projetos = [
    {
      id: 1,
      titulo: "Meu Portfólio",
      descricao: "Portfólio HTML, CSS e JS da atividade 1",
      link: "https://github.com/ceduardo100/meu-portfolio"
    }
  ];

  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>

      <div id="projetos-container">
        {projetos.map((p) => (
          <article key={p.id}>
            <h3>{p.titulo}</h3>
            <p>{p.descricao}</p>
            <a href={p.link} target="_blank">Ver no GitHub</a>
          </article>
        ))}
      </div>
    </section>
  );
}