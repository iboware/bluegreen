var http = require('http');
var port = 80;

http.createServer(function(req, res){
  var hostname = process.env.HOSTNAME;
  res.writeHead(200, { 'Content-Type': 'text/HTML' });
  var name = process.env.NAME || 'World';
  var body = 
    '<h1>Hello '+name+'</h1> \
     <p>This is a demo page/p> \
     <p>from server: '+hostname+'</p>';
  res.end(body);
}).listen(port, function(){
  console.log('Server running at port ' + port);
});