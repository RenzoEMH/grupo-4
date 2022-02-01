import { configureStore } from '@reduxjs/toolkit';
import eventosReducer from '../redux/features/eventsSlice';
import filtrosReducer from '../redux/features/filtersSlice';

export default configureStore({
  reducer: {
    eventos: eventosReducer,
    filtros: filtrosReducer,
  },
});
