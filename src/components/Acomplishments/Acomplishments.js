import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishment</SectionTitle>
    <Boxes>
      {data.map((ccard, index)=>(
        <Box key={index}>
          <BoxNum>{ccard.number}+</BoxNum>
          <BoxText>{ccard.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
