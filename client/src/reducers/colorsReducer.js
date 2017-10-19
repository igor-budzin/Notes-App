const initialState = {
	colors: ["red", "green", "yellow", "blue", "purple"],
	pickedColor: 'yellow'
}
		

export default function notesState(state = initialState, action) {
	if(action.type === 'PICK_COLOR') {
		let color = action.payload.pickColor;
		return Object.assign({}, state, {pickedColor: color});
	}
	return state;
}
