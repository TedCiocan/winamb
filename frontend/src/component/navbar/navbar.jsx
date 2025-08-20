import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext.jsx";

import "./navbar.css";
export default function NavBar() {
  const navigate = useNavigate();
  const { isAuthed, logout } = useAuth();

  return (
    <header className="nav">
      <Link to="/" className="brand">
        <span className="brand-logo">🎵</span>
        <span className="brand-text">MUSIC LAB</span>
      </Link>

      <nav className="links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/features">Features</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        {isAuthed && <NavLink to="/search">Search</NavLink>}
      </nav>

      <div className="actions">
        {!isAuthed ? (
          <>
            <button className="btn ghost" onClick={() => navigate("/login")}>Log in</button>
            <button className="btn primary" onClick={() => navigate("/signup")}>Sign up</button>
          </>
        ) : (
          <button
            className="btn gradient"
            onClick={() => { logout(); navigate("/login", { replace: true }); }}
          >
            Log out
          </button>
        )}
      </div>
    </header>
  );
}
