export default function addNewNote() {
	return {
		type: 'ADD_NOTE',
		payload: {
			id: 3,
			text: 'Other note'
		}
	}
}