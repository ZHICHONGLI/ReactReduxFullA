import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducers from './reducers';

const combined = combineReducers({
    totalList: reducers,
    routing: routerReducer
});

export default combined;