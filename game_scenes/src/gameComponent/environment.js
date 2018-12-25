import React, { Component } from 'react';
import Player from './player';
import { cpus } from 'os';

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
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(10, 10, 20,20);
    }

    render() { 
        return (  
            <div >
                <canvas ref="canvas" 
                    style={{ border:'1px solid #000000', width:'99vw', height:'99vh'}}
                />
            </div>
        );
    }
}
 
export default Environment;