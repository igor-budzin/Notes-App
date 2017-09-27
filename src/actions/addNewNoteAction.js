export default function addNewNoteAction(text) {
	return {
		type: 'ADD_NOTE',
		payload: {
			id: Date.now(),
			text: text
		}
	}
}
