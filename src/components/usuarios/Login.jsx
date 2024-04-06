import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

export default function Login() {
  const navigation = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState();

  const submit = (e) => {
    setCargando(true);
    e.preventDefault();
    setError(null);
    axios
      .post('https://reqres.in/api/login', user)
      .then((data) => {
        setCargando(false);
        localStorage.setItem('tokenEDmarket', data.data.token);
        navigation('/');
      })
      .catch((e) => {
        setCargando(false);
        console.error(e);
        setError(e.response.data.error);
      });
  };

  if (localStorage.getItem('tokenEDmarket')) {
    return <Navigate to={'/'}></Navigate>;
  }

  return (
    <div className="login-container">
      <h1>Iniciar sesión</h1>
      <form onSubmit={submit}>
        <div className="field">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            required
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value,
              });
            }}
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div className="field">
          <label htmlFor="password">Contrasena</label>
          <input
            required
            type="password"
            id="password"
            name="password"
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value,
              });
            }}
          />
        </div>
        <div className="submit">
          <input type="submit" value={cargando ? 'cargando...' : 'Ingresar'} />
        </div>
      </form>
      <span>{error && JSON.stringify(error)}</span>
    </div>
  );
}
