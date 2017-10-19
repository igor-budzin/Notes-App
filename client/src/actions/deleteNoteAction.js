export default function deleteNoteAction(id) {
	return {
		type: 'DELETE_NOTE',
		payload: {
			noteId: id
		}
	}
}