import React from 'react';
import {Button, View, Image, Text} from 'react-native';
import {loginGoogle} from '../firebase/auth/google';
import { StyledComponent } from 'nativewind';


const login = require("./assets/login.png");

export default function LoginScreen() {
  return (

    <StyledComponent component={View} className='flex-1 flex-col justify-between pt-5 pb-8 bg-beige-lino'>
      {/* Header */}
      <StyledComponent component={View} className='-mb-32'>
        <StyledComponent component={Image} source={login} className='h-72 w-screen self-center'></StyledComponent>
      </StyledComponent>

      {/* Content */}
      <StyledComponent component={View} className='flex flex-col m-8'>
        <StyledComponent component={Text} className='text-black font-bold text-4xl text-left'>Inicio de Sesión</StyledComponent>
        <StyledComponent component={Text} className='text-black text-left pt-8 pb-8 text-xl font-light'>Para empezar a acceder a las funciones ingresa con tu cuenta de google</StyledComponent>
      </StyledComponent>

      {/* Footer */}
      <StyledComponent component={View} className='self-center w-72'>
        <View>
            <Button
              title="Ingresar"
              onPress={() =>
                loginGoogle()
                  .then(() => console.log('Signed in with Google!'))
                  .catch(error => {
                    console.log(error);
                  })
              }
            />
          </View>
      </StyledComponent>
        
    </StyledComponent>
  );
}

