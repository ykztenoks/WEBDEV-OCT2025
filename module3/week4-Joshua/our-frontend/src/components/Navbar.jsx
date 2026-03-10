import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { handleLogout, isLoggedIn } = useContext(AuthContext);

  return (
    <nav>
      <img alt="logo" />
      <h1>Our super cool frontend</h1>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <section>
          <Link to="/">
            <button>Sign Up</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </section>
      )}
    </nav>
  );
};
