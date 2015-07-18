var http = require("http");
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html", "title": "hello world"});
  response.write("<h1>Hello!</h1><p>You Asked For <code>" + request.url + " Bitch </code></p>");
  response.end();
});
server.listen(8000);

var request = http.request({
  hostname: "eloquentjavascript.net",
  path: "/20_node.html",
  method: "GET",
  headers: { Accept: "text/html "}
}, function(response) {
  console.log("Server responded with a status code", response.statusCode);
});
request.end();
