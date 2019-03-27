const five = require('johnny-five');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = 6000;

// Make a new Express app


const board = new five.Board();
let button = null;

board.on("ready", () => {
    button = new five.Button(2);
    io.on('connection', function (socket) {
        console.log('board')
        socket.emit('boardReady');
        button.on("press", function () {
            console.log('PRESS')
            socket.emit('buttonPress', 'Button pressed');
        });

    
        socket.on('disconnect', function (socket) {
            
          });

    });

});

board.on("exit", () => { 

});

app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/index.html')
});

server.listen(port, (err) => {
    if (err) {
        throw new Error('Something bad happened...');
    }
    console.log(`Server is listening on ${port}`);
});