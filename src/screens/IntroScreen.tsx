import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {type NoAuthScreenProps} from '..';

export default function IntroScreen({navigation}: NoAuthScreenProps<'Intro'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Intro</Text>
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
