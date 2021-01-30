import CartActionTypes from './cart.types';
import { addItemToCart, decreaseQuantity } from './cart.utils';

const INITIAL_STATE = {
	show: false,
	cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
	const { TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } = CartActionTypes;
	switch (action.type) {
		case TOGGLE_CART_HIDDEN:
			return {
				...state,
				show: !state.show
			};
		case ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case REMOVE_ITEM: 
      return {
        ...state,
        cartItems: decreaseQuantity(state.cartItems, action.payload)
      }
		case CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id)
      };
		default:
			return state;
	}
};

export default cartReducer;
