var _ = require('underscore');
var Pokemon = require('./models/pokemon');

require('./init')(function(db, $) {
	return $(Pokemon).find().then(
		console.log.bind(console),
		console.error.bind(console, 'ERROR')
	);
});
