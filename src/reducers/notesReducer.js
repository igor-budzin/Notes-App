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
		case 'DELETE_NOTE':
			let noteId = action.payload.noteId;
			let newState = state.filter((note) => {
				return noteId !== note.id;
			});
			return newState;
		break;
		default:
			return state;
	}
}
