import React from 'react';
import {type NoAuthScreenProps} from '..';
import {StyledPressable, StyledText, StyledView, StyledImage} from '../styled';

const ejercicio = require('./assets/exercise.png');
const comida = require('./assets/comida.png');
const batido = require('./assets/batidos.png');
const musica = require('./assets/notas-musicales.png');

export default function IntroScreen({navigation}: NoAuthScreenProps<'Intro'>) {
  return (
    <StyledView className="flex-1 flex-col bg-orange-200 justify-between">
      {/* Header */}
      <StyledView className="mt-4">
        <StyledText className="text-4xl text-negro-azabache font-bold text-center mx-4">
          CREA TU RUTINA MATINAL
        </StyledText>
      </StyledView>

      {/* Content */}
      <StyledView className="flex-1 justify-around mt-2 ml-6 mr-6 -mb-2">
        {/* Division 1 */}
        <StyledView className="flex-row justify-start pl-6 pr-9 h-28 bg-blue-400 rounded-tl-3xl rounded-br-3xl shadow-lg shadow-[#000]">
          <StyledImage
            source={ejercicio}
            className="h-24 w-24 self-center p-10"
          />

          <StyledText className="text-black w-40 text-left self-center pl-8">
            HAZ EJERCICIO
          </StyledText>
        </StyledView>

        {/* Division 2 */}
        <StyledView className="flex-row justify-start pl-6 pr-9 h-28 bg-green-400 rounded-tl-3xl rounded-br-3xl shadow-lg shadow-[#000]">
          <StyledImage source={comida} className="h-24 w-24 self-center" />

          <StyledText className="text-negro-azabache w-40 text-left self-center pl-8">
            COCINA ALGO RICO
          </StyledText>
        </StyledView>

        {/* Division 3 */}
        <StyledView className="flex-row justify-start pl-6 pr-9 h-28 bg-orange-400 rounded-tl-3xl rounded-br-3xl shadow-lg shadow-[#000]">
          <StyledImage source={batido} className="h-24 w-24 self-center" />

          <StyledText className="text-negro-azabache self-center text-left w-40 pl-8 leading-5">
            PREPARA UN BATIDO NUTRITIVO
          </StyledText>
        </StyledView>

        {/* Division 4 */}
        <StyledView className="flex-row justify-start pl-6 pr-9 h-28 bg-pink-400 rounded-tl-3xl rounded-br-3xl shadow-lg shadow-[#000]">
          <StyledImage source={musica} className="h-24 w-24 self-center " />

          <StyledText className="text-negro-azabache w-40 text-left self-center pl-8 leading-5">
            PON MUSICA ALEGRE
          </StyledText>
        </StyledView>
      </StyledView>

      {/* Footer */}
      <StyledView className="flex">
        <StyledPressable
          android_ripple={{color: '#00000000'}}
          onPress={() => {
            navigation.navigate('Login');
          }}
          className="bg-purple-400 active:bg-purple-300 p-3 m-6 w-[80%] rounded-2xl items-center self-center shadow-lg shadow-gray-700">
          <StyledText className="font-semibold text-lg text-gray-200">
            SIGUIENTE
          </StyledText>
        </StyledPressable>
      </StyledView>
    </StyledView>
  );
}
