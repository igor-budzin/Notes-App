import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
	text: {type: String},
	color: {type: String},
	id: {type: Number}
});

mongoose.model('Note', NoteSchema);
