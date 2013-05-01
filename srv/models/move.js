var mongoose = require('mongoose');

var move = mongoose.Schema({
	super_contest_effect_id : Number,
	contest_type_id : Number,
	effect_id : Number,
	priority : Number,
	//effect_chance : null,
	generation_id : Number,
	power : Number,
	identifier : String,
	type_id : Number,
	pp : Number,
	accuracy : Number,
	target_id : Number,
	contest_effect_id : Number,
	damage_class_id : Number
});

module.exports = mongoose.model('Move', move);
