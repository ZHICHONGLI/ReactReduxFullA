import React from 'react';
import { Provider, connect } from 'react-redux';
import store from './stores';
import { BrowserRouter as Router, hashHistory, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
import App from './components/App';
import About from './components/About';
import HeaderBar from './components/HeaderBar';
import Albums from './components/Albums';
import Login from './components/Login';

const Protected = () => <div>Protected Content</div>

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100) //fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100)
    }
};

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
));

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        if (fakeAuth.isAuthenticated) {
            return <Component {...props}/>
        } else {
            return <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }} />
        }
        
    }} />
);

const history = createHistory();

const routes = (
    <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={history}>
            <div>
                <HeaderBar />
                <AuthButton />
                <App />
                <Route exact path="/" render={()=><h2>HOME PAGE</h2>} />
                <Route path="/about" component={About} />
                <Route path="/contact" render={() => (
                    <div>
                        <Link to="/">HOME</Link>
                        <hr />
                        <h1>CONTACT INFO</h1>
                    </div>
                )} />
                <Route path="/albums" component={Albums} />
                <Route path="/login" component={Login}/>
                <PrivateRoute path="/protected" component={Protected} />
            </div>
        </ConnectedRouter>
    </Provider>
);

export {routes, fakeAuth};