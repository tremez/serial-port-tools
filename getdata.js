var SerialPort = require("serialport");
var port = new SerialPort("/dev/cu.usbserial1", {
	baudRate: 230400
});


var fs = require('fs');


var isFirstData=false;
var startTime=0;
var tail=Date.now();

port.on('open', function() {
	console.log('Port Opened');
	// port.write('main screen turn on', function(err) {
	// 	if (err) {
	// 		return console.log('Error on write: ', err.message);
	// 	}
	// 	console.log('message written');
	// });
});

port.on('data', function (data) {
	if(!isFirstData){
		isFirstData=true;
		startTime=Date();
		console.log(startTime);

	}
	var currentTime=Date();
	console.log(currentTime,startTime);
	//console.log(Date(),'Data: ' + data);
	fs.appendFileSync(tail+'-jopajopa.txt', data);

});

// open errors will be emitted as an error event
port.on('error', function(err) {
	console.log('Error: ', err.message);
})