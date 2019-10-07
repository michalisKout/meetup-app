import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="app-header">
      <div className="app-header__logo">
        <span className="app-header__logo--small">my</span>
        <span className="app-header__logo--large">Logo</span>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
