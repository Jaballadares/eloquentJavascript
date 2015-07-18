var http = require("http");
var fs   = require("fs");

var methods = Object.create(null);


methods.DELETE = function(path, respond) {
  fs.stat(path, function(error, stats) {
    if (error && error.code == "ENOENT")
      respond(204);
    else if (error)
      respond(500, error.toString());
    else if (stats.isDirectory())
      fs.rmdir(path, respondErrorOrNothing(respond));
    fs.unlink(path, respondErrorOrNothing(respond));
  });
};
