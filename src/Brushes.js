import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BrushesWrapper = styled.div`
  width: 100%;
  text-align: center;

  h2 {
    flex: 1;
    color: #aaa;
    font-size: 1rem;
    text-align: center;
  }
`;

export const SquareBrush = styled.button`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #eee;
  margin: 0 10px;
  outline: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    border-color: #ccc;
  }

  ${prop => prop.active && 'border-color: #aaa;'};
`;

export const RoundBrush = styled(SquareBrush)`
  border-radius: 50%;
`;

const Brushes = props => {
  const { brush, onBrushChange } = props;

  return (
    <BrushesWrapper>
      <h2>Brush Type</h2>
      <SquareBrush active={brush === 'square'} onClick={() => onBrushChange('square')} />
      <RoundBrush active={brush === 'round'} onClick={() => onBrushChange('round')} />
    </BrushesWrapper>
  );
};

Brushes.propTypes = {
  brush: PropTypes.string.isRequired,
  onBrushChange: PropTypes.func.isRequired
};

export default Brushes;
