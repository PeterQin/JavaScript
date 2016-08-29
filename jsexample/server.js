var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
	var path = request.url.slice(1);
	console.log(path);

	if (path==='todos') {
		var todos=['1', '2'];
		response.write(JSON.stringify(todos));
		response.end();
		console.log('todos end');
	}
	else{
		fs.exists(path, function(exists){
			if (!exists) {
				response.write('404');
				response.end();
			}
			else{
				fs.readFile(path, 'utf-8', function(err,content){
					response.write(content);
					response.end();
				});
			}
		});
	}
	
}).listen(8888);

console.log("Server running at http://127.0.0.1:8888/");