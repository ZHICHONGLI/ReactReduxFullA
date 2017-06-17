import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducers from './reducers';
import homeReducer from './homeReducer';

const combined = combineReducers({
    totalList: reducers,
    routing: routerReducer,
    home: homeReducer
});

export default combined;