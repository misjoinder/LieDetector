/**
 * Copyright 2012 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var readline = require('readline');
var googleapis = require('googleapis');

var OAuth2Client = googleapis.OAuth2Client;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

exports.getAccessToken = function(oauth2Client, callback) {
  // generate consent page url
  var url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/prediction'
  });

  console.log('Visit the url: ', url);
  rl.question('Enter the code here:', function(code) {
    oauth2Client.getToken(code, function(err, tokens) {
      oauth2Client.credentials = tokens;
      callback && callback();
    });
  });
};