import { createSlice } from '@reduxjs/toolkit';

export const slidesSlice = createSlice({
  name: 'slides',
  initialState: {
    slides: [],
  },
  reducers: {
    addNewSlide: (state, { payload: newSlide }) => {
      state.slides.push(newSlide);
    },
    saveEditSlide: (state, { payload: editedSlide }) => {
      const index = state.slides.findIndex(
        (slide) => slide.id === editedSlide.id
      );
      state.slides[index] = editedSlide;
    },
    removeSlide: (state, { payload: id }) => {
      state.slides = [...state.slides].filter((item) => {
        return item.id !== id;
      });
    },
  },
});

export const { addNewSlide, saveEditSlide, removeSlide } = slidesSlice.actions;

// selectors
export const selectSlides = (state) => state.slides.slides;

// thunks
export const saveNewSlide = (slideToSave) => (dispatch, getState) => {
  const slidesNow = selectSlides(getState());
  const orderExist = slidesNow.find(
    (slide) => slide.order === slideToSave.order
  );

  if (orderExist) {
    [...slidesNow]
      .sort((a, b) => (a.order > b.order ? 1 : -1))
      .forEach((slide) => {
        slide.order >= slideToSave.order &&
          dispatch(saveEditSlide({ ...slide, order: slide.order + 1 }));
      });
    dispatch(addNewSlide(slideToSave));
  }
  !orderExist && dispatch(addNewSlide(slideToSave));
};

export default slidesSlice.reducer;
