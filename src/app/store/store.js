import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { 
  mythsReducer, 
  therapyReducer,
} from 'shared/reducers';

const rootReducer = combineReducers({
  mythsReducer,
  therapyReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
