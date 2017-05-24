import React, { Component } from 'react';
import './App.css';
import TopBusket from './TopBusket.jsx';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        
        <div className="App-intro row">
          intro section
          To get started, edit <code>src/App.js</code> and save to reload.
        </div>
        <div className="App-body row">
          <Link to="/">Home</Link> | 
           <Link to="/about">About</Link> | 
           <Link to="/contact">Contact</Link> |
           <Link to="/albums">Albums</Link>
          <TopBusket />
        </div>
      </div>
    );
  }
}

export default App;
