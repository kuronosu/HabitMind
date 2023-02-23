import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {loginGoogle} from '../firebase/auth/google';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Button
        title="Login"
        onPress={() =>
          loginGoogle()
            .then(() => console.log('Signed in with Google!'))
            .catch(error => {
              console.log(error);
            })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
