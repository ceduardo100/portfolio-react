import { useState } from "react";

export default function Header() {
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    setDark(!dark);
  }

  return (
    <header>
      <nav>
        <h1>Carlos Eduardo</h1>

        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>

          <li>
            <button className="btn-theme" onClick={toggleTheme}>
              {dark ? (
                <i className="fas fa-sun"></i>
              ) : (
                <i className="fas fa-moon"></i>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}