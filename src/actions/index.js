import { LOGIN, ADD_TO_CART } from './types';

export const getUser = credentials => {
  return {
    type: LOGIN,
    payload: credentials,
  };
};

export const addToCart = item => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};
