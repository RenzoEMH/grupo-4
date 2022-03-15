import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllUsers, createUser, updateUser, login } from '../../api/users';

const initialState = { loggued: false };

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

export const updateUserAsync = createAsyncThunk(
  'users/update',
  async (user) => {
    const response = await updateUser(user);
    console.log(response);
    return response;
  }
);

export const loginAsync = createAsyncThunk('login', async (user) => {
  const response = await login(user);
  return response;
});

export const usersSlice = createSlice({
  name: 'usuarios',
  initialState,
  reducers: {
    setToken: (state, { payload: token }) => {
      state.token = token;
    },
    // disableUser: (state, action) => {
    //   state.idUser = action.payload;
    //   state.showModalDisableUser = true;
    // },
    // hideModalDisableUser: (state) => {
    //   state.showModalDisableUser = false;
    // },
  },
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
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        const { token } = action.payload;
        state.loggued = true;
        state.token = token;
        localStorage.setItem('infoUser', JSON.stringify(action.payload));
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.updatedUser = false;
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.updatedUser = action.payload;
      });
  },
});

export const {
  setToken,
  showInfoUser,
  hideModalDisableUser,
  hideModalInfoUser,
  disableUser,
} = usersSlice.actions;

export const selectUsers = (state) => state.usuarios.users;
export const selectUserLoggued = (state) => state.usuarios.loggued;
// export const selectShowModalDisableUser = (state) =>
//   state.usuarios.showModalDisableUser;
// export const selectIdUser = (state) => state.usuarios.idUser;

export default usersSlice.reducer;
