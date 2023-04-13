import React from 'react';
import './Navbar.css';
import Logo from '../../assets/logo/-logo.png';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={Logo} alt='Logo' />
      </div>
      <div className='links'>
        <a to='/'>Link 1</a>
        <a to='/'>Link 2</a>
        <a to='/'>Link 3</a>
      </div>
    </div>
  );
}

export default Navbar;
