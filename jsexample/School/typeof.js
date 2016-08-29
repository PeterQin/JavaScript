var func = function(arg){
	console.log(this);
	console.log('func executed: ' + arg);
};

//console.log(func);

var obj = {
	name:'Peter',
	setFunc:func,
};

//console.log(typeof(obj));

func('1');

obj.setFunc('2');

func.call(obj, '3');

func.apply(obj, ['4']);





