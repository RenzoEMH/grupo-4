import { configureStore } from '@reduxjs/toolkit';
import eventosReducer from '../redux/features/eventsSlice';
import shopCartReducer from '../redux/features/cartSlice';
import eventDetailReducer from '../redux/features/eventDetailSlice';

export default configureStore({
  reducer: {
    eventos: eventosReducer,
    shopCart: shopCartReducer,
    eventDetail: eventDetailReducer,
  },
});
