import React from 'react';
// Components:
import CartItem from '../cart-item/CartItem.component';
import CustomButton from '../custom-button/CustomButton.component';
// Styles:
import './CartDropdown.styles.scss';
// Redux:
import { connect } from 'react-redux';
// Selectors:
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
// Router:
import { withRouter } from 'react-router-dom';
const CartDropdown = ({cartItems, history}) => {
  console.log(cartItems)
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? 
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          )) 
          :
          <span className='empty-message'>Cart empty</span>
      }
      </div>
      <CustomButton onClick={()=> history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));