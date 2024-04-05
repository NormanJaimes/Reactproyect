import axios from 'axios';
import { useEffect, useState } from 'react';
import Criptomoneda from './Criptomoneda';

import './criptomonedas.css';

function App() {
  const [criptos, setCriptos] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    // fetch(`${API_URL}assets`)
    axios
      .get(`${API_URL}assets`)
      // .then((res) => res.json())
      .then((data) => {
        // setCriptos(data.data);
        setCriptos(data.data.data);
        console.log(data.data.data);
      })
      .catch((err) => {
        console.error('La petición falló ' + err.message);
      });

    return () => {};
  }, []);

  if (!criptos) return <h1>Cargando...</h1>;

  return (
    <>
      <h1>Lista Criptomonedas</h1>
      <ul className="list">
        {criptos.map(({ id, name, priceUsd }) => (
          <Criptomoneda key={id} name={name} priceUsd={priceUsd}></Criptomoneda>
        ))}
      </ul>
    </>
  );
}

export default App;
