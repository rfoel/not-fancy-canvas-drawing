import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SquareBrush, RoundBrush } from './Brushes';

const BrushSizeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;

  h2 {
    flex: 1;
    color: #aaa;
    font-size: 1rem;
    text-align: center;
  }
`;

const BrushWrapper = styled.div`
  flex: 0 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  height: 100px;

  > button {
    background: ${prop => prop.background};
    cursor: default;
    border-color: #ccc;
    width: ${prop => prop.size}px;
    height: ${prop => prop.size}px;
    box-sizing: content-box;
    &:hover {
      border-color: #ccc;
    }
  }
`;

const ButtonsWrapper = styled.div`
  flex: 50% 0;
`;

const StyledButton = styled.button`
  display: inline-block;
  padding: 5px 10px;
  border: 2px solid #eee;
  margin: 0 14px;
  outline: none;
  cursor: pointer;
  font-size: 1.2rem;
  background: #fff;

  &:hover {
    background: #eee;
    border-color: #ccc;
  }

  &:active {
    background: #ddd;
    border-color: #bbb;
  }
`;

const BrushSize = props => {
  const { brush, size, selectedColor, onBrushSizeChange } = props;

  return (
    <BrushSizeWrapper>
      <h2>Brush Size</h2>
      <BrushWrapper size={size} background={selectedColor}>
        {brush === 'square' ? <SquareBrush /> : <RoundBrush />}
      </BrushWrapper>
      <ButtonsWrapper>
        <StyledButton type="button" onClick={() => onBrushSizeChange(false)}>
          -
        </StyledButton>
        <StyledButton type="button" onClick={() => onBrushSizeChange(true)}>
          +
        </StyledButton>
      </ButtonsWrapper>
    </BrushSizeWrapper>
  );
};

BrushSize.propTypes = {
  brush: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  selectedColor: PropTypes.string.isRequired,
  onBrushSizeChange: PropTypes.func.isRequired
};

export default BrushSize;
