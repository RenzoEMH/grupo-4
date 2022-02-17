import { createSlice } from '@reduxjs/toolkit';
import emptySingleUser from '../../utils/emptySingleUser';

export const singleUserSlice = createSlice({
  name: 'singleUser',
  initialState: {
    singleUser: { ...emptySingleUser },
  },
  reducers: {
    setAtribute: (state, { payload: atribute }) => {
      state.singleUser[`${atribute.key}`] = atribute.value;
    },
    resetAllAtributes: (state) => {
      state.singleUser = { ...emptySingleUser };
    },
  },
});

export const { setAtribute, resetAllAtributes } = singleUserSlice.actions;

export default singleUserSlice.reducer;
