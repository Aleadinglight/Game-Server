const express = require('express');
const app = express();
const path = require('path');  
const WebSocket = require('ws');
const server = require('http').createServer(app);

// Web socket

const wss = new WebSocket.Server({ server:server });
wss.on('connection', (ws)=> {
  console.log(ws);
  ws.on('message', (message)=> {
    console.log('received: %s', message);
  });

  ws.send('something');
});



// Express

app.use(express.json());
app.use(express.static(path.join(__dirname, '')));

app.get('/g', (req, res) => {	
	res.sendFile(path.join(__dirname + '/game_scenes/build/client.html'));
});

app.get('/', (req, res) => {	
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

/** handle other requests to index.html */
app.get('*', (req, res, next) => res.redirect('/'));

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Listening on port ${port}...`));