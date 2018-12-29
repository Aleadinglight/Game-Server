import React from 'react';
import Websocket from 'react-websocket';

class App extends React.Component {

  handleData(data) {
    alert(data);
  }
  handleOpen()  {
    alert("connected:)");
  }
  handleClose() {
    alert("disconnected:(");
  }

  sendMessage(message){
    this.refWebSocket.sendMessage(message);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.sendMessage("Hello")} >Send Message</button>
        <Websocket url='ws://localhost:3000' onMessage={this.handleData}
                onOpen={this.handleOpen} onClose={this.handleClose}
                reconnect={true} debug={true}
                ref={Websocket => {
                  this.refWebSocket = Websocket;
                }}/>
      </div>
    );
  }
}

export default App;