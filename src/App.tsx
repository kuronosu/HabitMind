import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MainStack from './navigation';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainStack />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
});
