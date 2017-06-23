import React from 'react';
import { Provider } from 'react-redux';
import store from './stores';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import actions from './actions';
import App from './components/App';
import HeaderBar from './components/HeaderBar';
import Albums from './components/Albums';
import Login from './components/Login';
import UserInfo from './components/UserInfo';
import Home from './pages/Home';
import About from './pages/About';
import dbAlbum from './pages/DbAlbum';
import Artists from './pages/Artists';


// PUT isAuthenticated into Reducer for global using!!
const fakeAuth = {
    isAuthenticated: false,
    accessRight: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        store.dispatch(actions.logIn());
        setTimeout(cb, 100) //fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        store.dispatch(actions.logOut());
        setTimeout(cb, 100)
    },
    rightToggle(cb) {
        this.accessRight = !this.accessRight;
        console.log(this.accessRight);
        setTimeout(cb, 100)
    }
};

const Protected = () => <div><p>Protected Content</p><UserInfo right={fakeAuth.accessRight} /></div>

/*
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
*/

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

const routes = 
    <Provider store={store}>
        { /* TODO ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={history}>
            <div>
                <HeaderBar />
                {/*<AuthButton />*/}
                <App />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/artists" component={Artists} />
                <Route path="/albums" component={Albums} />
                <Route path="/dbalbum/:id" component={dbAlbum} />
                <Route path="/login" component={Login}/>
                <PrivateRoute path="/protected" component={Protected} />
            </div>
        </ConnectedRouter>
    </Provider>
;

export {routes, fakeAuth};