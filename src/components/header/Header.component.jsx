import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon.component';
// Styled Components:
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './Header.styles'
// Redux:
import { connect } from 'react-redux';
import CartDropdown from '../cart-dropdown/CartDropdown.component';
// Selectors: 
import { createStructuredSelector } from 'reselect';
import { selectCartShow } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
 
const Header = ({ currentUser, show, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <div className='logo'>LOGO</div>
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/shop'>CONTACT</OptionLink>
        {
          currentUser ? 
          <OptionLink as='div' onClick={ signOutStart }>SIGNOUT</OptionLink> :
          <OptionLink to='/signin'>SIGNIN</OptionLink>
        }
        <CartIcon />
      </OptionsContainer>
      {
      show && 
      <CartDropdown />
      }
    </HeaderContainer>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  show: selectCartShow,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);