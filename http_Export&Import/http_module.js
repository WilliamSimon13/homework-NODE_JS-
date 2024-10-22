var http = require('http');

// http.createServer(function(req,res){
//     res.writeHead(200, {'Content-Type':'text/html'});
//     res.end('Hello World 2');
// }).listen(8081)

var fs = require('fs');
// console.log(fs);

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html'});
    fs.readFile('../homework-NODE_JS-/index.html','utf8',function(err,data){
        if (err) throw err;
        res.write(data);
        res.end();

    });
}).listen(8080);
