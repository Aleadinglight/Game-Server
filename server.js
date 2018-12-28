const express = require('express');
const app = express();
const path = require('path');  
const WebSocket = require('ws');
const server = require('http').createServer(app);
const logger = require('morgan');

// Web socket

const wss = new WebSocket.Server({ server:server });
wss.on('connection', (ws)=> {
  //console.log(ws);
  console.log('Connection established.');
  ws.on('message', (message)=> {
    console.log('received: %s', message);
    var dataReceived = JSON.parse(message);
    console.log(dataReceived.a);
  });
  ws.send('something');
});

// Express

app.use(logger('dev'));
app.use(express.json());

// serve requests with /game to react build
app.use('/game', express.static(path.join(__dirname, './game_scenes/build'))); 

// handle all requests with /game to file react index.html
app.get('/game', (req, res) => {
	res.sendFile(path.join(__dirname, './game_scenes/build/client.html'));
});



app.get('/', (req, res) => {	
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

/** handle other requests to index.html */
// app.get('*', (req, res, next) => res.redirect('/'));

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Listening on port ${port}...`));