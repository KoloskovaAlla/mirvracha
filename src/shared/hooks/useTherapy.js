import { useSelector } from 'react-redux';
import { getTherapy } from '../reducers/therapySlice';

const getState = (store) => store.therapyReducer;

export const useTherapy = () => {
  const state = useSelector(getState);
     
  return {
    ...state,
    getTherapy,
  };
};
