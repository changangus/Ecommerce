import CartActionTypes from  './cart.types';

const INITIAL_STATE = {
  show: false,
  cartItems: [],
};

const cartReducer = (state =INITIAL_STATE, action) => {
  const { TOGGLE_CART_HIDDEN, ADD_ITEM } = CartActionTypes;
  switch(action.type){
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        show: !state.show
      }
    case ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      }
    default:
      return state
  }
};

export default cartReducer;