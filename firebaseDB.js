var q = require("q");
var Firebase = require('firebase');
var BaseRef = new Firebase("https://mtdemo.firebaseio.com/");
var UsersRef = BaseRef.child("users");
var CampiansRef = BaseRef.child("campiagns");

var Campain = require("./Entities/Campain");
var UserProfile = require("./Entities/UserProfile");

var FBDB={};

FBDB.miniRegister = function(miniuser,callback){//add mini user
    var tempUsersRef=BaseRef.child('tempUsers');
    

    
    tempUsersRef.push(miniuser, function(error){
        
        if(error){
            if( typeof callback === 'function')
            {
                callback();
            }
        }
        else{
            if( typeof callback === 'function')
            {
                callback(true);
            }
        }
    });
    
};
FBDB.miniRegisterQ = function(miniuser){//add mini user
        var d = q.defer();
    var tempUsersRef=BaseRef.child('tempUsers');
    

    
    tempUsersRef.push(miniuser, function(error){
        
        if(error)
         d.reject(error);
        else
         d.resolve(true);
        
    });
    return d.promise;
    
};

FBDB.getMiniUserByPhoneNumber = function(phone_number,callback){
    var tempUsersRef=BaseRef.child('tempUsers');
    

    tempUsersRef.once('value',function(snapshot){
        snapshot.forEach(function(tempUser){
            if(tempUser.val().user_phone_number==phone_number){
                if(typeof callback === 'function'){
                    callback(tempUser.val());
                }
            }
        })
    });
    
    callback();
    
};
FBDB.getMiniUserByPhoneNumberQ = function(phone_number){
    var d =q.defer();
    var tempUsersRef=BaseRef.child('tempUsers');
    

    tempUsersRef.once('value',function(snapshot){
        snapshot.forEach(function(tempUser){
            if(tempUser.val().user_phone_number==phone_number){
                if(typeof callback === 'function'){
                    d.resolve(tempUser.val());
                }
            }
        })
        d.reject("no miniUser on the DB with this number: "+phone_number);
    });
    
    return d.promise;
    
};
FBDB.removeMiniUserByPhoneNumber = function(phone_number){
    var tempUsersRef=BaseRef.child('tempUsers');
    

    tempUsersRef.once('value',function(snapshot){
        snapshot.forEach(function(tempUser){
            if(tempUser.val().user_phone_number==phone_number){
                
                    var tempUserToRemoveRef=tempUsersRef.child(tempUser.key())
                    tempUserToRemoveRef.remove();
                
            }
        })
    });
    
    
    
};
FBDB.addUser = function(user,callback){

    var usersRef=BaseRef.child('users');
    

    
    usersRef.push(user, function(error){
        
        if(error){
            if( typeof callback === 'function')
            {
                callback();
            }
        }
        else{
            if( typeof callback === 'function')
            {
                callback(true);
            }
        }
    });
    
};
FBDB.addUserQ = function(user){
    var d=q.defer();
    var usersRef=BaseRef.child('users');
    
    userExist(user).then(function(){
        var userId=usersRef.push().key();
            if(userId){
               user.uid = userId; 
               usersRef.child(userId).set(user,function(error){
                error? d.reject(error):d.resolve(userId);
              })
            }  
            else{
                d.reject();
            }
    },function(error){
        d.reject(error);
    })
    
    
    

    return d.promise;
    
};
var userExist =function(User){
        var d =q.defer();
    var users = [];
        new Firebase('https://mtdemo.firebaseio.com/users').once('value', function (snapshot) {
            snapshot.forEach(function(refChild) {
                users.push(refChild.val());
                    });
             for (var user of users) {
                if(user.phone_number==User.phone_number){
                    d.reject("an accunt with this phone number allready exists");
                 }
             } 
        d.resolve();
        });
              
    return d.promise;
    
}
FBDB.getUidByPhoneNumber = function(phone_number){
    var d =q.defer();
    var users = [];
        new Firebase('https://mtdemo.firebaseio.com/users').once('value', function (snapshot) {
            snapshot.forEach(function(refChild) {
                users.push(refChild.val());
                    });
             for (var user of users) {
                if(user.phone_number==phone_number){
                    d.resolve(user.uid);
                 }
             } 
        d.reject();
        });
              
    return d.promise;
    
};
FBDB.getUidByFacebookId = function(facebook_id){
    var d =q.defer();
    var users = [];
        new Firebase('https://mtdemo.firebaseio.com/users').once('value', function (snapshot) {
            snapshot.forEach(function(refChild) {
                users.push(refChild.val());
                    });
             for (var user of users) {
                if(user.id==facebook_id){
                    d.resolve(user.uid);
                 }
             } 
        d.reject();
        });
              
    return d.promise;
    
};
FBDB.getUserByUUID = function(uuid,callback){
    var usersRef=BaseRef.child('users');
    

    usersRef.once('value',function(snapshot){
        snapshot.forEach(function(user){
            if(user.val().device_uuid==uuid){
                if(typeof callback === 'function'){
                    callback(user.val());
                }
            }
        })
    });
    
    callback();
    
};
FBDB.getUserByUUIDQ = function(uuid){
    var d=q.defer();
    var usersRef=BaseRef.child('users');
    

    usersRef.once('value',function(snapshot){
        snapshot.forEach(function(user){
            if(user.val().device_uuid==uuid){
                if(typeof callback === 'function'){
                    d.resolve(user.val());
                }
            }
        })
        d.reject("no user matched this UUID: "+uuid);
    });
    
    return d.promise;
    
};
FBDB.getUserByPhoneNumber = function(phone_number){
    
    var d =q.defer();
    if(phone_number=="+972-tom"||phone_number=="+972-ohad"){
        d.resolve("web is calling");
    }
    var users = [];
        new Firebase('https://mtdemo.firebaseio.com/users').once('value', function (snapshot) {
            snapshot.forEach(function(refChild) {
                users.push(refChild.val());
                    });
             for (var user of users) {
                if(user.phone_number==phone_number){
                    d.resolve(user);
                 }
             } 
        d.reject();
        });
              
    return d.promise;
    
};

