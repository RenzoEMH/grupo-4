import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import parseJwt from './ParseJwt';

const RequireAuth = ({ children, type }) => {
  const token = useSelector((state) => state.usuarios.token);
  const sesion = parseJwt(token);

  //if user type doesn't match, go to not found
  if (sesion?.type !== type) return <Navigate to="/not-found" />;

  return children;
};

export default RequireAuth;
