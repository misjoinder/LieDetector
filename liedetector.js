/**
  LieDetector by Misjoinder
  GPLv3 License
*/

require('./google-apachelicensed-oauth2.js');

var predictionAPIcalls = googleapis.discover('prediction', 'v1.6');

// call for a prediction
function returnPrediction(csv, callback) {
  predictionAPIcalls.execute(function(err, client) {
    var oauth2Client = new OAuth2Client(process.env.CLIENTID, process.env.CLIENTSECRET, process.env.REDIRECTURL);
    getAccessToken(oauth2Client, function() {
      client.prediction.trainedmodels.predict({ csvInstance: csv })
        .withAuthClient(oauth2Client)
        .execute(callback);
    });
  });
}