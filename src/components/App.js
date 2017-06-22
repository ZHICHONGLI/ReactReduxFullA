import React from 'react';
import './App.css';
// import TopBusket from './TopBusket.jsx';
import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="App-body row">
          <NavLink to="/" exact activeClassName="selected">Home</NavLink> |&nbsp;
          <NavLink to="/albums" activeClassName="selected">Albums</NavLink> |&nbsp;
          <NavLink to="/artists" activeClassName="selected">Artist</NavLink> |&nbsp;
          <NavLink to="/protected" activeClassName="selected">Protected</NavLink> |&nbsp;
          <NavLink to="/about" activeClassName="selected">About</NavLink>
                    
          {/*<TopBusket />*/}
        </div>
      </div>
    );
  }
}

export default App;
