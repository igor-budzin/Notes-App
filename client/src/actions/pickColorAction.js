export default function pickColorAction(color) {
	return {
		type: 'PICK_COLOR',
		payload: {
			pickColor: color
		}
	}
}
