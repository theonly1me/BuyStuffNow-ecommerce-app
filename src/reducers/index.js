import { combineReducers } from 'redux';
import { LOGIN, ADD_TO_CART, LOGOUT, REMOVE_FROM_CART } from '../actions/types';

const reducer = (state = null, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload ? { ...state, user: action.payload } : null;
    case LOGOUT:
      return null;
    case ADD_TO_CART: {
      debugger;
      if (state) {
        if (state.cart) {
          const stateItem = state.cart.find(
            item => item.id === action.payload.id
          );
          if (stateItem) {
            const index = state.cart.findIndex(el => el.id === stateItem.id);
            state.cart[index].quantity += 1;
          } else {
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
      debugger;
      const item = action.payload;
      const index = state.cart.findIndex(el => el.id === item.id);
      if (state.cart[index].quantity) state.cart[index].quantity -= 1;
      return { ...state };
    }
    default:
      return state;
  }
};

export default combineReducers({
  shop: reducer,
});
