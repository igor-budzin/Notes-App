import { combineReducers } from 'redux';
import notesReducer from '../reducers/notesReducer';
import userReducer from '../reducers/userReducer';

export default combineReducers({
	notesReducer,
	userReducer
});