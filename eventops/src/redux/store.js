import { configureStore } from '@reduxjs/toolkit';
import eventosReducer from '../redux/features/eventsSlice';
import shopCartReducer from '../redux/features/cartSlice';
import eventDetailReducer from '../redux/features/eventDetailSlice';
import filtrosReducer from '../redux/features/filtersSlice';
import mockDB from '../utils/mockDB';

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

// const localStorageMiddleware = (store) => {
//   return (next) => (action) => {
//     const result = next(action);
//     if (action.type.includes('candidatos/')) {
//       localStorage.setItem(
//         applicationState,
//         JSON.stringify({ candidatos: store.getState().candidatos })
//       );
//     }
//     return result;
//   };
// };

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

export default configureStore({
  reducer: {
    eventos: eventosReducer,
    shopCart: shopCartReducer,
    eventDetail: eventDetailReducer,
    filtros: filtrosReducer,
  },
  preloadedState: loadStateFromLocalStorage(),
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(localStorageMiddleware),
});
