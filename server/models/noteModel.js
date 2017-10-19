import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
	text: {type: String},
	color: {type: String}
});

mongoose.model('Note', NoteSchema);