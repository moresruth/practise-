import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
    
    <SectionTitle main center>
          Hi I'm <br/>
          Ruth  Mores
      </SectionTitle><SectionText>
      Hey! How nice of you to look at my personal site, Thank you!
      I am Front-End Developer that specializes at responsive web design.
    </SectionText>
    <Button onClick={()=> window.location ="https://google.com"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;