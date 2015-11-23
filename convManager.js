var q = require("q");
var Firebase = require('firebase');
var DAL = require("./firebaseDB");
var campaign_selector = require("./campaign-selector");
var BaseRef = new Firebase("https://mtdemo.firebaseio.com/");


var CM={};

CM.bindToOngoingCall = function(reciverId){
    var d =q.defer();
    var currentCM = BaseRef.child("users").child(reciverId).child("convManager");
    
    currentCM.on("value",function(snapshot){
        var snapCM = snapshot.val();
        if(snapCM.status=="connecting"&&!snapCM.currentCampaign){
            
            campaign_selector.getCampaignByUid(snapCM.peerCaller.uid).then(function(cid){
                currentCM.child("currentCampaignId").transaction(function(beforeChange){
                    return cid;
                    currentCM.child("currentCampaign").transaction(function(beforeChange){
                        DAL.getCampainById(cid).then(function(campaign){
                            d.resolve();
                            return campaign;
                        },function(error){
                        d.reject(error);
                        })
                    })
                },function(error){
                d.reject(error);
                });
                
                                                /*currentCM.child("campaignStatus").transaction(function(beforeChange){
                                                    if(beforeChange=="none")
                                                    return "runing";
                                                    else
                                                    return beforeChange;
                                                })*/
            },function(error){
                d.reject(error);
            })
        }
                                                    /*if(snapCM.campaignStatus=="aboutToFinish"){
                                                        campaign_selector.getCampaignByUid(snapCM.peerCaller.uid).then(function(cid){
                                                            insertionReady(cid);
                                                        })
                                                    }*/
    });
    return d.promise;
    
}
var insertionReady = function (cid){
    
}
module.exports=CM;