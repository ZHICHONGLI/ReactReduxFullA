import React from 'react';
import { Provider } from 'react-redux';
import store from './stores';
// import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { BrowserRouter, hashHistory, Route, IndexRoute } from 'react-router-dom';

import App from './components/App';

const routes = (
    <Provider store={store}>
        <div>
            <BrowserRouter history={hashHistory}>
                <Route path="/" component={App} />
            </BrowserRouter>
        </div>
    </Provider>
);

export default routes;