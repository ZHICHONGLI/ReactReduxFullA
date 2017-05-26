import React, {Component} from 'react';
import LoginStatus from './LoginStatus';
import logo from '../logo.svg';
import {history} from 'react-router-dom';
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
            </div>
        );
    }
}

export default HeaderBar;