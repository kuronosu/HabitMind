import {StyledComponent} from 'nativewind';
import React from 'react';
import {SafeAreaView} from 'react-native';
import MainStack from './navigation';

function App() {
  return (
    <StyledComponent component={SafeAreaView} tw="flex-1">
      <MainStack />
    </StyledComponent>
  );
}

export default App;
