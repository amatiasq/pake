var express = require('express');
var init = require('./init');
var Player = require('./models/player');

function Enum() {
	var obj = {};
	Array.prototype.slice(arguments).forEach(function(value, index) {
		obj[value] = index;
	});
	return obj;
}

function funct(method) {
	var args = Array.prototype.slice.call(arguments, 1);
	return function(item) {
		return item[method].apply(item, args);
	};
}


var MEDAL_TYPE = Enum('ROCK','WATER','THUNDER');


init(function(db, $, all) {

	return $(Player).find().then(function(players) {
		console.log('PLAYERS', players);
		return all(players.map($).map(funct('remove')));

	}).then(function())

		var me = new Player({
			username: 'amatiasq',
			hash: 'cosa',
		});

		return $(me).save();
	});

});


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
