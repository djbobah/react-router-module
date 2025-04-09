import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Rick and Morty</div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/characters">Персонажи</Link>
        </li>
        <li>
          <Link to="/locations">Локации</Link>
        </li>
        <li>
          <Link to="/episodes">Эпизоды</Link>
        </li>
      </ul>
    </nav>
  );
};
