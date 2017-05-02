import { combineReducers } from 'redux';
import reducers from './reducers';

const combined = combineReducers({
    totalList: reducers
});

export default combined;