import axios from 'axios';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigation = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState();

  const submit = (e) => {
    e.preventDefault();
    setCargando(true);
    setError(null);
    axios
      .post(`https://reqres.in/api/login`, user)
      .then((data) => {
        setCargando(false);
        localStorage.setItem('tokenCripto NNJ', data.data.token);
        navigation('/');
      })
      .catch((e) => {
        setCargando(false);
        console.table(e);
        setError(e.response.data.error);
      });
  };

  if (localStorage.getItem('tokenCripto NNJ')) return <Navigate to="/" />;

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
            name="email"
          />
        </div>
        <div className="field">
          <label htmlFor="password">Contraseña</label>
          <input
            required
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value,
              });
            }}
            type="password"
            name="password"
          />
        </div>
        <div className="submit">
          <input
            type="submit"
            value={cargando ? 'cargando...' : 'Ingresar'}
            className="link"
          />
        </div>
      </form>
      {error && <span className="error">Error: {error}</span>}
      <p className="verdadero">Verdaderos:</p>
      <p className="verdadero">Email:eve.holt@reqres.in</p>
      <p className="verdadero">Password:cityslicka</p>
    </div>
  );
};

export default Login;
