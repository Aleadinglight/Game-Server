# Game Server

Some notes on reproduce steps.

## Requirements:

1. Install express, socket.io, nodemon.
```bash
npm init --yes
npm install --save express
npm install --save socket.io
npm install -g nodemon
```

2. Create a new react app inside `express`, install react socket.
```
create-react-app game_scenes
npm i react-websocket
```

3. Add this to react app `package.json`, ignored if there aren't any fetch request from client to express.
```json
    "proxy": "http://localhost:3000/"
```

4. Run server and react on two different command line.
```bash
nodemon server.js
npm start
```

5. Build React app and serve with express.