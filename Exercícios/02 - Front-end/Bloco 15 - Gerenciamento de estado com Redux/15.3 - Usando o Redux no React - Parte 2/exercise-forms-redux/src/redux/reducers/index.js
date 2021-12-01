import { combineReducers } from 'redux';
import personalForm from './personalForm';
import professionalForm from './professionalForm';

const rootReducer = combineReducers({ personalForm, professionalForm });

export default rootReducer;
