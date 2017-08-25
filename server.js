// http
var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-type' : 'text/json'});
    //res.write('Hello from text ...');
    //res.write('<h1>Hello from html ... </h1>');
    res.write('{"title" : "Hello JSON webAPI", "text" : "Text fra min API"}');
    res.end();
});

server.listen(3003);