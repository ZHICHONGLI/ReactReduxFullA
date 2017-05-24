import React from 'react';
import { Provider } from 'react-redux';
import store from './stores';
import { BrowserRouter as Router, hashHistory, Route, Link } from 'react-router-dom';

import App from './components/App';
import About from './components/About';
import HeaderBar from './components/HeaderBar';
import Albums from './components/Albums';

const routes = (
    <Provider store={store}>
        <Router history={hashHistory}>
            <div>
                <HeaderBar />
                <Route exact path="/" component={App} />
                <Route path="/about" component={About} />
                <Route path="/contact" render={() => (
                    <div>
                        <Link to="/">HOME</Link>
                        <hr />
                        <h1>CONTACT INFO</h1>
                    </div>
                )} />
                <Route path="/albums" component={Albums} />
            </div>
        </Router>
    </Provider>
);

export default routes;