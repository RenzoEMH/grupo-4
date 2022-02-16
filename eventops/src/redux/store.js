import { configureStore } from '@reduxjs/toolkit';
import eventosReducer from '../redux/features/eventsSlice';
import ticketsReducer from '../redux/features/ticketsSlice';
import singleEventReducer from '../redux/features/singleEventSlice';
import shopCartReducer from '../redux/features/cartSlice';
import filtrosReducer from '../redux/features/filtersSlice';
import loadStateFromLocalStorage from './preloadState/loadStateFromLocalStorage';
import localStorageMiddleware from './middleware/localStorageMiddleware';
import singleUserReducer from '../redux/features/singleUserSlice';
import usuariosReducer from '../redux/features/usersSlice';

export default configureStore({
  reducer: {
    eventos: eventosReducer,
    tickets: ticketsReducer,
    singleEvent: singleEventReducer,
    shopCart: shopCartReducer,
    filtros: filtrosReducer,
    usuarios: usuariosReducer,
    singleUser: singleUserReducer,
  },
  preloadedState: loadStateFromLocalStorage(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
