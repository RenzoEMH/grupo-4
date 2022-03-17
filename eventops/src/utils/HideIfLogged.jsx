import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import parseJwt from './ParseJwt';

const HideIfLogged = ({ children }) => {
  const token = useSelector((state) => state.usuarios.token);
  const sesion = parseJwt(token);

  //for the routes we don't want to show when logged in
  if (token && !!Object.keys(sesion).length) return <Navigate to="/" replace />;

  return children;
};

export default HideIfLogged;
