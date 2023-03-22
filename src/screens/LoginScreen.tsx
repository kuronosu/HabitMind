import React from 'react';
import {loginGoogle} from '../firebase/auth/google';
import {StyledView, StyledPressable, StyledText, StyledImage} from '../styled';

const login = require('./assets/login.png');
const google = require('./assets/google-login.png');

export default function LoginScreen() {
  return (
    <StyledView className="flex-1 flex-col justify-between pt-5 pb-8 bg-beige-lino">
      {/* Header */}
      <StyledView className="-mb-40">
        <StyledImage source={login} className="h-[60%] w-screen self-center" />
      </StyledView>

      {/* Content */}
      <StyledView className="flex flex-col m-8">
        <StyledText className="text-black font-bold text-4xl text-left">
          Inicio de Sesión
        </StyledText>
        <StyledText className="text-black text-justify pt-8 pb-8 text-xl font-light">
          Para empezar a usar la aplicacion y tomar control de tu tiempo,
          ingresa con tu cuenta de Google
        </StyledText>
      </StyledView>

      {/* Footer */}
      <StyledView className="self-center w-72">
        <StyledPressable
          android_ripple={{color: '#00000000'}}
          onPress={() =>
            loginGoogle()
              .then(() => console.log('Signed in with Google!'))
              .catch(error => {
                console.log(error);
              })
          }
          className="flex flex-row justify-center bg-gris-tormenta p-3 m-6 w-full rounded-2xl items-center self-center shadow-lg shadow-gray-700 active:bg-slate-400">
          <StyledImage source={google} className="w-10 h-10 mr-3" />
          <StyledText className="font-semibold text-lg text-gray-200">
            INGRESAR
          </StyledText>
        </StyledPressable>
      </StyledView>
    </StyledView>
  );
}
