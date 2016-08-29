/*var a = {
	name : 'a',
	func1 : function(){
		console.log(this.name);
	},
}

var b = {
	name : 'b',
	func2 : function(){
		console.log(this.name);
	},
}

b.__proto__ = a;
b.func1();
a.func1();*/

var Person = function(){

}
//console.log(Person.prototype);

var obj = new Person();
//var obj = {}
//obj.__proto__ = Person.prototype;
//Person.call(obj);


Person.prototype.say = function(){
	console.log('obj1');
}

obj.say();

Person.prototype = {
	say: function(){
		console.log('obj2');
	}
}

var obj2 = new Person();

obj2.say();
obj.say();



