import React, {Component} from 'react';

class LoginStatus extends Component {
    state = {  }
    render() {
        return (
            <div>
                <div>
                    <button className="btn btn-success headbtn">Login</button>
                    <button className="btn btn-primary headbtn">Sign up</button>
                </div>
                <div>
                    <span>User Name</span>
                    <button className="btn btn-primary headbtn">Log out</button>
                </div>
            </div>
        );
    }
}

export default LoginStatus;