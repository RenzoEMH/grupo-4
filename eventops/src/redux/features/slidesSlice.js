import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createSlide,
  getAllSlides,
  updateAllOrdersCreate,
  updateSlide,
  updateAllSlides,
  deleteSlide,
  updateAllOrdersDeleteOne,
} from '../../api/slides';

// async thunks
export const getAllSlidesAsync = createAsyncThunk('slides/getAll', async () => {
  const response = await getAllSlides();
  return response.data;
});

export const createSlideAsync = createAsyncThunk(
  'slides/create',
  async (slide, { getState, rejectWithValue }) => {
    const slides = selectSlides(getState());
    try {
      if (slide.order > slides.length) {
        const { status, data } = await createSlide(slide);
        if (status !== 201) throw new Error(data.error);
        return data;
      } else {
        const { status, data } = await updateAllOrdersCreate(slide);
        if (status !== 200) throw new Error(data.error);
        return data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateSlideAsync = createAsyncThunk(
  'slides/update',
  async (slide, { getState, rejectWithValue }) => {
    const slides = selectSlides(getState());
    const { order: prevOrder } = slides.find(
      (slideItem) => slideItem._id === slide._id
    );
    try {
      if (prevOrder === slide.order) {
        const { status, data } = await updateSlide({ id: slide._id, slide });
        if (status !== 200) throw new Error(data.error);
        return data;
      } else {
        const { status, data } = await updateAllSlides({
          id: slide._id,
          slide,
        });
        if (status !== 200) throw new Error(data.error);
        return data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteSlideAsync = createAsyncThunk(
  'slides/delete',
  async (id, { getState, rejectWithValue }) => {
    const slides = selectSlides(getState());
    const { order: slideToDeleteOrder } = slides.find(
      (slideItem) => slideItem._id === id
    );

    try {
      if (slideToDeleteOrder === slides.length) {
        const { status, data } = await deleteSlide(id);
        if (status !== 200) throw new Error(data.error);
        return data;
      } else {
        const { status, data } = await updateAllOrdersDeleteOne(id);
        if (status !== 200) throw new Error(data.error);
        return data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const slidesSlice = createSlice({
  name: 'slides',
  initialState: {
    slides: [],
    slideToEdit: {},
  },
  reducers: {
    loadSlideToEdit: (state, { payload: slideToEdit }) => {
      state.slideToEdit = slideToEdit;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllSlidesAsync.pending, (state) => {
        state.isLoading = true;
        state.slides = [];
      })
      .addCase(getAllSlidesAsync.fulfilled, (state, { payload: slides }) => {
        state.isLoading = false;
        state.slides = slides;
      })
      .addCase(createSlideAsync.pending, (state) => {
        state.isCreating = true;
        state.createdSlide = null;
        state.createSlideError = null;
      })
      .addCase(createSlideAsync.fulfilled, (state, { payload: newSlide }) => {
        state.isCreating = false;
        state.createSlide = newSlide;
      })
      .addCase(createSlideAsync.rejected, (state, { payload: message }) => {
        state.isCreating = false;
        state.createSlideError = message;
      })
      .addCase(updateSlideAsync.pending, (state) => {
        state.isUpdating = true;
        state.updateResponse = null;
        state.updateErrorResponse = null;
      })
      .addCase(updateSlideAsync.fulfilled, (state, { payload: response }) => {
        state.isUpdating = false;
        state.updateResponse = response;
      })
      .addCase(updateSlideAsync.rejected, (state, { payload: message }) => {
        state.isUpdating = false;
        state.updateErrorResponse = message;
      })
      .addCase(deleteSlideAsync.pending, (state) => {
        state.isDeleting = true;
        state.deleteResponse = null;
        state.deleteErrorResponse = null;
      })
      .addCase(deleteSlideAsync.fulfilled, (state, { payload: response }) => {
        state.isDeleting = false;
        state.deleteResponse = response;
      })
      .addCase(deleteSlideAsync.rejected, (state, { payload: message }) => {
        state.isDeleting = false;
        state.deleteErrorResponse = message;
      });
  },
});

export const { addNewSlide, saveEditSlide, loadSlideToEdit, removeSlide } =
  slidesSlice.actions;

// selectors
export const selectSlides = (state) => state.slides.slides;
export const selectIsLoading = (state) => state.slides.isLoading;
export const selectIsCreating = (state) => state.slides.isCreating;
export const selectIsUpdating = (state) => state.slides.isUpdating;
export const selectIsDeleting = (state) => state.slides.isDeleting;
export const selectSlideToEdit = (state) => state.slides.slideToEdit;
export const selectCreatedSlide = (state) => state.slides.createSlide;
export const selectUpdateResponse = (state) => state.slides.updateResponse;
export const selectDeleteResponse = (state) => state.slides.deleteResponse;

export default slidesSlice.reducer;
