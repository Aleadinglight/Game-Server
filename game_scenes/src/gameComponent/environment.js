import React, { Component } from 'react';

class Environment extends Component {
    state = {  }

    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
    }

    render() { 
        return (  
            <div >
                <canvas ref="canvas" 
                    style={{ border:'1px solid #000000', width:'100vw', height:'99vh'}}
                />
            </div>
        );
    }
}
 
export default Environment;