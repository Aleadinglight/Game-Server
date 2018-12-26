import React, { Component } from 'react';
import Player from './player';
import Websocket from 'react-websocket';

class Environment extends Component {
    state = {  }

    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        var propsForPlayer = {
            x : 300,
            y : 500,
            width : 100,
            height : 100,
            ctx : ctx,
        }
        var player = new Player(propsForPlayer);
        player.drawPlayer();
        console.log('now draw');
        ctx.translate(-0.5, -0.5);
        ctx.fillStyle = "#FF0000";
        ctx.strokeWidth = 1.0;
        ctx.fillRect(10, 10, 20,20);
    }

    render() { 
        return (  
            <div >
                <canvas ref="canvas" width="100vw" height="100vh"
                    style={{ border:'1px solid #000000'}}
                />
            </div>
        );
    }
}
 
export default Environment;