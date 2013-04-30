var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

function Enum() {
	var obj = {};
	Array.prototype.slice(arguments).forEach(function(value, index) {
		obj[value] = index;
	});
	return obj;
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

	var MEDAL_TYPE = Enum('ROCK','WATER','THUNDER');

	var medal = mongoose.Schema({
		gained: Date,
		type: Number,
	});

	var player = mongoose.Schema({
		username: String,
		hash: String,
		medals: [medal],
	});

	var Player = mongoose.model('Player', player);
	var Medal = mongoose.model('Medal', medal);

	Medal.find(function (err, medals) {
		if (err) return console.log('error', err);

		Player.find(function (err, players) {
			if (err) return console.log('error', err);

			console.log('PLAYERS', players);

			medals.forEach(function(a) { a.remove() });
			players.forEach(function(a) { a.remove() });

			var medal1 = new Medal({
				gained: new Date,
				type: MEDAL_TYPE.ROCK,
			});

			var medal2 = new Medal({
				gained: new Date,
				type: MEDAL_TYPE.WATER,
			});

			var me = new Player({
				username: 'amatiasq',
				hash: 'cosa',
				medals: [medal1, medal2]
			});


			medal1.save();
			medal2.save();
			me.save();
		});
	});


	medal.save

	return;



	var kittySchema = mongoose.Schema({
		name: String
	});

	var Kitten = mongoose.model('Kitten', kittySchema);

	Kitten.find(function (err, kittens) {
		if (err) console.error('Error loading:', err);
		console.log(kittens);

		if (kittens.some(function(a) { return a.name === 'Silence' })) {
			console.log('Already exists');
			return;
		}

		var silence = new Kitten({ name: 'Silence' })
		console.log(silence.name)

		silence.save(function (err, fluffy) {
			if (err) console.error('Error saving:', err);
			console.log('Saved', fluffy);
		});

	});

});

//process.exit(0);
/*
var app = express();
mongoose.connect('mongodb://localhost/test');

// Configuration
app.use(express.bodyParser());

// Routes
app.get('/', function(req, res) {
    res.send('Hello World');
});

app.listen(3000);
*/
