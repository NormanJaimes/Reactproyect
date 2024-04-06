import { Outlet } from 'react-router-dom';
import Menu from './menu/Menu';

import { Navigate } from 'react-router-dom';

export default function App() {
  if (!localStorage.getItem('tokenEDmarket')) {
    return <Navigate to={'/login'}></Navigate>;
  }
  return (
    <>
      <Menu></Menu>
      <Outlet></Outlet>
    </>
  );
}
