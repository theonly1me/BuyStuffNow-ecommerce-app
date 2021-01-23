import { combineReducers } from 'redux';
import { LOGIN, ADD_TO_CART, LOGOUT, REMOVE_FROM_CART } from '../actions/types';

const reducer = (state = null, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload ? { ...state, user: action.payload } : null;
    case LOGOUT:
      return null;
    case ADD_TO_CART: {
      if (state) {
        if (state.cart) {
          const stateItem = state.cart.find(
            item => item.id === action.payload.id
          );
          if (stateItem) state.cart[stateItem.id - 1].quantity += 1;
          else {
            action.payload.quantity = 1;
            state.cart.push(action.payload);
          }
        } else {
          state.cart = [];
          action.payload.quantity = 1;
          state.cart.push(action.payload);
        }
      }
      return { ...state };
    }
    case REMOVE_FROM_CART: {
      const item = action.payload;
      if (state.cart[item.id - 1].quantity)
        state.cart[item.id - 1].quantity -= 1;
      return { ...state };
    }
    default:
      return state;
  }
};

export default combineReducers({
  shop: reducer,
});
