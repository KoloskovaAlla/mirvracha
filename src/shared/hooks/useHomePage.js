import { useSelector } from 'react-redux';
import { getHomePage } from '../reducers/homeSlice';

const getState = (store) => store.homePageReducer;

export const useHomePage = () => {
  const state = useSelector(getState);

  return {
    ...state,
    getHomePage,
  };
};
