import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'usuarios',
  initialState: {
    usuarios: [],
  },
  reducers: {
    addNewUser: (state, { payload: newUser }) => {
      state.usuarios.push({ ...newUser });
    },
  },
});

export const { addNewUser } = usersSlice.actions;

export default usersSlice.reducer;
