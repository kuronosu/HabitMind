import 'react-native-gesture-handler';
import {StyledComponent} from 'nativewind';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import MainNavigation from './navigation';

function App() {
  return (
    <PaperProvider>
      <StyledComponent component={SafeAreaView} tw="flex-1">
        <MainNavigation />
      </StyledComponent>
    </PaperProvider>
  );
}

export default App;
