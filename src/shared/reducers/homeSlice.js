import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';
import { mocData } from 'data/db';

/**
 * @typedef {import('./types').ThunkAPI} ThunkAPI
 * @typedef {import('./types').HomePageFromAPI} HomePageFromAPI
 */

/**
 * @function onGetHomePage
 * @param {null} _
 * @param {ThunkAPI} thunkAPI
 * @returns {Promise<HomePageFromAPI | string>}
 */

const onGetHomePage = async (_, thunkAPI) => {
 try {
    const data = mocData;
    console.log(data.form);
    if (data.message) throw new Error(data.message);
    return thunkAPI.fulfillWithValue(data.homepage);
  } catch (error) {
    const { message } = error;
    console.error(message);
    return thunkAPI.rejectWithValue(message);
  }
}

/** @type {*} */
const getHomePage = createAsyncThunk(
  'homePage/getHomePage',
  onGetHomePage,
);

const initialState = {
  isLoading: false,
  /** @type {null | HomePageFromAPI} */
  homePage: null,
  errorMessage: '',
};

/** @type {*} */
const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getHomePage.pending, (state) => {
        state.isLoading  = true;
        state.homePage = null;
        state.errorMessage = '';
      })
      .addCase(getHomePage.fulfilled, (state, { payload }) => {
        state.isLoading  = false;
        state.homePage = payload;
        state.errorMessage = '';
      })
      .addCase(getHomePage.rejected, (state, { payload }) => {
        state.isLoading  = false;
        state.homePage = null;
        state.errorMessage = payload;
      });
  }
});

export { getHomePage };
export const { reducer: homePageReducer } = homePageSlice;
