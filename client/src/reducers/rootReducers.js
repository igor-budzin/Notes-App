import { combineReducers } from 'redux';
import notesReducer from '../reducers/notesReducer';
import searchReducer from '../reducers/searchReducer';
import colorsReducer from '../reducers/colorsReducer';

export default combineReducers({
	notesReducer,
	searchReducer,
	colorsReducer
});