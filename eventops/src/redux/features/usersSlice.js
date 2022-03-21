import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getAllUsers,
  createUser,
  updateUser,
  login,
  verifyEmail,
  generateLinkPass,
  setNewPassword,
} from '../../api/users';

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

export const verifyEmailAsync = createAsyncThunk(
  'users/verify',
  async (param) => {
    const response = await verifyEmail(param.id, param.token);
    return response;
  }
);

export const generateLinkPassAsync = createAsyncThunk(
  'users/generate_reset_pass',
  async (email) => {
    const response = await generateLinkPass(email);
    return response;
  }
);

export const setNewPasswordAsync = createAsyncThunk(
  'users/set_new_password',
  async (param) => {
    const response = await setNewPassword(param);
    return response;
  }
);

export const usersSlice = createSlice({
  name: 'usuarios',
  initialState,
  reducers: {
    setToken: (state, { payload: token }) => {
      state.token = token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsersAsync.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.users = payload;
      })
      .addCase(createUserAsync.fulfilled, (state, { payload }) => {
        state.created = payload;
      })
      .addCase(loginAsync.fulfilled, (state, { payload }) => {
        const { token } = payload.data;
        state.errorLogin = payload.data;
        state.loggued = true;
        state.token = token;
        localStorage.setItem('infoUser', JSON.stringify(payload));
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.updatedUser = false;
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.updatedUser = action.payload;
      })
      .addCase(verifyEmailAsync.fulfilled, (state, { payload }) => {
        state.verifiedUser = payload;
      });
  },
});

export const { setToken } = usersSlice.actions;

export const selectUsers = (state) => state.usuarios.users;
export const selectUserLoggued = (state) => state.usuarios.loggued;
export const userVerified = (state) => state.usuarios.verifiedUser;
export const errorLogin = (state) => state.usuarios.errorLogin;

export default usersSlice.reducer;
