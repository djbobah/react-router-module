import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export const NavBar = () => {
  const auth = useAuth();
  const handleSignOut = () => {
    auth && auth.signOut();
  };
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
        {auth && auth.user && (
          <li>
            <div className="exit-button" onClick={handleSignOut}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M15 3.001a1 1 0 1 1 0 2H6v13a1 1 0 0 0 1 1h8a1 1 0 1 1 0 2H7a3 3 0 0 1-3-3v-14a1 1 0 0 1 1-1h10Zm1.707 5.293A1 1 0 0 0 15 9v2H9a1 1 0 1 0 0 2h6v2a1 1 0 0 0 1.707.707l3-3a1 1 0 0 0 0-1.414l-3-3Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
};
