import React from 'react';
import { HeroContainer, HeroContent, HeroH1, HeroP, HeroImgWrapper, Image } from './HeroElements';
import PeopleTalkingImage from '../../images/people_talking.png';
import { Button } from '../ButtonElements';

const Hero = () => {
  return (
    <HeroContainer id='home'>
      <HeroContent>
        <HeroH1>Transforming Speech Fluency Through Technology</HeroH1>
        <HeroP>Discover how Eloquia enhances speech fluency through advanced AI and machine learning.</HeroP>
        <Button to='signup' primary='true' dark='true'>
          Get Started
        </Button>
      </HeroContent>
      <HeroImgWrapper>
        <Image src={PeopleTalkingImage} alt="People Talking" />
      </HeroImgWrapper>
    </HeroContainer>
  );
}

export default Hero;