import styled from 'styled-components';

// Section principale
export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 80vh;
  background-image: url('https://finimize.com/_next/image?url=https%3A%2F%2Ffinimize-img.imgix.net%2Fhttps%253A%252F%252Fchivas-assets.s3-eu-west-1.amazonaws.com%252Fstatic%252Fimages%252FRDrop-Cover-Landscape-Nike.original.jpg%3Fixlib%3Dpython-3.1.2%26s%3D9f722cbcf244ef25c6f23dea4f38be81&w=3840&q=75');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

// Contenu (titre + sous-titre)
export const HeroContent = styled.div`
  text-align: center;
  color: white;
  z-index: 2;
`;

// Titre principal
export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
  color: white; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

// Sous-titre
export const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
  max-width: 600px;
  line-height: 1.6;
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
`;

export const CallToActionButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 2rem;
  background-color: white;
  color: black;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 25px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #aaa;
  }
`;
