import { configureStore } from '@reduxjs/toolkit';
import eventosReducer from '../redux/features/eventsSlice';
import ticketsReducer from '../redux/features/ticketsSlice';
import singleEventReducer from '../redux/features/singleEventSlice';
import shopCartReducer from '../redux/features/cartSlice';
import eventDetailReducer from '../redux/features/eventDetailSlice';
import filtrosReducer from '../redux/features/filtersSlice';
import loadStateFromLocalStorage from './preloadState/loadStateFromLocalStorage';
import localStorageMiddleware from './middleware/localStorageMiddleware';

export default configureStore({
  reducer: {
    eventos: eventosReducer,
    tickets: ticketsReducer,
    singleEvent: singleEventReducer,
    shopCart: shopCartReducer,
    eventDetail: eventDetailReducer,
    filtros: filtrosReducer,
  },
  preloadedState: loadStateFromLocalStorage(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
