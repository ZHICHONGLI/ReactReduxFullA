import React from 'react';
import { Provider } from 'react-redux';
import store from './stores';
// import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { BrowserRouter, hashHistory, Route, IndexRoute } from 'react-router-dom';

import App from './components/App';
import About from './components/About';

const routes = (
    <Provider store={store}>
        <div>
            <BrowserRouter history={hashHistory}>
                <div>
                    <Route path="/" component={App} />
                    <Route path="/about" component={About} />
                </div>
            </BrowserRouter>
        </div>
    </Provider>
);

export default routes;