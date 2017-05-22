import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import TopBusket from './TopBusket.jsx';
import HeaderBar from './HeaderBar.jsx';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <HeaderBar />
        <div className="App-intro row">
          intro section
          To get started, edit <code>src/App.js</code> and save to reload.
        </div>
        <div className="App-body row">
          <Link to="/">Home</Link>     <Link to="/about">About</Link>
          <TopBusket />
        </div>
      </div>
    );
  }
}

export default App;
