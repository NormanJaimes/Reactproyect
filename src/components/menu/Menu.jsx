import { useContext } from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

export default function Menu() {
  const navigation = useNavigate();
  const usuario = useContext(UserContext);
  return (
    <nav className="main-menu">
      <ul>
        <li>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/criptomonedas">Criptomonedas</NavLink>
          <NavLink to="/perfil">Perfil {usuario.name}</NavLink>
          <a
            onClick={() => {
              localStorage.removeItem('tokenEDmarket');
              navigation('/login');
            }}
          >
            Cerrar Sesión
          </a>
        </li>
      </ul>
    </nav>
  );
}
