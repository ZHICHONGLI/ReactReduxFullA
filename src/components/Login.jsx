import React, { Component } from 'react';
import {
  Link,
  Redirect
} from 'react-router-dom';
import {fakeAuth} from '../routes.js';

class Login extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      console.log('Location Changed');
    }
  }
  state = {
    redirectToReferrer: false
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state
    
    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }
    
    return (
      <div>
        <Link to="/">Home</Link>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

export default Login