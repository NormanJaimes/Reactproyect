import ReactDOM from 'react-dom/client';
import Cuadricula from './components/Cuadricula.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pagina404 from './components/404.jsx';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import CriptoPage from './components/cripto/CriptoPage.jsx';
import Perfil from './components/usuarios/Perfil.jsx';
import { UserContextProvider } from './context/UserContext.jsx';
import Login from './components/usuarios/Login.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path="perfil" element={<Perfil />}></Route>
        </Route>
        <Route path="/criptomonedas" element={<App />}>
          <Route index element={<Cuadricula />}></Route>
          <Route path=":id" element={<CriptoPage />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Pagina404 />}></Route>
      </Routes>
    </BrowserRouter>
  </UserContextProvider>
);
