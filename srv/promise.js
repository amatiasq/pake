var factory = require('./promise/src/cps');
var toArray = Function.prototype.call.bind([].slice);

factory.invoke = function(target, method) {
	var def = factory();
	target[method].apply(target, toArray(arguments, 2).concat(def.callback()));
	return def.promise;
};

factory.$ = factory.adapt.bind(factory);

module.exports = factory;
