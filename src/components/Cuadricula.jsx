import axios from 'axios';
import { useEffect, useState } from 'react';
import Criptomoneda from './cripto/Criptomoneda';

import './cripto/criptomonedas.css';
import Menu from './menu/Menu';
import usePetition from '../hooks/usePetition';

function Cuadricula() {
  // const [criptos, setCriptos] = useState([]);

  // const API_URL = import.meta.env.VITE_API_URL;

  const criptos = usePetition('assets');

  // useEffect(() => {
  //   // fetch(`${API_URL}assets`)
  //   axios
  //     .get(`${API_URL}assets`)
  //     // .then((res) => res.json())
  //     .then((data) => {
  //       // setCriptos(data.data);
  //       setCriptos(data.data.data);
  //       console.log(data.data.data);
  //     })
  //     .catch((err) => {
  //       console.error('La petición falló ' + err.message);
  //     });

  //   return () => {};
  // }, []);
  console.log(criptos);

  if (!criptos) return <h1>Cargando...</h1>;

  return (
    <>
      <h1>Lista Criptomonedas</h1>
      <ul className="list">
        {criptos.map(({ id, name, priceUsd }) => (
          <Criptomoneda
            key={id}
            id={id}
            name={name}
            priceUsd={priceUsd}
          ></Criptomoneda>
        ))}
      </ul>
    </>
  );
}

export default Cuadricula;
