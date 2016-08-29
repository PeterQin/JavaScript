var obj1 = {
	name : '1',
	say : function(){},
}

var obj2 = {
	name : '2',
	say : function(){},
}

var factory = function(name){
	this.name = name;
	this.say = function(){
		console.log(this.name);
	};
}

factory.call(obj1, 'obj1');
factory.call(obj2, 'obj2');
obj1.say();
obj2.say();

console.log(obj1.say === obj2.say);



