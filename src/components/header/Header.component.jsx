import React from 'react';
import './Header.styles.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => {
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
      </div>
    </div>
  )
};

export default Header;