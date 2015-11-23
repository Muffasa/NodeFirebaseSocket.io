var GeoFire = require("geofire");
var Firebase = require("firebase");
var q = require("q");
var geofire_export={};
    var rootRef = new Firebase("https://mtdemo.firebaseio.com/");
    var usersGeofire = new GeoFire(rootRef.child("geomap").child("users"));
    var campaignsGeofire = new GeoFire(rootRef.child("geomap").child("campaigns"));
    
    
geofire_export.init = function(){
    var d = q.defer();
    var result={};
    addUsersToGeofire().then(function(addedUsers){
        result.addedUsers = addedUsers;
        addCampaignsToGeofire().then(function(addedCampaigns){
            result.addedCampaigns=addedCampaigns;
            d.resolve(result);
        })
    })
    return d.promise;

    
    
    
    
}
geofire_export.usersGeofire=usersGeofire;
geofire_export.campaignsGeofire=campaignsGeofire;
var addUsersToGeofire = function(){
    var d =q.defer();
    var users = [];
    var addedUsers=[];
        new Firebase('https://mtdemo.firebaseio.com/users').on('value', function (snapshot) {
            users = [];
            snapshot.forEach(function(refChild) {
                users.push(refChild.val());
                    });
             for (var user of users) {
                if(user.location){
                    usersGeofire.set(user.uid,[parseFloat(user.location.lat),parseFloat(user.location.lon)]).then(function(){
                        console.log("user"+user.phone_number+ " added to the geomap");
                        addedUsers.push(user);
                    }, function(error){
                        console.log("add users to geofire Error: " + error);
                        d.reject(error);
                    });
                 }
             } 
             d.resolve(addedUsers);
        
        });
              
    return d.promise;
    
};
var addCampaignsToGeofire = function(){
    var d =q.defer();
    var campaigns = [];
    var addedCampaigns=[];
        new Firebase('https://mtdemo.firebaseio.com/campaigns').on('value', function (snapshot) {
            campaigns = [];
            snapshot.forEach(function(refChild) {
                campaigns.push(refChild.val());
                    });
             for (var campaign of campaigns) {
                if(campaign.location){
                    campaignsGeofire.set(campaign.cid,[parseFloat(campaign.location.lat),parseFloat(campaign.location.lon)]).then(function(){
                        console.log("campaign"+campaign.name+ " added to the geomap");
                        addedCampaigns.push(campaign);
                    }, function(error){
                        console.log("add campaigns to geofire Error: " + error);
                        d.reject(error);
                    });
                 }
             }
             d.resolve(addedCampaigns);
        
        });
              
    return d.promise;
    
};

module.exports=geofire_export;

