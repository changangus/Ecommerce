import React from 'react';
import './Header.styles.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon.component';
// Redux:
import { connect } from 'react-redux';
import CartDropdown from '../cart-dropdown/CartDropdown.component';
// Selectors: 
import { createStructuredSelector } from 'reselect';
import { selectCartShow } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
 
const Header = ({ currentUser, show }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <div className='logo'>LOGO</div>
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>SHOP</Link>
        <Link to='/shop' className='option'>CONTACT</Link>
        {
          currentUser ? 
          <div className='option' onClick={ ()=> auth.signOut() }>SIGNOUT</div> :
          <Link to='/signin' className='option'>SIGNIN</Link>
        }
        <CartIcon />
      </div>
      {
      show && 
      <CartDropdown />
      }
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  show: selectCartShow,
});

export default connect(mapStateToProps)(Header);