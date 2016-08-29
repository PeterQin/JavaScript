var foo = function(arg){
	arg('a');
}

var bar = function(){
	console.log('callback');
}

foo(bar);