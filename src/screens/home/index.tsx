import auth from '@react-native-firebase/auth';
import React from 'react';
// import {Button} from 'react-native';
import {logoutGoogle} from '../../firebase/auth/google';
import {StyledPressable, StyledText, StyledView} from '../../styled';

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
      <StyledPressable
        android_ripple={{color: '#fff'}}
        onPress={logoutGoogle}
        className="bg-[#3F51B5] p-3 m-6 w-[80%] rounded-2xl items-center text-white">
        <StyledText className="font-bold text-lg text-[#fff]">
          Logout
        </StyledText>
      </StyledPressable>
    </StyledView>
  );
}

export default HomeScreen;
