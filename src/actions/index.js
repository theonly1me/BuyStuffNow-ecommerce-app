import { LOGIN, ADD_TO_CART, LOGOUT, REMOVE_FROM_CART } from './types';

export const login = credentials => {
  return {
    type: LOGIN,
    payload: credentials,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const addToCart = item => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = item => {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  };
};
