import React from 'react';
import Navbar from './Navbar';
import Logo from '../common/Logo';

const Header = () => {
  return (
    <header className="app-header">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
