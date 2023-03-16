import auth from '@react-native-firebase/auth';
import React from 'react';
import {logoutGoogle} from '../../firebase/auth/google';
import {StyledPressable, StyledText, StyledView, StyledSwitch, StyledImage} from '../../styled';
import { useColorScheme } from 'nativewind';

const menu = require('../assets/menu.png');
const reloj = require('../assets/reloj.png');
const universidad = require('../assets/educacion.png');
const trabajo = require('../assets/maletin.png');
const personal = require('../assets/crecimiento.png');

function HomeScreen() {
  const name = auth().currentUser?.displayName;
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    // container
    <StyledView className="flex-col flex-1 p-3 items-center bg-beige-lino dark:bg-slate-400">

      {/* Header */}
      <StyledView className='flex-row self-start w-[100%] justify-between'>
        <StyledPressable
          android_ripple={{color: '#00000000'}}
          className="items-center text-white rounded-xl w-12 h-12 active:bg-[#80808060] dark:active:bg-[#dddddd60]">
          <StyledImage source={menu} className='bg-[#80808040] rounded-xl w-12 h-12 dark:bg-[#dddddd40]'></StyledImage>
        </StyledPressable>

        <StyledSwitch value={colorScheme === 'dark'} onChange={toggleColorScheme} className=''></StyledSwitch>
        

        <StyledPressable
          android_ripple={{color: '#fff'}}
          onPress={logoutGoogle}
          className="bg-[#3F51B5] w-[30%] rounded-2xl text-white">
          <StyledText className="font-bold pt-2 text-center text-lg text-[#fff]">
            Logout
          </StyledText>
        </StyledPressable>
        
      </StyledView>

      {/* content */}
      <StyledView className='flex-col gap-y-4 w-[100%] justify-evenly'>
        <StyledText className="text-center text-4xl font-bold text-gray-600 dark:text-teal-300">
          Hoy
        </StyledText>

        {/* aqui debe ir una lista scroll con todas las tareas del dia */}
        <StyledPressable
          android_ripple={{color: '#fff'}}
          onPress={logoutGoogle}
          className=" flex-row p-3 bg-[#98242860] self-center w-[90%] rounded-lg text-white">
          <StyledImage source={reloj} className='self-start rounded-xl w-12 h-12'></StyledImage>  
          <StyledView className='-mt-1 w-[80%] flex-col justify-center'>
            <StyledText className="font-bold text-center text-[#fff]">
              Tarea 1
            </StyledText>

            <StyledText className="text-center text-[#fff]">
              8am - 9pm         
            </StyledText>
          </StyledView>
        </StyledPressable>        

        <StyledPressable
          android_ripple={{color: '#fff'}}
          onPress={logoutGoogle}
          className=" flex-row p-3 bg-[#98242860] self-center w-[90%] rounded-lg text-white">
          <StyledImage source={reloj} className='self-start rounded-xl w-12 h-12'></StyledImage>  
          <StyledView className='-mt-1 w-[80%] flex-col justify-center'>
            <StyledText className="font-bold text-center text-[#fff]">
              Tarea 1
            </StyledText>

            <StyledText className="text-center text-[#fff]">
              8am - 9pm         
            </StyledText>
          </StyledView>
        </StyledPressable>  

        <StyledPressable
          android_ripple={{color: '#fff'}}
          onPress={logoutGoogle}
          className=" flex-row p-3 bg-[#98242860] self-center w-[90%] rounded-lg text-white">
          <StyledImage source={reloj} className='self-start rounded-xl w-12 h-12'></StyledImage>  
          <StyledView className='-mt-1 w-[80%] flex-col justify-center'>
            <StyledText className="font-bold text-center text-[#fff]">
              Tarea 1
            </StyledText>

            <StyledText className="text-center text-[#fff]">
              8am - 9pm         
            </StyledText>
          </StyledView>
        </StyledPressable>  

        <StyledPressable
          android_ripple={{color: '#fff'}}
          onPress={logoutGoogle}
          className=" flex-row p-3 bg-[#98242860] self-center w-[90%] rounded-lg text-white">
          <StyledImage source={reloj} className='self-start rounded-xl w-12 h-12'></StyledImage>  
          <StyledView className='-mt-1 w-[80%] flex-col justify-center'>
            <StyledText className="font-bold text-center text-[#fff]">
              Tarea 1
            </StyledText>

            <StyledText className="text-center text-[#fff]">
              8am - 9pm         
            </StyledText>
          </StyledView>
        </StyledPressable>  

        <StyledText className="text-center text-lg text-gray-600 dark:text-teal-300">
          {name}
        </StyledText>
      </StyledView>

      
      {/* Footer */}
      <StyledView>
        <StyledPressable
            android_ripple={{color: '#fff'}}
            onPress={logoutGoogle}
            className="bg-[#3F51B5] self-center w-[90%] rounded-lg text-white">
            <StyledText className="font-bold p-8 text-center text-[#fff]">
              Universidad
            </StyledText>
          </StyledPressable>     

      </StyledView>

    </StyledView>
  );
}

export default HomeScreen;
