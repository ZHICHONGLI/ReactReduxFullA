import React, {Component} from 'react';
import logo from '../logo.svg';
require('./HeaderBar.css')

class HeaderBar extends Component {
//    state = {  }
    render() {
        return (
            <div className="HeaderBar row">
                <img src={logo} className="App-logo col-md-3" alt="logo" />
                <span className="col-md-6 title">Welcome to React header section</span>
            </div>
        );
    }
}

export default HeaderBar;