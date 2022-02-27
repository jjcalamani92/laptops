import { NavLink } from "react-router-dom";

export const HeaderNavbar_5 = () => {
  return (
    <nav className="navbar">
      <NavLink to="/productos">productos</NavLink>
      <NavLink to="/servicios">servicios</NavLink>
      <NavLink to="/blogs">blogs</NavLink>
      <NavLink to="/consejos">consejos</NavLink>
      <NavLink to="/programas">programas</NavLink>
      <NavLink to="/contacto">contacto</NavLink>
    </nav>
  );
};
