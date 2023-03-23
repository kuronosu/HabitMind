import React from 'react';
import {StyledText, StyledView} from '../styled';

const Centered = ({text}: {text: string}) => (
  <StyledView className="flex-1 w-full h-full items-center justify-center">
    <StyledText className="text-2xl">{text}</StyledText>
  </StyledView>
);

export default Centered;
