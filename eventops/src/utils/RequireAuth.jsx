import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { SesionContext } from './SesionContext';

const RequireAuth = ({ children, type }) => {
  const { sesion } = useContext(SesionContext);

  //if user type doesn't match, go to not found
  if (sesion?.type !== type) return <Navigate to="/not-found" />;

  return children;
};

export default RequireAuth;
