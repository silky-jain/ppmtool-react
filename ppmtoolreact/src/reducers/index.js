import {combineReducers} from 'redux';
import errorReducer from './errorReducer';
import projectReducer from './projectReducer';
import projectTaskReducer from './projectTaskReducer';
export default combineReducers({
    errors:errorReducer,
    projects:projectReducer,
    projecttasks:projectTaskReducer
});