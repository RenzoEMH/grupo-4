import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllUsers, createUser } from '../../api/users';

const initialState = {};

export const getAllUsersAsync = createAsyncThunk('users/getAll', async () => {
  const response = await getAllUsers();
  return response.data;
});

export const createUserAsync = createAsyncThunk(
  'users/create',
  async (user) => {
    const response = await createUser(user);
    return response;
  }
);

export const usersSlice = createSlice({
  name: 'usuarios',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsersAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.created = action.payload;
      });
  },
});

export const { addNewUser } = usersSlice.actions;
export const selectUsers = (state) => state.users.users;

export default usersSlice.reducer;
