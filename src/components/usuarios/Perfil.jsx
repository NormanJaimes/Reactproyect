import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export default function Perfil() {
  const usuario = useContext(UserContext);
  return <div>Perfil {usuario.name}</div>;
}
