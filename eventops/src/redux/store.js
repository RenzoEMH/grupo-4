import { configureStore } from '@reduxjs/toolkit';
import eventosReducer from '../redux/features/eventsSlice';

export default configureStore({
  reducer: {
    eventos: eventosReducer,
  },
});
