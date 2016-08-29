var Class =  function(options){

	var subclass = function(){};
	//subclass.prototype = options;
	//console.log(options);

	for(var method in options){
		subclass.prototype[method] = options[method];
	}

	//Person.__proto__.extend = function(){};
	//subclass.prototype.extend = function(){};

	return subclass;
}

module.exports = {create: Class};