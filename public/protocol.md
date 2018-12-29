# Protocol

## Server 

Server receives request from client controller and out put game scene. The game scene will only send one message for the first time it opens. If there are many scenes (many users open the browser at same time) then the server will broadcast messages to all of them.

## Client

Client connects with server using Flutter web socket channel. The `.json` message format for a player to move left is:

```json
{
    "type":"client",
    "id": 1,
    "message":"left",
}
```

The purpose of `id` is to let the server knows which one is connecting to the server. The server will store a map <id, connection> for processing messages.

## GameScene

Game scenes connect to server using react-websocket. There is only one message to identity that it is a scene:

```json
{
    "type":"gameScene",
}
```

## Process

1. Client and GameScene connected to Server.

2. Server stores the information of Client into a map<id, connection>

3. Every time Client send message informing the player move to Server, the Server broadcast the information to all the browsers. The browser update the game state based on the broadcasted information.