/**
  LieDetector by Misjoinder
  GPLv3 License
*/

var googleapis = require('googleapis');
var oauth2 = require('./google-apachelicensed-oauth2.js');

var predictionAPIcalls = googleapis.discover('prediction', 'v1.6');

// call for a prediction
function returnPrediction(csv, callback) {
  predictionAPIcalls.execute(function(err, client) {
    var oauth2Client = new googleapis.OAuth2Client(process.env.CLIENTID, process.env.CLIENTSECRET, process.env.REDIRECTURL);
    oauth2.getAccessToken(oauth2Client, function() {
      client.prediction.trainedmodels.predict({ id: process.env.MODELID, csvInstance: csv })
        .withAuthClient(oauth2Client)
        .execute(callback);
    });
  });
}
returnPrediction();