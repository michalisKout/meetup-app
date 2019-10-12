/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NAVBAR_CONFIG } from '../../../appConfig/appConfig';

const Navbar = () => {
  const getNavLinks = NAVBAR_CONFIG.map((navLinkConfig, index) => {
    const { text, linkPath, cssClass } = navLinkConfig;
    const key = `navitem_${index}`;
    return (
      <NavLink key={key} tabIndex="0" to={linkPath} className={cssClass} activeClassName="active">
        {text}
      </NavLink>
    );
  });

  return <nav className="navigation">{getNavLinks}</nav>;
};

Navbar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(props => <Navbar {...props} />);
