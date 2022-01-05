import { combineReducers, createStore } from 'redux';
import carReducer from '../redux/carReducer';
import trafficReducer from '../redux/trafficReducer';

const rootReducer = combineReducers({ trafficReducer, carReducer });

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
