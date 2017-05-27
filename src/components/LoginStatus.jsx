import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'; // withRouter can let component access to history object

class LoginStatus extends Component {
    state = {  }

    render() {
        const buttonNavi = () => {
            // console.log(this.props)
            this.props.history.push('/login');
        }

        return (
            <div>
                <div>
                    <button onClick={() => buttonNavi()} className="btn btn-success headbtn">Login</button>
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

export default withRouter(LoginStatus);