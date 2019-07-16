// import React from 'react';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './header.css';
import logo from '../../img/logo.png'


class Header extends Component {
  render() {
    return (
      <header className="menu">
        <img className="logo" src={logo} width="75" height="75" alt=""></img>
        <nav>
          <ul className="menu-item">
            <li>
              <Link to="/product">Product</Link>
              {/* <a href=" ">Product</a> */}
            </li>
            <li>
              <Link to="/winner">Become a Winner</Link>
              {/* <a href=" ">Become a Winner</a> */}
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;