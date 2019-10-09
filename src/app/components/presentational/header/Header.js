import React from 'react';
import Navbar from './Navbar';
import Logo from '../common/Logo';
import EventFilter from '../events/EventFilter';

const Header = () => {
  return (
    <header className="app-header">
      <Logo />
      <Navbar />
      <EventFilter />
    </header>
  );
};

export default Header;
