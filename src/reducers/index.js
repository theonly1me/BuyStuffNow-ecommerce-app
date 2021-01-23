import { combineReducers } from 'redux';
import { LOGIN, ADD_TO_CART } from '../actions/types';

const reducer = (state = null, action) => {
  debugger;
  switch (action.type) {
    case LOGIN:
      return action.payload ? { ...state, user: action.payload } : null;
    case ADD_TO_CART: {
      console.log(action.payload);
      action.payload.quantity = action.payload.quantity
        ? action.payload.quantity + 1
        : 1;
      return { ...state, cart: action.payload };
    }
    default:
      return state;
  }
};

export default combineReducers({
  shop: reducer,
});
