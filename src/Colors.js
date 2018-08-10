import React, { Component } from 'react';
import styled from 'styled-components';

const ColorsWrapper = styled.div`
  h2 {
    flex: 1;
    color: #aaa;
    font-size: 1rem;
    text-align: center;
  }
`;

const Color = styled.button`
  width: 20px;
  height: 20px;
  border: 0;
  background: ${prop => prop.color};
`;

class Colors extends Component {
  state = {
    colors: ['#0a0a0a', '#209cee', '#23d160', '#ffdd57', '#ff3860']
  };

  render() {
    const { colors } = this.state;
    return (
      <ColorsWrapper>
        <h2>Colors</h2>
        {colors.map(color => (
          <Color color={color} />
        ))}
      </ColorsWrapper>
    );
  }
}

export default Colors;
