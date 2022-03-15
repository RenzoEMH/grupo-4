import { createSlice } from '@reduxjs/toolkit';
import emptySingleEvent from '../../utils/emptySingleEvent';
import { saveEditEvent } from '../../redux/features/eventsSlice';
import getLowestPrice from '../../utils/getLowestPrice';

export const singleEventSlice = createSlice({
  name: 'singleEvent',
  initialState: {
    singleEvent: { ...emptySingleEvent },
    editSingleEvent: {},
    page: 1,
    editPage: 1,
  },
  reducers: {
    setAtribute: (state, { payload: atribute }) => {
      state.singleEvent[`${atribute.key}`] = atribute.value;
    },
    resetAllAtributes: (state) => {
      state.singleEvent = { ...emptySingleEvent };
    },
    nextPage: (state) => {
      state.page++;
    },
    prevPage: (state) => {
      state.page--;
    },
    resetPage: (state) => {
      state.page = 1;
    },
    // EDIT
    setEditAtribute: (state, { payload: atribute }) => {
      state.editSingleEvent[`${atribute.key}`] = atribute.value;
    },
    setAllEditAtributes: (state, { payload: singleEvent }) => {
      state.editSingleEvent = { ...singleEvent };
    },
    resetEditAllAtributes: (state) => {
      state.editSingleEvent = { ...emptySingleEvent };
    },
    nextEditPage: (state) => {
      state.editPage++;
    },
    prevEditPage: (state) => {
      state.editPage--;
    },
    resetEditPage: (state) => {
      state.editPage = 1;
    },
  },
});

export const {
  setAtribute,
  resetAllAtributes,
  nextPage,
  prevPage,
  resetPage,
  setEditAtribute,
  setAllEditAtributes,
  resetEditAllAtributes,
  nextEditPage,
  prevEditPage,
  resetEditPage,
} = singleEventSlice.actions;

export const selectSingleEvent = (state) => state.singleEvent.singleEvent;
export const selectPage = (state) => state.singleEvent.page;
export const selectEditedSingleEvent = (state) =>
  state.singleEvent.editSingleEvent;

// export const addNewSingleEvent = (ticketCategories) => (dispatch, getState) => {
//   const currentSingleEvent = selectSingleEvent(getState());
//   const lowestPrice = getLowestPrice(ticketCategories);
//   const completeDates = currentSingleEvent.dates.map((date) => {
//     return { ...date, ticketCategories: [...ticketCategories] };
//   });
//   const newSingleEvent = {
//     ...currentSingleEvent,
//     dates: [...completeDates],
//     lowestPrice,
//   };
//   delete newSingleEvent._id;
//   newSingleEvent.dates.forEach((date) => {
//     delete date._id;
//     date.ticketCategories.forEach((category) => {
//       delete category._id;
//     });
//   });
//   dispatch(addNewEvent(newSingleEvent));
//   dispatch(resetAllAtributes());
//   dispatch(nextPage());
// };

export const saveEditedSingleEvent =
  (ticketCategories) => (dispatch, getState) => {
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
    dispatch(saveEditEvent(editedSingleEvent));
    dispatch(resetEditAllAtributes());
    dispatch(nextEditPage());
  };

export default singleEventSlice.reducer;
