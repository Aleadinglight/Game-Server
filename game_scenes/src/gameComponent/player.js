import { Component } from 'react';

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width : props.width,
      height : props.height,
      x : props.x,
      y : props.y,
      ctx : props.ctx,
    };
    console.log(props);
  }

  drawPlayer = () => {
    console.log(this.state.x);
    this.state.ctx.fillStyle = "#FF0000";
    this.state.ctx.fillRect(this.state.x, this.state.y, this.state.width, this.state.height);
  }
}
