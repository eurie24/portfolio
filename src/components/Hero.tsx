import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 0 2rem;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 992px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 3rem;
  }
`;

const HeroText = styled.div`
  flex: 1;
`;

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid var(--accent);
  box-shadow: 0 10px 30px var(--shadow);
  
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--accent);
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  
  @media (max-width: 992px) {
    margin: 0 auto 2rem auto;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
`;

const PrimaryButton = styled(Button)`
  background-color: var(--accent);
  color: white;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(10, 61, 98, 0.2);
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: var(--text-primary);
  border: 2px solid var(--accent);
  
  &:hover {
    background-color: var(--accent);
    color: white;
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <HeroText>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            John Lloyd Andalajao
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Front-end Developer & UI/UX Designer
          </Subtitle>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            BSIT student specializing in Mobile and Web Applications. Passionate about creating beautiful, responsive, and user-friendly interfaces.
          </Description>
          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <PrimaryButton href="#contact">Contact Me</PrimaryButton>
            <SecondaryButton href="#projects">View Projects</SecondaryButton>
          </ButtonGroup>
        </HeroText>
        
        <HeroImage>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProfileImg src={require('../assets/profile.jpeg')} alt="John Lloyd Andalajao" />
          </motion.div>
        </HeroImage>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 