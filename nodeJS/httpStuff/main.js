// var garble = require("./garble");

// Index 2 Holds the First Actual Command Line Argument
// var argument = process.argv[2];
// console.log(garble(argument));

var fs = require("fs");
fs.readFile("file.txt", "utf8", function(error, text) {
  if (error)
    throw error;
  console.log("The file Contained:", text);
});

fs.writeFile("graffiti.txt", "Node was here", function(err) {
  if (err)
    console.log("Failed to write file:", err);
  else
    console.log("File Written");
});
