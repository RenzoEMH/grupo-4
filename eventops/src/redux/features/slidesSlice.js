import { createSlice } from '@reduxjs/toolkit';

export const slidesSlice = createSlice({
  name: 'slides',
  initialState: {
    slides: [],
    slideToEdit: {},
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
    loadSlideToEdit: (state, { payload: slideToEdit }) => {
      state.slideToEdit = slideToEdit;
    },
    removeSlide: (state, { payload: id }) => {
      state.slides = [...state.slides].filter((item) => {
        return item.id !== id;
      });
    },
  },
});

export const { addNewSlide, saveEditSlide, loadSlideToEdit, removeSlide } =
  slidesSlice.actions;

// selectors
export const selectSlides = (state) => state.slides.slides;
export const selectSlideToEdit = (state) => state.slides.slideToEdit;

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

export const saveEditedSlide = (slideToSave) => (dispatch, getState) => {
  const slidesNow = selectSlides(getState());
  const { order: prevSlideOrder } = slidesNow.find(
    (slide) => slide.id === slideToSave.id
  );
  let order = 1;
  // two different cases
  // 1st case: from high order to low order
  prevSlideOrder > slideToSave.order &&
    [...slidesNow]
      .sort((a, b) => (a.order > b.order ? 1 : -1))
      .filter((slide) => slide.id !== slideToSave.id)
      .forEach((slide) => {
        if (slide.order >= slideToSave.order) {
          dispatch(saveEditSlide({ ...slide, order: slide.order + 1 }));
        }
      });
  // 2nd case: from low order to high order
  prevSlideOrder < slideToSave.order &&
    [...slidesNow]
      .sort((a, b) => (a.order > b.order ? 1 : -1))
      .filter((slide) => slide.id !== slideToSave.id)
      .forEach((slide) => {
        if (slide.order <= slideToSave.order) {
          dispatch(saveEditSlide({ ...slide, order: order }));
        }
        order++;
      });

  dispatch(saveEditSlide(slideToSave));
};

export const manageDeleteSlide = (id) => (dispatch, getState) => {
  const slidesNow = selectSlides(getState());
  const { order: SlideToDeleteOrder } = slidesNow.find(
    (slide) => slide.id === id
  );
  let order = SlideToDeleteOrder;
  [...slidesNow]
    .sort((a, b) => (a.order > b.order ? 1 : -1))
    .filter((slide) => slide.id !== id)
    .forEach((slide) => {
      if (slide.order > SlideToDeleteOrder) {
        dispatch(saveEditSlide({ ...slide, order: order }));
        order++;
      }
    });

  dispatch(removeSlide(id));
};

export default slidesSlice.reducer;
