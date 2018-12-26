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

3. add this to react app `package.json`
```json
    "proxy": "http://localhost:3000/"
```