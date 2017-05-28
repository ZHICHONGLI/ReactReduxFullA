import React, { Component } from 'react';
import './App.css';
import TopBusket from './TopBusket.jsx';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="App-body row">
          <NavLink to="/" exact activeClassName="selected">Home</NavLink> | 
           <NavLink to="/about" activeClassName="selected">About</NavLink> | 
           <NavLink to="/contact" activeClassName="selected">Contact</NavLink> |
           <NavLink to="/albums" activeClassName="selected">Albums</NavLink> |
           <NavLink to="/protected" activeClassName="selected">Protected</NavLink>
          <TopBusket />
        </div>
      </div>
    );
  }
}

export default connect(state => ({state: state})) (App);
