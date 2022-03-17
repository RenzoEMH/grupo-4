import mockDB from '../../utils/mockDB';

/**
 * to verify if all keys are set in localstorage, since localStorage.getItem(key) returns null if it does't find the key
 * and array method every() returns false if all array items don't pass defined condition. Also check if infoUser key is
 * set on localStorage
 * @param {*} keys from mockDB
 * @returns false if any of the keys from mockDB is not set, else true
 */
const verificarLocalStorage = (keys) => {
  return (
    keys.every((key) => localStorage.getItem(key) !== null) &&
    localStorage.getItem('infoUser')
  );
};

/**
 * creates a preload Object for redux preload based on localstorage values that have the same key name as the object key
 * names inside mockDB, also load value from localStorage key 'infoUser' to usuarios.token
 * @returns preloadedObject
 */
const createPreload = () => {
  const preloadObject = {};
  for (let [key] of Object.entries(mockDB)) {
    preloadObject[`${key}`] = JSON.parse(localStorage.getItem(key));
  }
  if (!preloadObject.usuarios) preloadObject.usuarios = {};
  preloadObject.usuarios.token = JSON.parse(
    localStorage.getItem('infoUser')
  )?.token;
  return preloadObject;
};

/**
 *
 * @returns Object to preload redux states
 */
const loadStateFromLocalStorage = () => {
  if (!verificarLocalStorage(Object.keys(mockDB))) {
    for (let [key, value] of Object.entries(mockDB)) {
      localStorage.setItem(key, JSON.stringify(value));
    }
    localStorage.setItem('infoUser', null);
  }
  return createPreload();
};

export default loadStateFromLocalStorage;
