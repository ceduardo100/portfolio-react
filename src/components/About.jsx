export default function About() {
  return (
    <section id="sobre">
      <h2>Sobre Mim</h2>

      <img src="/minha-foto.png" alt="Minha foto" />

      <p>
        Meu nome é Carlos Eduardo, sou estudante de Sistemas para Internet,
        com conhecimentos em HTML, CSS e JavaScript.
      </p>

      {/* 🔥 AQUI ESTÃO OS ÍCONES */}
      <div className="social">
        <a href="https://github.com/ceduardo100" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>

        <a href="https://linkedin.com/in/ceduardo100" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>

        <a href="https://wa.me/5589999221131" target="_blank" rel="noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </section>
  );
}