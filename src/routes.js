import React from 'react';
import { Provider } from 'react-redux';
import store from './stores';
// import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { BrowserRouter, hashHistory, Route, Link } from 'react-router-dom';

import App from './components/App';
import About from './components/About';

const routes = (
    <Provider store={store}>
        <div>
            <BrowserRouter history={hashHistory}>
                <div>
                    <Route exact path="/" component={App} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" render={() => (
                        <div>
                            <Link to="/">HOME</Link>
                            <hr />
                            <h1>CONTACT INFO</h1>
                        </div>
                    )} />
                </div>
            </BrowserRouter>
        </div>
    </Provider>
);

export default routes;