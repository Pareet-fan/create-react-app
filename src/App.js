/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;*/

import React,{ Component } from 'react';
import { BrowserRouter, Route,Link} from 'react-router-dom';


import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';

import './App.less';

class App extends Component {
  render() {
      return (
          <BrowserRouter>
          <div className="box">
            <Link to="abc" className="link"> 家</Link>
            <Link to="abc1" className="link"> 产品</Link>
            <Link to="abc2" className="link">我们</Link>
            <br/>
            <Route path="/abc" component={Home}/>
            <Route path="/abc1" component={Product}/>
            <Route path="/abc2" component={About}/>
          </div>
        </BrowserRouter>
      );
  }
}

export default App;
