import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1>Hola, Bienvenido</h1>
      <p>Conoce las 100 criptomonedas</p>
      <Link to="/criptomonedas">Ver Criptomonedas</Link>
    </>
  );
}
