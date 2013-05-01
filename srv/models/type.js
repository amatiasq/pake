var mongoose = require('mongoose');

var type = mongoose.Schema({
	damage_class_id: Number,
	generation_id: Number,
	identifier: String
});

module.exports = mongoose.model('Type', type);
