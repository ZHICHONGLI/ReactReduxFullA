import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import combined from '../reducers/index';

let store = createStore(combined, applyMiddleware(thunk));

export default store;