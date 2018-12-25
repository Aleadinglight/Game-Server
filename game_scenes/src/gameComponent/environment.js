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
                <canvas ref="canvas" width = {640} height = {420}
                    style="border:1px solid #000000;"
                />
            </div>
        );
    }
}
 
export default Environment;