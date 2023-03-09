import auth from '@react-native-firebase/auth';
import React from 'react';
import {Button} from 'react-native';
import {logoutGoogle} from '../../firebase/auth/google';
import {StyledText, StyledView} from '../../styled';

function HomeScreen() {
  const name = auth().currentUser?.displayName;
  return (
    <StyledView className="flex-1 justify-center items-center">
      <StyledText className="text-center text-lg text-teal-900">
        Hola
      </StyledText>
      <StyledText className="text-center text-lg text-teal-900">
        {name}
      </StyledText>
      <Button title="Logout" onPress={() => logoutGoogle()} />
    </StyledView>
  );
}

export default HomeScreen;
