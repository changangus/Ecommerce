import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartShow = createSelector(
  [selectCart],
  (cart) => cart.show
)

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
)