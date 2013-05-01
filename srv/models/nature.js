var mongoose = require('mongoose');

var nature = mongoose.Schema({
    increased_stat_id:  Number,
    likes_flavor_id:  Number,
    decreased_stat_id:  Number,
    identifier:  String,
    hates_flavor_id:  Number
});

module.exports = mongoose.model('Nature', nature);

