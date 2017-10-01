export default function addNewNoteAction(text, color) {
	return {
		type: 'ADD_NOTE',
		payload: {
			id: Date.now(),
			text: text,
			color: color
		}
	}
}
