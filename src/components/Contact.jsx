export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
  }

  return (
    <section id="contato">
      <h2>Contato</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu email" required />
        <textarea placeholder="Sua mensagem"></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}