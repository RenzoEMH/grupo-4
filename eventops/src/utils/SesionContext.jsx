import { createContext } from 'react';
import useLocalStorage from './useLocalStorage';

export const SesionContext = createContext();

export const SesionProvider = ({ children }) => {
  const [sesion, setSesion] = useLocalStorage('user');

  return (
    <SesionContext.Provider value={{ sesion, setSesion }}>
      {children}
    </SesionContext.Provider>
  );
};
