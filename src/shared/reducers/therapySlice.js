import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

const onGetTherapy = async (_, thunkAPI) => {
  try {    
    const url = `${API_BASE_URL}/.json`;   
    const response = await fetch(url);
    const data = await response.json();
    if (data.message) throw new Error(data.message);
    return thunkAPI.fulfillWithValue(data.therapySection);
  } catch (error) {
    console.error(error);
    const { message } = error;
    return thunkAPI.rejectWithValue(message);
  }
};

const getTherapy = createAsyncThunk(
  'therapy/getTherapy',
  onGetTherapy,
);

const initialState = {
  isLoading: false,
  therapySection: null,
  errorMessage: '',
};

const therapySlice = createSlice({
  name: 'therapy',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTherapy.pending, (state) => {
        state.isLoading  = true;
        state.therapySection = null;
        state.errorMessage = '';
      })
      .addCase(getTherapy.fulfilled, (state, { payload }) => {
        state.isLoading  = false;
        state.therapySection = payload;
        state.errorMessage = '';
      })
      .addCase(getTherapy.rejected, (state, { payload }) => {
        state.isLoading  = false;
        state.therapySection = null;
        state.errorMessage = payload;
      });
  }
});

export { getTherapy };
export const { reducer: therapyReducer } = therapySlice;
