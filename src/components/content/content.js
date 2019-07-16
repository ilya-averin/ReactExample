import React, { Component } from 'react';

import './content.css';

class Content extends Component {
  render() {
    return (
        <div className='content'>
          <section className="text-info">
            <p><b>Hi, there</b></p>
            <h1>Welcome to the 
              <br></br>community of winners</h1>
            <h3>Disrupting the we shop</h3>
          </section>
        </div>
    );
  }
}

export default Content;