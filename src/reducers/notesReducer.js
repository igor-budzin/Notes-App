const initialState = [
	{
		id: 1,
		text: 'First item'
	},
	{
		id: 2,
		text: 'Second item'
	}
];

export default function notesState(state = initialState, action) {
	switch(action.type) {
		case 'ADD_NOTE':
			return state.concat(action.payload);
		break;
		default:
			return state;
	}
}
