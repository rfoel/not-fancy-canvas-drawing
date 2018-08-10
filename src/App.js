import React, { Component } from 'react';
import styled from 'styled-components';

import Canvas from './Canvas';
import Brushes from './Brushes';
import Colors from './Colors';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const OptionsWrapper = styled.div`
  display: flex;
  width: 400px;
  > div {
    flex: 1;
  }
`;

class App extends Component {
  state = {
    selectedColor: '#0a0a0a',
    brush: 'square'
  };

  handleBrushChange = brush => {
    this.setState({ brush });
  };

  handleSelectedColorChange = selectedColor => {
    this.setState({ selectedColor });
  };

  render() {
    const { brush, selectedColor } = this.state;

    return (
      <AppWrapper>
        <Canvas brush={brush} selectedColor={selectedColor} />
        <OptionsWrapper>
          <Brushes brush={brush} onBrushChange={this.handleBrushChange} />
          <Colors
            brush={brush}
            selectedColor={selectedColor}
            onSelectedColorChange={this.handleSelectedColorChange}
          />
        </OptionsWrapper>
      </AppWrapper>
    );
  }
}

export default App;
