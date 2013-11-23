/**
  LieDetector by Misjoinder
  GPLv3 License
*/

var googleapis = require('googleapis');

var SerialPort = require('serialport').SerialPort;

var oauth2 = require('./google-apachelicensed-oauth2.js');

var predictionAPIcalls = googleapis.discover('prediction', 'v1.6');

// call for a prediction
function returnPrediction(csv, callback) {
  csv = csv.split("|"); // separates political party and statement columns
  predictionAPIcalls.execute(function(err, client) {
    var oauth2Client = new googleapis.OAuth2Client(process.env.CLIENTID, process.env.CLIENTSECRET, process.env.REDIRECTURL);
    oauth2.getAccessToken(oauth2Client, function() {
      client.prediction.trainedmodels.predict({ id: process.env.MODELID, csvInstance: csv })
        .withAuthClient(oauth2Client)
        .execute(callback);
    });
  });
}

var serialPort = new SerialPort("/dev/tty-usbserial1", {
  baudrate: 115200
}).on('data', function(data) {
  returnPrediction(data, function(response) {
     serialPort.write(response + "\n", function(err, results) {
     });
  });
});

