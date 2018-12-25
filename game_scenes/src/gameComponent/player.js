import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Player extends Component {
  
  state = {
    width: 100,
    height:100,
    x: 500,
    y: 500,
    ctx,
  };
  
  constructor(props) {
    super(props);
    this.state = {
      width = props.width,
      height = props.height,
      x = props.x,
      y = props.y,
      ctx = props.ctx,
    };
  }

  drawPlayer = () => {
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  render(){
    drawPlayer();
  }
}
