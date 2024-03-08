import { useSelector } from 'react-redux';
import { getMyths } from '../reducers/mythsSlice';

const getState = (store) => store.mythsReducer;

export const useMyths = () => {
  const state = useSelector(getState);

  return {
    ...state,
    getMyths,
  };
};
