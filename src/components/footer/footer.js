import React, { Component } from 'react';

import './footer.css';
import bottomlogo from '../../img/winners-logo.png';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p className="link">Disrupting the way we shop 🤯🤟💵</p>
        <img className="bottomlogo" src={bottomlogo}></img>
        <p className="link">© Winners, All rights reserved.</p>
      </footer>
    );
  }
}

export default Footer;