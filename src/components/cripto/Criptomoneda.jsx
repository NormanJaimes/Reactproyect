import { Link } from 'react-router-dom';

export default function Criptomoneda({ id, name, priceUsd }) {
  return (
    <li className="cripto">
      <span className="name">Nombre: {name}</span>
      <span className="price">Precio: {priceUsd}</span>
      <Link to={`/criptomonedas/${id}`}>Ver Detalles</Link>
    </li>
  );
}
