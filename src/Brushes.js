import React, { Component } from 'react';
import styled from 'styled-components';

const BrushesWrapper = styled.div`
  h2 {
    flex: 1;
    color: #aaa;
    font-size: 1rem;
    text-align: center;
  }
`;

const SquareBrush = styled.button`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #eee;
  margin: 0 10px;
  outline: none;

  &:hover {
    border-color: #ccc;
  }

  ${prop => prop.active && 'border-color: #aaa;'};
`;

const RoundBrush = styled(SquareBrush)`
  border-radius: 50%;
`;

class Brushes extends Component {
  state = {
    brush: 'square'
  };

  render() {
    const { brush } = this.state;
    return (
      <BrushesWrapper>
        <h2>Brush Type</h2>
        <SquareBrush
          active={brush === 'square'}
          onClick={() => this.setState({ brush: 'square' })}
        />
        <RoundBrush active={brush === 'round'} onClick={() => this.setState({ brush: 'round' })} />
      </BrushesWrapper>
    );
  }
}

export default Brushes;
