import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  margin: 0 px;
  border: 2px solid #eee;
  outline: none;
  cursor: pointer;
  background: ${prop => prop.color};

  ${prop => prop.round && 'border-radius: 50%;'};
  ${prop => prop.active && 'border-color: #aaa;'};
`;

class Colors extends Component {
  state = {
    colors: ['#ffffff', '#0a0a0a', '#209cee', '#23d160', '#ffdd57', '#ff3860']
  };

  render() {
    const { colors } = this.state;
    const { selectedColor, onSelectedColorChange, brush } = this.props;

    return (
      <ColorsWrapper>
        <h2>Colors</h2>
        {colors.map(color => (
          <Color
            active={selectedColor === color}
            onClick={() => onSelectedColorChange(color)}
            key={color}
            color={color}
            round={brush === 'round'}
          />
        ))}
      </ColorsWrapper>
    );
  }
}

Colors.propTypes = {
  brush: PropTypes.string.isRequired,
  selectedColor: PropTypes.string.isRequired,
  onSelectedColorChange: PropTypes.func.isRequired
};

export default Colors;
