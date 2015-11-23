
var express = require('express');
var twilio = require('twilio');
var FirebaseTokenGenerator = require("firebase-token-generator");
var DAL = require("../firebaseDB");
var router = express.Router();



router.get('/createFirebaseToken/:uid?', function(req, res) {
  
  
    var tokenGenerator = new FirebaseTokenGenerator("Cmf7xrUOsFPDtJqpTkOEHRa0E5ss0mtwSYN9xnvF");
    var user = DAL.getUserById(req.params.uid,function(user){
        if(user){
        var token = tokenGenerator.createToken({uid:String(user.uid)});
        DAL.addProperty(user.uid,"firebase_token_first_10",String(token).slice(0,10));
        
        res.send(token);
        }
        else{
            res.send("user do not exist");
        }
        
    });


});


router.get('/twilioTokenGen/:userPhoneNumber?', function(req, res) {
    
   
    var capability = new twilio.Capability(
       'AC13c8bc5cde5613c706cde6638665d2db',
        'bb96487cff1af4f655fd2068a0287b6a'
    );
        /*var capability = new twilio.Capability(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
    );*/
    

    capability.allowClientIncoming(req.params.userPhoneNumber);

    capability.allowClientOutgoing('AP1cadf539a83d36562bdd268bd96b8903');
 
 res.send(capability.generate());
    


});


module.exports = router;