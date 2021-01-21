import CartActionTypes from  './cart.types';

const INITIAL_STATE = {
  show: false
};

const cartReducer = (state =INITIAL_STATE, action) => {
  const { TOGGLE_CART_HIDDEN } = CartActionTypes;
  switch(action.type){
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        show: !state.show
      }
    default:
      return state
  }
};

export default cartReducer;