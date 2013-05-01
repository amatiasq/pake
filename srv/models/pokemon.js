var mongoose = require('mongoose');

var pokemon = mongoose.Schema({
	species_id: Number,
	weight: Number,
	height: Number,
	order: Number,
	is_default: Number,
	base_experience: Number
});

module.exports = mongoose.model('Pokemon', pokemon);
