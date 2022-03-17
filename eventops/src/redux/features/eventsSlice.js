import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createEvent, getAllEvents, updateEvent } from '../../api/events';
import getLowestPrice from '../../utils/getLowestPrice';
import {
  nextEditPage,
  nextPage,
  resetAllAtributes,
  resetEditAllAtributes,
  selectEditedSingleEvent,
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
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateEventAsync = createAsyncThunk(
  'events/update',
  async (ticketCategories, { dispatch, getState, rejectWithValue }) => {
    const currentEditedSingleEvent = selectEditedSingleEvent(getState());
    const lowestPrice = getLowestPrice(ticketCategories);
    const completeDates = currentEditedSingleEvent.dates.map((date) => {
      return { ...date, ticketCategories: [...ticketCategories] };
    });
    const editedSingleEvent = {
      ...currentEditedSingleEvent,
      dates: [...completeDates],
      lowestPrice,
    };

    delete editedSingleEvent._id;
    editedSingleEvent.dates.forEach((date) => {
      delete date._id;
      date.ticketCategories.forEach((category) => {
        delete category._id;
      });
    });
    try {
      const response = await updateEvent({
        id: currentEditedSingleEvent._id,
        ...editedSingleEvent,
      });
      dispatch(resetEditAllAtributes());
      dispatch(nextEditPage());
      return response.data;
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
      })
      .addCase(updateEventAsync.fulfilled, (state, { payload }) => {
        state.edited = payload;
      })
      .addCase(updateEventAsync.rejected, (state, { payload }) => {
        state.editError = payload;
      });
  },
});

export const { setFilteredEvents } = eventsSlice.actions;

export const selectEvents = (state) => state.eventos.eventos;

export default eventsSlice.reducer;
