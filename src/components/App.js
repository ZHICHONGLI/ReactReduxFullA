import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import TopBusket from './TopBusket.jsx';
import HeaderBar from './HeaderBar.jsx';

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
          Body
        {/*<TopBusket / > */}
          <TopBusket />
        </div>
      </div>
    );
  }
}

export default App;
