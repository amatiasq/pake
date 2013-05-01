var deferred = require('./promise');
var mongoose = require('mongoose');

deferred.debug = true;

function connect() {
	var def = deferred();
	mongoose.connect('mongodb://localhost/test');
	mongoose.connection.on('error', function(err) { def.promise.reject(err) });
	mongoose.connection.once('open', function () { def.resolve() });
	return def.promise;
}

function init(callback) {
	connect().then(function() {
		return callback(mongoose, deferred.$, deferred.all.bind(deferred));
	}).then(function() {
		return deferred.$(mongoose).disconnect();
	}).then(function() {
		console.log('Program completed');
	}, function(reason) {
		console.error('FAILED', reason);
	});
}

init.$ = deferred.$;
module.exports = init;
