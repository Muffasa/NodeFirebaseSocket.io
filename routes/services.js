var express = require('express');
var ForecastIo = require('forecastio');
var DAL = require("../firebaseDB");
var CM = require("../convManager");
var campaign_selector = require("../campaign-selector");
var router = express.Router();



router.post('/addProperty', function(req, res) {
  
  var test = req;
  
    DAL.addProperty(req.body.uid,req.body.propName,req.body.propValue);
    
    res.send("updated");


});

router.get('/getUidByFacebookId/:Facebook_id?', function(req, res) {
  
   DAL.getUidByFacebookId(req.params.Facebook_id).then(function(uid){
        res.send(uid);
      
  },function(){
      res.send("no user found");
  });
  
  
  


});
router.get('/BindConvManagerToServer/:reciverId', function(req, res) {
  
   CM.bindToOngoingCall(req.params.reciverId).then(function(){
       res.sendStatus(200)
   },function(error){
       res.send(error);
   })
  

});
router.get('/CampaignSlector/:uid', function(req, res) {
  
   campaign_selector.getCampaignByUid(req.params.uid).then(function(cid){
     res.send(cid);
   },function(error){
     res.send(error)
   })
  

});
router.get('/geofireMap', function(req, res) {
  
   GF.init().then(function(maps){
     res.send(maps);
   },function(error){
     res.send(error);
   })
  
  


});
router.get('/Weather/:lat/:lon', function(req, res) {
  
var forecastIo = new ForecastIo('803fccd23763a6555da6b83cbc7a2a4f');
forecastIo.forecast(req.params.lat, req.params.lon, function(err, data) {
  if(err){
      console.log(err.message);
      res.send(err);
  }
    else{
  var info = JSON.stringify(data, null, 2);
  console.log(info);
  res.send(info);
    }
});


});

module.exports = router;