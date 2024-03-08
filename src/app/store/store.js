import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { 
  homePageReducer, 
} from 'shared/reducers/homeSlice';

const rootReducer = combineReducers({
  homePageReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
