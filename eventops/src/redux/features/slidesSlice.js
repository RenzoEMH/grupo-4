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
  },
});

export const { addNewSlide, saveEditSlide } = slidesSlice.actions;

// selectors
export const selectSlides = (state) => state.slides.slides;

export default slidesSlice.reducer;
