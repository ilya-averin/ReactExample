import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import Header from '../header';
import Content from '../content';
import Footer from '../footer';
import Product from '../product';

import './app.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />

          {/* <Content /> */}
          <Route exact path='/' component={Content} />
          <Route exact path='/product' component={Product} />

        <Footer />

      </div>
      </Router>
    );
  }
}

export default App;