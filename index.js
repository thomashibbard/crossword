var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/app',  express.static(__dirname + '/app'));
app.use('/dist',  express.static(__dirname + '/dist'));



app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', function(socket){
	console.log('user connected');
  socket.on('key', function(keyObj){
  	console.log('key', keyObj)
    io.emit('key', keyObj);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(2222, function(){
  console.log('listening on *:5555');
});



