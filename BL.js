(function(){
    
    var BL={};
    
    BL.generateToken= function(tempUser){
        
        var token = "";
        token +=Math.floor((Math.random() * 1000000) + 100001);
        token += tempUser.sms_code;
        
        return token;
        
    };
    
    module.exports=BL;
}());