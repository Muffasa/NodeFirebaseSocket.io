var express = require('express');
var DAL = require("../firebaseDB");
var campaign_selector = require("../campaign-selector");
var router = express.Router();





router.get('/getUidByFacebookId/:Facebook_id?', function(req, res) {
  
   DAL.getUidByFacebookId(req.params.Facebook_id).then(function(uid){
        res.send(uid);
      
  },function(){
      res.send("no user found");
  });
  
  
  


});

router.get('/getUidByPhoneNumber/:userPhoneNumber?', function(req, res) {
  
   DAL.getUidByPhoneNumber(req.params.userPhoneNumber).then(function(uid){
        res.send(uid);
      
  },function(){
      res.send("no user found");
  });
  
  
  

 
});
router.post('/CreateUser', function(req, res) {
  
   DAL.addUserQ(req.body.newUser).then(function(uid){
        res.send(uid);
      
  },function(){
      res.send("no user found");
  });
  
  
  


});
router.post('/mergeFullUser', function(req, res) {
  
   var data_to_add = req.body.data_to_add;
   var user_phone_number=req.body.user_phone_number;
   DAL.getUidByPhoneNumber(user_phone_number).then(function(user){
       if(user.isFull)
       res.send(user);
       else{
              DAL.getUidByPhoneNumber(user_phone_number).then(function(uid){
                   for(var prop in data_to_add){
                       DAL.addProperty(uid,prop,data_to_add[prop]);
                   }
                       DAL.addProperty(uid,"isFull",true);
                    DAL.getUserById(uid,function(fullUser){
                           if(fullUser)
                           {
                           res.send(fullUser);
                           }
                           else
                           {
                               res.writeHead(413, 'Faild To Update User Data', {'Content-Type': 'text/html'});
                                  res.end('<!doctype html><html><head><title>413</title></head><body>413: Faild To Update User Data</body></html>')
                           }
                                    
                    });
   

  
                });
           }
   });

  
 

});
router.post('/addProperty', function(req, res) {
  
  var test = req;
  
    DAL.addProperty(req.body.uid,req.body.propName,req.body.propValue);
    
    res.send("updated");

 
});

router.get('/DBworker', function(req, res) {
  
  var test = req;
  
  DAL.getUsers().then(function(allUsers){
      for(var i = 0; i<allUsers.length;i++){
          DAL.addProperty(allUsers[i].uid,"balance",0);
      }
      res.send("updated");
  }) 
    
    


});



module.exports = router;