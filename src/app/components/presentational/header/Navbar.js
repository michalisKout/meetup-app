/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="app-nav">
      <ul>
        <li>
          <Link to="/events">All Events</Link>
        </li>
        <li>
          <Link to="/myevents">My Events</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
