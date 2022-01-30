import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  const [datosGuardados, setDatosGuardados] = useState(() => {
    try {
      // obtener del localStorage
      const data = window.localStorage.getItem(key);
      // parsear json
      return data ? JSON.parse(data) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const actualizarLocalStorage = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(datosGuardados) : value;
      setDatosGuardados(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [datosGuardados, actualizarLocalStorage];
}

export default useLocalStorage;