FBDB.getUserById = function(id,callback){
    var result = null;
   var userRef= BaseRef.child('users/'+String(id));
   
   userRef.once('value',function(snapshot){
         result = snapshot.val();
             
               if(result){
                   if(typeof callback === 'function')
                   callback(result);
                }
                else{
                    if(typeof callback === 'function')
                   callback(result);
                }
            
    })
    


};
FBDB.getUserByIdQ = function(id){
    var result = null;
    var d = q.defer();
   var userRef= new Firebase("https://mtdemo.firebaseio.com/users/"+id);
   
   userRef.once('value',function(snapshot){
         result = snapshot.val();
             
               if(result)
                    d.resolve(result);
                else
                    d.reject("no user matched the id: " +id);
                
            
    })
    
    return d.promise;


};

FBDB.addProperty = function(id,propName,propValue){
    
    var newPropsObj = {};
    newPropsObj[propName]=propValue;
    BaseRef.child('users').child(id).update(newPropsObj);
}

FBDB.getUsers = function(){
    var d = q.defer();
      var usersRef=BaseRef.child('users');
    var result = [];

    usersRef.once('value',function(snapshot){
        snapshot.forEach(function(user){
            result.push(user.val())
        })
        d.resolve(result);
    },function(error){
        d.reject(error);
    });
    return d.promise;
}
//////////////////////////////////
FBDB.getCampaigns = function(){
    var d = q.defer();
      var campaignsRef=BaseRef.child('campaigns');
    var result = [];

    campaignsRef.once('value',function(snapshot){
        snapshot.forEach(function(campaign){
            result.push(campaign.val())
        })
        d.resolve(result);
    },function(error){
        d.reject(error);
    });
    return d.promise;
}
FBDB.addCampain=function (campain,callback){
   
            CampiansRef.once('value',function(snapshot){
            var isExist = snapshot.forEach(function(childSnapshot){
               if(campain.Name==childSnapshot.val().Name){
                   console.log("campain allredy exists on the DB");
                  return true; //I want to break the addCampain function from here!
               }
             });
             callback(isExist);
            });
       
       var newCampainRef =  CampiansRef.push();
       campain.id = newCampainRef.key();
       newCampainRef.set(campain,function(error){
           if(error){
               console.log("an error occured the campain did not add to the DB, error:" ,+error);
               return false;
           }
           else{
               console.log("campain succssesfuly added to the DB");
               return true;
           }
       });
   
};

FBDB.removeCampain=function (campain){
  if(campain instanceof Campain){ 
       CampiansRef.once('value',function(snapshot){
           snapshot.forEach(function(childSnapshot){
                
               if(campain.id==childSnapshot.key()){
                   childSnapshot.remove();
                   console.log("campain removed succssefuly");
                   return true;
               }
           });
           console.log("the campaing is not on the DB to remove");
           return false;
       });
      }
   else{
       console.log("bad input");
       return false;
   }
};

FBDB.editCampain=function (campain){
  if(campain instanceof Campain){ 
       CampiansRef.once('value',function(snapshot){
           snapshot.forEach(function(childSnapshot){
                
               if(campain.id==childSnapshot.key()){
                   childSnapshot.set(campain);
                   console.log("campain updatted succssefuly");
                   return true;
               }
           });
           console.log("the campaing is not on the DB to remove");
           return false;
       });
  }
   else{
       console.log("bad input");
       return false;
   }
};

FBDB.getCampainById=function (campain_id){
   
      CampiansRef.once('value',function(snapshot){
       snapshot.forEach(function(childSnapshot){
            
           if(campain_id==childSnapshot.key()){
              
               console.log("campain obtained succssefuly");
               return childSnapshot.val();
           }
       });
       console.log("the requested campain id is not exists on the DB");
       return false;
   });
};

FBDB.getCampainByCampainName=function (campain_name){
   
      CampiansRef.once('value',function(snapshot){
       snapshot.forEach(function(childSnapshot){
            var campian = childSnapshot.val();
           if(campain_name==campian.Name){
              
               console.log("campain obtained succssefuly");
               return campian;
           }
       });
       console.log("the requested campain name is not exists on the DB");
       return false;
   });
};

module.exports=FBDB;