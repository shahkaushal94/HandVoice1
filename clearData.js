var HashMap = require("Hashmap");
var map = new HashMap();
var data = ""



var fs = require('fs');  // file system
var wstream = fs.createWriteStream('CleanedText.txt');



var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('output.txt')
});

lineReader.on('line', function (line) {
  //console.log('Line from file:', line.split(" ")[1]);

  if( !map.search(line.split(" ")[1]) )
  {
  	map.set(line.split(" ")[1], line.split(" ")[1]);
  	console.log('Line from file:', line.split(" ")[1]);
  	data += line.split(" ")[1] + " " ;
  }

});

lineReader.on('close', function(){

console.log(data+ " is the answer");
wstream.write(data.toString());

})