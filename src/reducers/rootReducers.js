import { combineReducers } from 'redux';
import notesReducer from '../reducers/notesReducer';
import searchReducer from '../reducers/searchReducer';

export default combineReducers({
	notesReducer,
	searchReducer
});