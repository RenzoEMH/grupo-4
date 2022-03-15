import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createEvent, getAllEvents } from '../../api/events';
import getLowestPrice from '../../utils/getLowestPrice';
import {
  nextPage,
  resetAllAtributes,
  selectSingleEvent,
} from './singleEventSlice';

const initialState = {
  eventos: [],
  filteredEvents: [],
};

export const getAllEventsAsync = createAsyncThunk('events/getAll', async () => {
  const response = await getAllEvents();
  return response.data instanceof Array ? response.data : [];
});

export const createEventAsync = createAsyncThunk(
  'events/create',
  async (ticketCategories, { dispatch, getState, rejectWithValue }) => {
    const currentSingleEvent = selectSingleEvent(getState());
    const lowestPrice = getLowestPrice(ticketCategories);
    const completeDates = currentSingleEvent.dates.map((date) => {
      return { ...date, ticketCategories: [...ticketCategories] };
    });
    const newSingleEvent = {
      ...currentSingleEvent,
      dates: [...completeDates],
      lowestPrice,
    };
    delete newSingleEvent._id;
    newSingleEvent.dates.forEach((date) => {
      delete date._id;
      date.ticketCategories.forEach((category) => {
        delete category._id;
      });
    });

    try {
      const response = await createEvent(newSingleEvent);
      dispatch(resetAllAtributes());
      dispatch(nextPage());
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const eventsSlice = createSlice({
  name: 'eventos',
  initialState,
  reducers: {
    setFilteredEvents: (state, { payload: events }) => {
      state.filteredEvents = [...events];
    },
    saveEditEvent: (state, { payload: editedEvent }) => {
      const index = state.eventos.findIndex(
        (event) => event._id === editedEvent._id
      );
      state.eventos[index] = { ...editedEvent };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllEventsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllEventsAsync.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.eventos = payload;
      })
      .addCase(createEventAsync.fulfilled, (state, { payload }) => {
        state.created = payload;
      })
      .addCase(createEventAsync.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const { setFilteredEvents, addNewEvent, saveEditEvent } =
  eventsSlice.actions;

export const selectEvents = (state) => state.eventos.eventos;

export default eventsSlice.reducer;
