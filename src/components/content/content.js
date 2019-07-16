import React, { Component } from 'react';

import './content.css';

class Content extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <section className="top-info">
            <p><b>Hi, there</b></p>
            <h1>Welcome to the 
              <br></br>community of winners.</h1>
            <h3>Disrupting the way we shop 🤯🤟💵</h3>
            <button className="btn-info">Become a Winner  &#8594;</button>
          </section>
        </div>

        <div className="img">
          <div className="imgwidth">

          </div>
          {/* <div className="imgtext">
            <p><b>Hi, there</b></p>
            <h1>Join our newsletter.</h1>
            <h2>Get notified the second 
              <br></br>we're live</h2>
          </div>  */}
        </div>

        <div className="bottom-info">
          <section className="onesection">
            <span className="onetext">
              <p><b>Hi, there</b></p>
              <span className="bottominfo">
              <h1>Join our newsletter.</h1>
              </span>
              <h3>Get notified the second
                <br></br> we’re live 🤑</h3>
              <div className="kub">
                <p className="email">Your Email</p>
                <form action="#">
                  <input type="text" name="" placeholder="micki@gmail.com"></input>  
                  <button className="btn-bottom">Submit &#10141;</button>
                </form>
              </div>
            </span>
          </section>
        </div>
      </div>
    );
  }
}

export default Content;