import React, {Component} from 'react';

class LoginStatus extends Component {
    state = {  }
    render() {
        return (
            <div>
                <button className="btn btn-success headbtn">Login</button>
                <button className="btn btn-primary headbtn">Sign up</button>
            </div>
        );
    }
}

export default LoginStatus;