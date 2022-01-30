import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { SesionContext } from './SesionContext';

const HideIfLogged = ({ children }) => {
  const { sesion } = useContext(SesionContext);
  const sesionExist = sesion ? true : false;

  //for the routes we don't want to show when logged in
  if (sesionExist) return <Navigate to="/not-found" />;

  return children;
};

export default HideIfLogged;
