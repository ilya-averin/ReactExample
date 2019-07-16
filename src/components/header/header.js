// import React from 'react';
import React, { Component } from 'react';

import './header.css';
import logo from '../../img/logo.png'


class Header extends Component {
  render() {
    return (
      <header className="menu">
        <img className="logo" src={logo} width="75" height="75" alt=""></img>
        <nav>
          <ul className="menu-item">
            <li><a href="#">Product</a></li>
            <li><a href="#">Become a Winner</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;