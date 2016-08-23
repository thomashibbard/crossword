var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/app',  express.static(__dirname + '/app'));


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', function(socket){
  socket.on('message', function(msg){
  	console.log('getting message', msg)
    io.emit('message', msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(5555, function(){
  console.log('listening on *:5555');
});



