import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { fetchUser, fetchUsers } from './usersAPI';
import { RootState } from 'app/store';

const name = 'users';

export const fetchUsersAsync = createAsyncThunk(
  `${name}/fetchUsers`,
  fetchUsers
);

export const fetchUserAsync = createAsyncThunk(
  `${name}/fetchUser`,
  (id: number) => fetchUser(id)
);

const adapter = createEntityAdapter<User>();
const initialState = adapter.getInitialState();

const slice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsersAsync.fulfilled, adapter.upsertMany)
      .addCase(fetchUserAsync.fulfilled, adapter.upsertOne);
  }
});

export const usersSelectors = adapter.getSelectors<RootState>(state => state[name]);

export default slice.reducer;
