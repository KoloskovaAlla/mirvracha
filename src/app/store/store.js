import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { 
  mythsReducer, 
} from 'shared/reducers/mythsSlice';

const rootReducer = combineReducers({
  mythsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
