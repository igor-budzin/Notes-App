import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import './models/noteModel';

const app = express();

(function() {
	// Step 1: Create & configure a webpack compiler
	var webpack = require('webpack');
	var webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : '../webpack.config');
	var compiler = webpack(webpackConfig);

	// Step 2: Attach the dev middleware to the compiler & the server
	app.use(require("webpack-dev-middleware")(compiler, {
		noInfo: true, publicPath: webpackConfig.output.publicPath
	}));

	// Step 3: Attach the hot middleware to the compiler & the server
	app.use(require("webpack-hot-middleware")(compiler, {
		log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
	}));
})();

var promise = mongoose.connect('mongodb://localhost/noteApp', {
	useMongoClient: true
});

const Note = mongoose.model("Note");

app.use(bodyParser.json());

app.delete('/notes/:id', (req, res) => {
	const note = new Note({
	    text: 'Second items',
	    color: 'green'
	});

	note.save();
    res.send(`Note with id: '' deleted`);
});


app.get('/notes', (req, res) => {
	Note.find({}, null, function(err, r) {
		if(!err) {
			res.status(200).send(r);
		}
		else {
			res.status(404).send(err);
		}
	})
});

const server = app.listen(8080, function() {
    console.log(`Server is up and running`);
});
