import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {logoutGoogle} from '../../firebase/auth/google';

export default function HomeScreen() {
  const name = auth().currentUser?.displayName;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola</Text>
      <Text style={styles.text}>{name}</Text>
      <Button title="Logout" onPress={() => logoutGoogle()} />
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
