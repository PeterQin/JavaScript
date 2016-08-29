var $ = function(arg){
	var elements = document.querySelector(arg);

	return {
		'elements' : elements,

		hide : function(){
			elements.style.display = 'none';
		},

		on : function(event,callback){
			elements.addEventListener(event, callback);
		},

		append : function(data){
			var ul = elements;
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(data));
			ul.appendChild(li);			
		},



	}
};

$.getJSON = function(url, data, success){
	var xhr = new XMLHttpRequest();
	xhr.open('get', url, true);
	xhr.onreadystatechange=function(){
		if (xhr.status===200 && xhr.readyState===4) {
			success(JSON.parse(xhr.responseText));
		}
	};
	xhr.send(data);
};