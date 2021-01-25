import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/CartItem.component';
import CustomButton from '../custom-button/CustomButton.component';

import './CartDropdown.styles.scss';

const CartDropdown = ({cartItems}) => {
  console.log(cartItems)
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);