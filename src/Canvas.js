import React, { Component } from 'react';
import styled from 'styled-components';

const CanvasWrapper = styled.div`
  border: 2px solid #eee;
`;

class Canvas extends Component {
  canvas = React.createRef();

  state = {
    offsetX: null,
    offsetY: null,
    isDrawing: false
  };

  handleOnMouseDown = event => {
    event.persist();
    this.setState({
      isDrawing: true,
      offsetX: event.pageX - event.target.offsetLeft,
      offsetY: event.pageY - event.target.offsetTop
    });
  };

  handleOnMouseUp = () => {
    this.setState({ isDrawing: false });
  };

  handleOnMouseMove = event => {
    event.persist();
    const { offsetX, offsetY, isDrawing } = this.state;
    if (!isDrawing) return;
    const ctx = this.canvas.current.getContext('2d');
    ctx.strokeStyle = '#000000';
    ctx.lineJoin = 'square';
    ctx.lineCap = 'square';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    ctx.lineTo(event.pageX - event.target.offsetLeft, event.pageY - event.target.offsetTop);
    ctx.stroke();
    this.setState({
      offsetX: event.pageX - event.target.offsetLeft,
      offsetY: event.pageY - event.target.offsetTop
    });
  };

  render() {
    return (
      <CanvasWrapper>
        <canvas
          width="300"
          height="300"
          ref={this.canvas}
          onMouseDown={e => this.handleOnMouseDown(e)}
          onMouseMove={e => this.handleOnMouseMove(e)}
          onMouseUp={e => this.handleOnMouseUp(e)}
          onMouseLeave={e => this.handleOnMouseUp(e)}
        />
      </CanvasWrapper>
    );
  }
}

export default Canvas;
