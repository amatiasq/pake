var mongoose = require('mongoose');

var ability = mongoose.Schema({
	generation_id: Number,
	identifier: String,
});

module.exports = mongoose.model('Ability', ability);
