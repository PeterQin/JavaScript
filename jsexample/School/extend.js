/*Number.prototype.after_second = function(callback) {

	setTimeout(callback, this);
};

var i = 10;
i.after_second(function(){
	console.log('shutdown');
})
*/
/*
var method = new function(){
	if (typeof(callback) === 'function') {
		callback();
	};
}

Function.prototype.method = function(arg, callback) {
	var method = new method()
	method(arg, callback);

	return method;
};*/

Function.prototype.method = new function(arg, func){

}

/*Function.prototype.method = function(){

}*/


var Person = function(){};

Person.method();

/*Person.prototype.method = function(){

}*/

var obj = new Person();

//obj.method();



// var obj = new Person();
// obj.hi();