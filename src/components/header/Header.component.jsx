import React from 'react';
import './Header.styles.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <div className='logo'>LOGO</div>
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>SHOP</Link>
        <Link to='/shop' className='option'>CONTACT</Link>
      </div>
    </div>
  )
};

export default Header;