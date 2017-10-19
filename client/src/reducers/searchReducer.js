const initialState = {
	searchQuery: ''
};

export default function searchReducer(state = initialState.searchQuery, action) {
	if(action.type === 'SEARCH_NOTE') {
		return action.payload.text;
	}
	return state;
}