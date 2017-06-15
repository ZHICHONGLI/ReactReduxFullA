import React, {Component} from 'react';
import LoginStatus from './LoginStatus';
import logo from '../logo.svg';
import '../sass/headerBar.scss';


class HeaderBar extends Component {

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