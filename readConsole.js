

var fs = require('fs');  // file system
var wstream = fs.createWriteStream('output.txt');


var first = ''
var second = ''

var toSpeak = ''


var spawn = require('child_process').spawn;
var proc = spawn('GestureMyo.exe');
proc.stdout.on('data', function(data) {
  
  second = first
  first = data.toString().split(" ")[1];

  if(first!=second)
  {
    toSpeak = first;
  var spawn = require('child_process').spawn;
  var voice = spawn('python', ['TTSProgram.py',toSpeak])

process.stdout.write(data + " in IF\n");
  

  }

  process.stdout.write(data + " is the data\n");
  process.stdout.write(first + " is first\n");
  process.stdout.write(second + " is second\n");
  
  wstream.write(data.toString());


});
proc.stderr.on('data', function(data) {
  process.stderr.write(data);
});
proc.on('close', function(code, signal) {
  console.log('test.exe closed');



});



if (process.platform === "win32") {
  var rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on("SIGINT", function () {
    process.emit("SIGINT");
  });
}

/*var spawn = require('child_process').spawn;
  var clearData = spawn('node', ['clearData.js']);

  var spawn = require('child_process').spawn;
  var voice = spawn('python', ['TTSProgram.py'])
*/

process.on("SIGINT", function () {
  //graceful shutdown
  console.log("SIGINT END")
     process.exit();


/*clearData.stdout.on('data', function(data){

  process.stdout.write("I'm Done");
   process.exit();
});
clearData.stderr.on('data', function(data){
  process.stderr.write(data + " is the error");
})*/

 
});








/*var exec = require('child_process').execFile;

var fun =function(){
   console.log("fun() start");
   exec('GestureMyo.exe', function(err, data) {  
        console.log(err)
        console.log(data.toString());                       
    });  
}
fun();
*/




/*
var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim() 
    console.log("you entered: [" + 
        d.toString().trim() + "]");
  });*/