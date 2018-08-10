import React from 'react';
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
  width: 300px;
  display: flex;
  justify-content: space-around;
`;

const App = () => (
  <AppWrapper>
    <Canvas />
    <OptionsWrapper>
      <Brushes />
      <Colors />
    </OptionsWrapper>
  </AppWrapper>
);

export default App;
