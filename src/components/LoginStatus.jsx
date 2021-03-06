import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'; // withRouter can let component access to history object
import { connect } from 'react-redux';
import {fakeAuth} from '../routes.js';

class LoginStatus extends Component {

    constructor (props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        let timer = setInterval(()=>{this.setState({date: new Date()})}, 500);
        this.setState({timer: timer})
    }    

    componentWillUnmount() {
        clearInterval(this.state.timer)
    }

    render() {
        const buttonNavi = () => {
            // console.log(this.props)
            this.props.history.push('/login');
        }

        let fakeAuth1 = {...fakeAuth};

        const signUp = () => {
            alert('build sign up page'); // TODO BUILD SIGN UP COMPONENT
        }

        const logOut = () => {
            fakeAuth.signout();
            this.props.history.push('/');
        }
        return (
            <div>
                {
                    this.props.loginStatus ?
                        <div>
                            <span>Welcome, User Name </span>
                            <button className="btn btn-primary headbtn" onClick={()=>logOut()}>Log out</button>
                            <p>{this.state.date.toJSON()}</p>
                        </div> :
                        <div>
                            <button onClick={() => buttonNavi()} className="btn btn-success headbtn">Login</button>
                            <button className="btn btn-primary headbtn" onClick={()=>signUp()}>Sign up</button>
                        </div>
                }
                {/*
                    !fakeAuth.isAuthenticated ?
                    (<div>
                        <button onClick={() => buttonNavi()} className="btn btn-success headbtn">Login</button>
                        <button className="btn btn-primary headbtn" onClick={()=>signUp()}>Sign up</button>
                    </div>)
                    :
                    (
                    <div>
                        <span>Welcome, User Name </span>
                        <button className="btn btn-primary headbtn" onClick={()=>logOut()}>Log out</button>
                        <p>{this.state.date.toJSON()}</p>
                    </div>
                    )
                */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loginStatus: state.totalList.loginStatus
})
export default withRouter(connect(mapStateToProps, null)(LoginStatus));