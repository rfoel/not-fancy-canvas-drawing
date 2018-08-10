import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SquareBrush } from './Brushes';

const CanvasWrapper = styled.div`
  width: 500px;
  height: 300px;
  border: 2px solid #eee;
  cursor: none;

  canvas:hover + button {
    opacity: 1;
  }
  canvas:active + div {
    // border-color: transparent;
  }
`;

const StyledCursor = styled(SquareBrush)`
  position: fixed;
  top: 0;
  left: 0;
  width: ${prop => prop.size}px;
  height: ${prop => prop.size}px;
  box-sizing: content-box;
  border: 2px solid #eee;
  pointer-events: none;
  user-select: none;
  cursor: none;
  opacity: 0;
  margin: 0;
  padding: 0;
  transition: opacity 100ms;
  background: ${prop => prop.background};
  transform: translate(-50%, -50%);

  ${prop => prop.round && 'border-radius: 50%;'};
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
    const { brush, size, selectedColor } = this.props;

    event.persist();
    const { offsetX, offsetY, isDrawing } = this.state;
    const x = event.pageX - event.target.offsetLeft;
    const y = event.pageY - event.target.offsetTop;
    this.cursor.current.style.top = `${event.pageY}px`;
    this.cursor.current.style.left = `${event.pageX}px`;
    if (!isDrawing) return;
    const ctx = this.canvas.current.getContext('2d');
    ctx.strokeStyle = selectedColor;
    ctx.lineJoin = brush;
    ctx.lineCap = brush;
    ctx.lineWidth = size;
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
    const { brush, size, selectedColor } = this.props;
    return (
      <CanvasWrapper>
        <canvas
          width="500px"
          height="300px"
          ref={this.canvas}
          onMouseDown={e => this.handleOnMouseDown(e)}
          onMouseMove={e => this.handleOnMouseMove(e)}
          onMouseUp={e => this.handleOnMouseUp(e)}
          onMouseLeave={e => this.handleOnMouseUp(e)}
        />
        <StyledCursor
          round={brush === 'round'}
          size={size}
          background={selectedColor}
          innerRef={this.cursor}
        />
      </CanvasWrapper>
    );
  }
}

Canvas.propTypes = {
  brush: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  selectedColor: PropTypes.string.isRequired
};

export default Canvas;
