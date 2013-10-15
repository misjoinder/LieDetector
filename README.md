LieDetector
===========

Predictive analytics for campaign promises

## What is it for?

Ever like what a politician says on the campaign trail? Of course you have.

Did you wonder if he or she was lying to you? Of course you did.

What if you could analyze the transcript of a politician's speech and find the lies?

## How does the prediction happen?

The
<a href="https://developers.google.com/prediction/">Google Prediction API</a>
is used to develop a computational model of unreliable words and phrases, similar
to how Gmail detects spam messages. You can then feed new sentences into the model
and get a probability that they are TRUE, MISLEADING, or FALSE.

## Running LieDetector

Populate statements.csv with a spreadsheet with the following three columns:

    TRUE/MISLEADING/FALSE , USA-DEM/USA-REP , "Text of a statement"

Follow directions in the
<a href="https://developers.google.com/prediction/docs/getting-started">Getting Started section</a>
of the Google Prediction API:

* Create a Google Account and a project on <a href="https://cloud.google.com/console">Google Cloud Console</a>

* In the API Console, enable billing, the Google Cloud Storage API, and the Google Prediction API.

Follow directions in the
<a href="https://developers.google.com/prediction/docs/hello_world">Hello World section</a>
of the Google Prediction API:

* Upload statements.csv to a new bucket in Google Cloud Storage

* Open the API Explorer and train a new prediction model

## LieDetector in realtime

Hardware devices can be developed using a speech-to-text device such as
<a href="http://www.bitsophia.com/BitVoicer.aspx">BitVoicer</a>
or a Closed-Captioning-to-Text device such as the
<a href="http://nootropicdesign.com/ve/">Video Experimenter Shield</a>
. Then your app can use the 
<a href="https://developers.google.com/prediction/docs/reference/v1.6/trainedmodels/predict">Google Prediction API</a>
to request a prediction on speech in realtime.

--
All words and code licensed under GPLv3
--