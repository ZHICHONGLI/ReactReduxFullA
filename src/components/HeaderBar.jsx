import React, {Component} from 'react';
import LoginStatus from './LoginStatus';
import logo from '../logo.svg';
require('./HeaderBar.css');

class HeaderBar extends Component {
//    state = {  }
    render() {
        return (
            <div className="HeaderBar">
                <img src={logo} className="App-logo col-md-3" alt="logo" />
                <span className="col-md-6 title">Welcome to React header section</span>
                <span className="col-md-3 logbtn">
                    <LoginStatus />
                </span>
                <span>TEST FOR MAC</span>
            </div>
        );
    }
}

export default HeaderBar;