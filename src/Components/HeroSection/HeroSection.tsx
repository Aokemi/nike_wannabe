import React from 'react';
import { HeroSection, HeroContent, HeroTitle, HeroSubtitle, CallToActionButton } from './style.ts';

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>Offre du sport</HeroTitle>
        <HeroSubtitle>
          Motive tes proches avec des cadeaux conçus pour les athlètes de haut niveau.
        </HeroSubtitle>
        <CallToActionButton href="#">Acheter</CallToActionButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;