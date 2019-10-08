/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NAVBAR_CONFIG } from '../../../appConfig/appConfig';

const Navbar = () => {
  const getNavLinks = NAVBAR_CONFIG.map(navLinkConfig => {
    const { text, linkPath, cssClass } = navLinkConfig;
    return (
      <NavLink to={linkPath} className={cssClass} activeClassName="active">
        {text}
      </NavLink>
    );
  });

  return <nav className="app-nav">{getNavLinks}</nav>;
};

Navbar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(props => <Navbar {...props} />);
