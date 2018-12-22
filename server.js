const express = require('express');
const app = express();
const path = require('path');  
var server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {	
	res.sendFile(path.join(__dirname + './index.html'));
});

/** handle other requests to index.html */
app.get('*', (req, res, next) => res.redirect('/'));

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Listening on port ${port}...`));