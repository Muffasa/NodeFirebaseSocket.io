var express = require('express');
var q = require("q");
var DAL = require("./firebaseDB");
var GF = require("./geofire");

var campaign_selector={};

campaign_selector.getCampaignByUid = function (uid){
    
    var d = q.defer();
    DAL.getUserByIdQ(uid).then(function(caller){
        
            if(caller.fixedCampaignId){
            //timeout
            d.resolve(caller.fixedCampaignId);
            }
            
            
            
            var user_language = caller.language;
            var user_location = caller.location;
            
            DAL.getCampaigns().then(function(allCampaigns){
                
                for (var campaign of allCampaigns) {
                    
                    if(campaign.location&&caller.location)
                    if(getDistance(caller.location,campaign.location)<campaign.location.radius){
                        d.resolve(campaign.cid);
                    }
                }
                
                d.resolve("-JvKjQFuwj5kZWtgT6sm")//default martefey electronica
            
            
           })
    },function(error){
        d.reject(error);
    });
    
    return d.promise;
    
    
}
function getDistance(loc1,loc2){
var R = 6371000; // metres
var φ1 = parseFloat(loc1.lat).toRad();
var φ2 = parseFloat(loc2.lat).toRad();
var Δφ = (parseFloat(loc2.lat)-parseFloat(loc1.lat)).toRad();
var Δλ = (parseFloat(loc2.lon)-parseFloat(loc1.lon)).toRad();

var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2) * Math.sin(Δλ/2);
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

var d = R * c;

return d;

};
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }

module.exports=campaign_selector;