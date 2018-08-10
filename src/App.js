import React, { Component } from 'react';
import styled from 'styled-components';

import Canvas from './Canvas';
import Brushes from './Brushes';
import BrushSize from './BrushSize';
import Colors from './Colors';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  h1 {
    color: #aaa;
    font-size: 2rem;
    text-align: center;
  }
`;

const OptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  > div {
    flex: 0 50%;
    margin 0 auto 20px auto;
  }
`;

class App extends Component {
  state = {
    selectedColor: '#0a0a0a',
    brush: 'square',
    size: 16
  };

  handleBrushChange = brush => {
    this.setState({ brush });
  };

  handleBrushSizeChange = add => {
    let { size } = this.state;
    if ((size < 60 && add) || (size > 6 && !add)) {
      size += add ? 10 : -10;
    }
    this.setState({ size });
  };

  handleSelectedColorChange = selectedColor => {
    this.setState({ selectedColor });
  };

  render() {
    const { brush, size, selectedColor } = this.state;

    return (
      <AppWrapper>
        <h1>Not Fancy Canvas Drawing</h1>
        <Canvas brush={brush} size={size} selectedColor={selectedColor} />
        <OptionsWrapper>
          <div>
            <Brushes brush={brush} onBrushChange={this.handleBrushChange} />
            <Colors
              brush={brush}
              selectedColor={selectedColor}
              onSelectedColorChange={this.handleSelectedColorChange}
            />
          </div>
          <BrushSize
            brush={brush}
            size={size}
            selectedColor={selectedColor}
            onBrushSizeChange={this.handleBrushSizeChange}
          />
        </OptionsWrapper>
      </AppWrapper>
    );
  }
}

export default App;
