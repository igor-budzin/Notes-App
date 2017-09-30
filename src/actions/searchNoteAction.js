export default function searchNoteAction(text) {
	return {
		type: 'SEARCH_NOTE',
		payload: {
			text: text
		}
	}
}