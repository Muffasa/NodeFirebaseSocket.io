//module.exports = {app,http,io};
//var fs = require('fs');


//fs.readFileSync('socketIO.js');

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require("path");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var util = require('util');

var smsApi=require('./sms-api');
var DAL = require("./firebaseDB");
var BL = require("./BL");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cookieParser());

/////////////////////////////
var DataBase={};
var connectedClients=[];

io.on('connection', function(socket){

  console.log('a user connected');
    
     socket.on('identify', function(user_phone_number){
       var exist=false;
       for(var i=0;i<connectedClients.length;i++)
     {
       if(connectedClients[i].key==user_phone_number)
       {
         connectedClients[i].value = socket.id;
         exist = true;
       }
     }
     if(!exist)
     connectedClients.push({key:user_phone_number,value:socket.id});

    console.log('I am '+user_phone_number);
    socket.emit('identified');
  });

  socket.on('disconnect',function(){
    
     for(var i=0;i<connectedClients.length;i++)
     {
       if(connectedClients[i].value==socket.id)
       {
         connectedClients[i].key = null;
       }
     }
    
    connectedClients[connectedClients.indexOf(socket.id)]=null;
  });
  socket.on('MiniRegister', function(user_phone_number/*,callback*/){
    var phone_nember_exist = false;
     DAL.getUserByPhoneNumber(user_phone_number).then(function(user) {
        socket.emit('UserPhoneNumberExists');
    },function(){
      
    
        connectedClients.push({key:user_phone_number,value:socket.id});
        
        var sms_code = Math.floor((Math.random() * 10000) + 1001);
            var miniuser={
            user_phone_number:user_phone_number,
            sms_code:sms_code,
            current_socket_id:socket.id
        };
        
        DAL.miniRegister(miniuser,function(success){
          // if(typeof callback ==='function')
           //{
             if(success){
               //callback(user);
               smsApi.sendSms(user_phone_number,sms_code);
               socket.emit("MiniRegisterSuccess");
             }
             else{
               //callback();
               //socket.emit("MiniRegisterFaild")
             }
           //}
          
        }) 
    
    })
  });
  
  socket.on('ConfirmSmsCode',function(code,user_phone_number){
    DAL.getMiniUserByPhoneNumber(user_phone_number,function(tempUser){
      if(tempUser){
        if(code==tempUser.sms_code){
          //console.log("emit ")
            DAL.removeMiniUserByPhoneNumber(user_phone_number);
            socket.emit("SmsCodeConfirmed",BL.generateToken(tempUser));
        }
        else{
        socket.emit('WrongCode');
        }
      }
      
    });
    
  });

   /* socket.on('outgoingCall', function(to){
      
      var from="not set";
      for(var i = 0;i<connectedClients.length;i++){
        if(connectedClients[i].value==socket.id){
          from = connectedClients[i].key;
        }
      }
            var to_socket="not set";
      for(var i = 0;i<connectedClients.length;i++){
        if(connectedClients[i].key==to){
          to_socket = connectedClients[i].value;
        }
      }
      
      DAL.getUserByPhoneNumber(from).then(function(user)
      {//lHDKxa4VqBdVL3eJAAAC
        io.to(to_socket).emit("incomingCall","for lolz");
      });
      
      
    
  });*/
  

  socket.on('register', function(user_name){
    DataBase[user_name] = socket.id;
    console.log(user_name+' registered');
  });
  /*socket.on('ring', function(user_name){
    io.to(DataBase[user_name]).emit('triggerRing');
    console.log('ringing at '+user_name);
  });*/



  
    socket.on('addcampain', function(campain){
    DAL.addCampain(campain,function(allready_exists){
      console.log(allready_exists? 'The campain is allredy exist!':
                                    'Campaign succssesfuly added');
    });
  });
  
  
  console.log('socket:' +socket.id);
});

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
};

app.use(allowCrossDomain);

app.use('/', require('./routes/tokens-generator'));
app.use('/', require('./routes/services'));
app.use('/', require('./routes/DAL'));



app.listen(3333);
console.log('server is runing, listening on port 3333');
http.listen(3000, function(){
  console.log('sockets on :3000');
});

/*process.on('uncaughtException', function (err) {
    console.error(err.stack);
    console.log("Node NOT Exiting...");
});*/

/*setTimeout(function () {  
  util.puts('Throwing error now.');
  throw new Error('User generated fault.');
}, 5000);*/
module.exports = io;