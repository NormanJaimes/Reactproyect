import React from 'react';

export default function Criptomoneda({ name, priceUsd }) {
  return (
    <li className="cripto">
      <span className="name">Nombre: {name}</span>
      <span className="price">Precio: {priceUsd}</span>
    </li>
  );
}
