import axios from 'axios';

let initialState = [];

export default function notesState(state = initialState, action) {
	switch(action.type) {
		case 'ADD_NOTE':
			axios.post('/notes', {
				id: action.payload.id,
				color: action.payload.color,
				text: action.payload.text
			})
			.catch((error) => {
				console.log(error);
				return state;
			});
			return state.concat(action.payload);
		break;

		case 'DELETE_NOTE':
			let noteId = action.payload.noteId;
			let newState = state.filter((note) => {
				return noteId !== note.id;
			});
			axios({
				method: 'delete',
				url: '/notes',
				data: {
					id: noteId
				}
			})
			// .then(() => {
				
			// })
			// .cathc((error) => {
			// 	console.log(error);
			// 	return state;
			// });
			return newState;
			
		break;

		default:
			return state;
	}
}
