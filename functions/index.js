const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.simpleInterest = functions.https.onRequest((request, response) => {
  function SimpleInterest(P,i,t) {
    this.principal = P;
    this.rate = i;
    this.time = t;
    this.interest = P * i * t;
  }
  var obj = new SimpleInterest(request.query.p,request.query.r,request.query.t);
  response.header('Content-Type','application/json');
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', 'Content-Type');
  response.send(obj);
});


