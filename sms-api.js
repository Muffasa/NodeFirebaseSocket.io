
(function(){
    var Q = require("q");
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var request = require('request');
    var smsApi={};
    
    smsApi.sendSms= function(to,code){
        var d = Q.defer();
        if(to.length<10)
        d.reject();
        
        var fixedTo=to.replace(new RegExp( "-0", "gi" ), "");
        
        request.get('https://rest.nexmo.com/sms/json?api_key=7be722e0&api_secret=e89df2c2&from=MoneyTunes&to='+fixedTo+'&text=Your varification code: '+code,
        function (error, response, body) {
            var test = body;
          if (!error && response.statusCode == 200) {
            console.log(body) // Show the HTML for the Google homepage.
          }
        })
        
        
        return d.promise;
         /* var xhr = new XMLHttpRequest();
          
          xhr.onreadystatechange = function() {
              var test = xhr.responseText;
              if(test){}
            if (xhr.readyState == 4) {
                if(xhr.status==200)
                d.resolve(true);
                else
                d.reject();
            }
            
          }
          
          xhr.open("GET","https://rest.nexmo.com/sms/json?api_key=7be722e0&api_secret=e89df2c2&from=MoneyTunes&to="+fixedTo+"&text=Your varification code: "+code,false);*/
        
    };
    
    module.exports=smsApi;
}());