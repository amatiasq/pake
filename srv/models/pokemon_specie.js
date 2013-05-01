var mongoose = require('mongoose');

var pokemonSpecie = mongoose.Schema({
	shape_id: Number,
	gender_rate: Number,
	has_gender_differences: Number,
	base_happiness: Number,
	//conquest_order: null,
	forms_switchable: Number,
	growth_rate_id: Number,
	generation_id: Number,
	habitat_id: Number,
	identifier: String,
	capture_rate: Number,
	//evolves_from_species_id: null,
	is_baby: Number,
	hatch_counter: Number,
	order: Number,
	color_id: Number,
	evolution_chain_id: Number
});

module.exports = mongoose.model('PokemonSpecie', pokemonSpecie);
