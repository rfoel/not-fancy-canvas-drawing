import React, { Component } from 'react';
import styled from 'styled-components';

const CanvasWrapper = styled.div`
  width: 400px;
  height: 400px;
  border: 2px solid #eee;
  cursor: none;

  canvas:hover + div {
    opacity: 1;
  }
  canvas:active + div {
    // border-color: transparent;
  }
`;

const StyledCursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  box-sizing: content-box;
  border-radius: 50%;
  border: 2px solid #eee;
  pointer-events: none;
  user-select: none;
  cursor: none;
  background: #000;
  opacity: 0;
  transition: opacity 100ms;
`;

class Canvas extends Component {
  canvas = React.createRef();

  cursor = React.createRef();

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
    const x = event.pageX - event.target.offsetLeft;
    const y = event.pageY - event.target.offsetTop;
    this.cursor.current.style.top = `${event.pageY - 7}px`;
    this.cursor.current.style.left = `${event.pageX - 7}px`;
    if (!isDrawing) return;
    const ctx = this.canvas.current.getContext('2d');
    ctx.strokeStyle = '#000000';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    ctx.lineTo(x, y);
    ctx.stroke();
    this.setState({
      offsetX: x,
      offsetY: y
    });
  };

  render() {
    return (
      <CanvasWrapper>
        <canvas
          width="400px"
          height="400px"
          ref={this.canvas}
          onMouseDown={e => this.handleOnMouseDown(e)}
          onMouseMove={e => this.handleOnMouseMove(e)}
          onMouseUp={e => this.handleOnMouseUp(e)}
          onMouseLeave={e => this.handleOnMouseUp(e)}
        />
        <StyledCursor innerRef={this.cursor} />
      </CanvasWrapper>
    );
  }
}

export default Canvas;
