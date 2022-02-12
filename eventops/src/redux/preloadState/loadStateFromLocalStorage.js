import mockDB from '../../utils/mockDB';

const verificarLocalStorage = (keys) => {
  return keys.every((key) => localStorage.getItem(key) !== null);
};

const createPreload = () => {
  const preloadObject = {};
  for (let [key, value] of Object.entries(mockDB)) {
    preloadObject[`${key}`] = value;
  }
  return preloadObject;
};

/**
 *
 * @returns Objeto para los estados precargados de redux
 */
const loadStateFromLocalStorage = () => {
  if (!verificarLocalStorage(Object.keys(mockDB))) {
    for (let [key, value] of Object.entries(mockDB)) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
  return createPreload();
};

export default loadStateFromLocalStorage;
