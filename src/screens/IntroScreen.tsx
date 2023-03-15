import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import {type NoAuthScreenProps} from '..';
import {StyledComponent} from 'nativewind';

const ejercicio = require('./assets/exercise.png');
const comida = require('./assets/comida.png');
const batido = require('./assets/batidos.png');
const musica = require('./assets/notas-musicales.png');

export default function IntroScreen({navigation}: NoAuthScreenProps<'Intro'>) {
  return (
    <StyledComponent
      component={View}
      className="flex-1 flex-col bg-amber-100 justify-between">
      {/* Header */}
      <StyledComponent component={View} tw="mt-8">
        <StyledComponent
          component={Text}
          tw="text-4xl text-black font-bold text-center">
          CREA TU RUTINA MATINAL
        </StyledComponent>
      </StyledComponent>

      {/* Content */}
      <StyledComponent
        component={View}
        className="flex-1 justify-evenly ml-6 mr-6">
        {/* Division 1 */}
        <StyledComponent
          component={View}
          className="flex-row justify-start pl-6 pr-9 h-28 bg-blue-500 rounded-tl-3xl rounded-br-3xl">
          <StyledComponent
            component={Image}
            source={ejercicio}
            className="h-24 w-24 self-center p-10"
          />

          <StyledComponent
            component={Text}
            className="text-black w-40 text-left self-center pl-8">
            HAZ EJERCICIO
          </StyledComponent>
        </StyledComponent>

        {/* Division 2 */}
        <StyledComponent
          component={View}
          className="flex-row justify-start pl-6 pr-9 h-28 bg-green-500 rounded-tl-3xl rounded-br-3xl">
          <StyledComponent
            component={Image}
            source={comida}
            className="h-24 w-24 self-center"
          />

          <StyledComponent
            component={Text}
            className="text-black w-40 text-left self-center pl-8">
            COCINA ALGO RICO
          </StyledComponent>
        </StyledComponent>

        {/* Division 3 */}
        <StyledComponent
          component={View}
          className="flex-row justify-start pl-6 pr-9 h-28 bg-orange-500 rounded-tl-3xl rounded-br-3xl">
          <StyledComponent
            component={Image}
            source={batido}
            className="h-24 w-24 self-center"
          />

          <StyledComponent
            component={Text}
            className="text-black self-center text-left w-40 pl-8 leading-5">
            PREPARA UN BATIDO NUTRITIVO
          </StyledComponent>
        </StyledComponent>

        {/* Division 4 */}
        <StyledComponent
          component={View}
          className="flex-row justify-start pl-6 pr-9 h-28 bg- rounded-tl-3xl rounded-br-3xl">
          <StyledComponent
            component={Image}
            source={musica}
            className="h-24 w-24 self-center "
          />

          <StyledComponent
            component={Text}
            className="text-black w-40 text-left self-center pl-8 leading-5">
            PON MUSICA ALEGRE
          </StyledComponent>
        </StyledComponent>
      </StyledComponent>

      {/* Footer */}
      <StyledComponent component={View} className="flex">
        <Button
          title="Siguiente"
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
      </StyledComponent>
    </StyledComponent>
  );
}
