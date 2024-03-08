import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

const onGetMyths = async (_, thunkAPI) => {
  try {
    const url = `${API_BASE_URL}/.json`;   
    const response = await fetch(url);
    const data = await response.json();
    if (data.message) throw new Error(data.message);
    return thunkAPI.fulfillWithValue(data.mythsOrRealitySection);
  } catch (error) {
    console.error(error);
    const { message } = error;
    return thunkAPI.rejectWithValue(message);
  }
};

const getMyths = createAsyncThunk(
  'myths/getMyths',
  onGetMyths,
);

const initialState = {
  isLoading: false,
  mythsAndRealitySection: null,
  errorMessage: '',
};

const mythsSlice = createSlice({
  name: 'myths',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getMyths.pending, (state) => {
        state.isLoading  = true;
        state.mythsAndRealitySection = null;
        state.errorMessage = '';
      })
      .addCase(getMyths.fulfilled, (state, { payload }) => {
        state.isLoading  = false;
        state.mythsAndRealitySection = payload;
        state.errorMessage = '';
      })
      .addCase(getMyths.rejected, (state, { payload }) => {
        state.isLoading  = false;
        state.mythsAndRealitySection = null;
        state.errorMessage = payload;
      });
  }
});

export { getMyths };
export const { reducer: mythsReducer } = mythsSlice;
