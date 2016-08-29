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