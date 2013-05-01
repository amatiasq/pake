var fs = require('fs');
var _ = require('underscore');
var relations = require('./reset_db_relation');

function funct(method) {
	var args = Array.prototype.slice.call(arguments, 1);
	return function(item) {
		return item[method].apply(item, args);
	};
}

require('./init')(function(db, $, all) {

	var promises = _.map(relations, function(Model, file) {
		if (!Model) return;
		var log = console.log.bind(console, '[' + file + ']');
		log('retrieve...');

		return $(Model).find().then(function(models) {
			log('found', models.length);
			return all(models.map(function(model) {
				return $(model).remove();
			}));

		}).then(function() {
			log('parsing...');
			var data = JSON.parse(fs.readFileSync('data/' + file));
			log('JSON loaded');

			return all(data.map(function(row) {
				return $(new Model(row)).save();
			})).then(function() {
				log('insertion complete, inserted', data.length, 'rows');
			});
		});
	});

	return all(promises.filter(Boolean));
});
