import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import parseJwt from './ParseJwt';

const HideIfLogged = ({ children }) => {
  const token = useSelector((state) => state.usuarios.token);
  const sesion = parseJwt(token);
  const sesionExist = sesion ? true : false;

  //for the routes we don't want to show when logged in
  if (sesionExist) return <Navigate to="/not-found" />;

  return children;
};

export default HideIfLogged;
