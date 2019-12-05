import React from 'react';
import { NavLink } from 'react-router-dom';
import { GIT_HUB_H2ASH } from './constants';
import PropTypes from 'prop-types';

const Navbar = ({ itemsInBasket }) => (
  <header className="header">
    <NavLink
      className="header_wrapper-logo"
      href="#"
      to="/"
    >
      <img
        className="header__logo"
        src={`${GIT_HUB_H2ASH}/react_phone-catalog/img/logo.svg`}
        alt="logo"
      />
    </NavLink>
      
    <nav> 
      <ul className="header__nav">
        <li>
          <NavLink
            activeClassName="header__link header__link_active link"
            className="header__link link"
            href="#"
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>
  
        <li>
          <NavLink
            activeClassName="header__link header__link_active link"
            className="header__link link"
            href="#"
            to={{
              pathname: "/phones",
              search: "",
            }}
          >
            Phones
          </NavLink>
        </li>
  
        <li>
          <NavLink
            activeClassName="header__link header__link_active link"
            className="header__link link"
            href="#"
            to="/basket/"
          >
          Basket
            <span className="header__basket-quantity">
              {
                itemsInBasket.length
              }
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
)

Navbar.propTypes = {
  itemsInBasket: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Navbar;