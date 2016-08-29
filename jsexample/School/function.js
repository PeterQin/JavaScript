var $ = function(arg)
{
	var elements = document.querySelector(arg);
}


var todos = $('.todos');


var obj = 
{

	name:'peter',
	callme:function(){
		console.log(this.name);
	}

}

for(var attr in obj){
	console.log(attr + ': ' + obj[attr]);
}