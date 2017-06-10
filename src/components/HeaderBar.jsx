import React, {Component} from 'react';
import LoginStatus from './LoginStatus';
import logo from '../logo.svg';
require('./HeaderBar.css');

class HeaderBar extends Component {
//    state = {  }
    constructor(props) {
        super(props);
        this.state = {date: new Date(), auth: this.props.auth};
    }

    render() {
        let data = this.state.date.toJSON;
        return (
            <div className="HeaderBar">
                <img src={logo} className="App-logo col-md-3" alt="logo" />
                <span className="col-md-6 title">Welcome to React header section</span>
                <span className="col-md-3 logbtn">
                    {this.state.auth?'log in':<LoginStatus />}
                </span>
                <span>{data}</span>
                <button onClick={()=> console.log(this.props.auth+this.state.date)}>test</button>
            </div>
        );
    }
}

export default HeaderBar;

// TODO Connect isAuthenticated from store with component!