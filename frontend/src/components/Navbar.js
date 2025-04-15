// src/components/Navbar.js
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#e0e0e0" }}>
      <Link to="/">Inicio</Link> |{" "}
      <Link to="/login">Login</Link> |{" "}
      <Link to="/register">Registro</Link> |{" "}
      <Link to="/generador">Generador</Link> |{" "}
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}

export default Navbar;

