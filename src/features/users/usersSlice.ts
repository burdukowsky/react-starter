import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { fetchUser, fetchUsers } from './usersAPI';
import { RootState } from 'app/store';

interface UsersState {
  usersLoading: boolean;
  usersError: any;

  userLoading: boolean;
  userError: any;
}

const name = 'users';

export const fetchUsersAsync = createAsyncThunk(`${name}/fetchUsers`, fetchUsers);
export const fetchUserAsync = createAsyncThunk(`${name}/fetchUser`, (id: number) => fetchUser(id));

const adapter = createEntityAdapter<User>();
const initialState = adapter.getInitialState<UsersState>({
  usersLoading: false,
  usersError: null,

  userLoading: false,
  userError: null
});

const slice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        adapter.upsertMany(state, action.payload);
        state.usersError = null;
        state.usersLoading = false;
      })
      .addCase(fetchUsersAsync.pending, state => {
        state.usersError = null;
        state.usersLoading = true;
      })
      .addCase(fetchUsersAsync.rejected, (state, action) => {
        state.usersError = action.error;
        state.usersLoading = false;
      })

      .addCase(fetchUserAsync.fulfilled, (state, action) => {
        adapter.upsertOne(state, action.payload);
        state.userError = null;
        state.userLoading = false;
      })
      .addCase(fetchUserAsync.pending, state => {
        state.userError = null;
        state.userLoading = true;
      })
      .addCase(fetchUserAsync.rejected, (state, action) => {
        state.userError = action.error;
        state.userLoading = false;
      });
  }
});

export const {
  selectIds: selectUsersIds,
  selectEntities: selectUsers,
  selectAll: selectAllUsers,
  selectTotal: selectTotalUsers,
  selectById: selectUserById
} = adapter.getSelectors<RootState>(state => state.users);
export const selectUsersLoading = (state: RootState): boolean => state.users.usersLoading;
export const selectUsersError = (state: RootState): any => state.users.usersError;
export const selectUserLoading = (state: RootState): boolean => state.users.userLoading;
export const selectUserError = (state: RootState): any => state.users.userError;

export default slice.reducer;
