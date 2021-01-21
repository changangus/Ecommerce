import React from 'react';
import CustomButton from '../custom-button/CustomButton.component';
import './CartDropdown.styles.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  )
};

export default CartDropdown;