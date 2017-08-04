var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

app.use('/assets',express.static(__dirname + '/assets'));
app.use('/js',express.static(__dirname + '/js'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/phasertest01.html');
});

io.on('connection', function(socket){
  socket.on('fire', function(msg){
    io.emit('fire', msg);
  });
  socket.on('move', function(msg){
    io.emit('move', msg);
  });
});

server.listen(port, function(){
  console.log('listening on *:' + port);
});
