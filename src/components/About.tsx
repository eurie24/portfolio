import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 8rem 2rem;
  background-color: var(--bg-secondary);
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--accent);
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const AboutContent = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const AboutText = styled.div`
  flex: 1;
`;

const AboutImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const StyledImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 30px var(--shadow);
`;

const AboutParagraph = styled(motion.p)`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.8;
`;

const AboutList = styled(motion.ul)`
  list-style-type: none;
  margin-bottom: 2rem;
`;

const AboutListItem = styled.li`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  
  &:before {
    content: '▹';
    color: var(--accent);
    margin-right: 10px;
  }
`;

const HighlightText = styled.span`
  color: var(--accent);
  font-weight: 600;
`;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <TitleContainer>
          <SectionTitle
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
          >
            About Me
          </SectionTitle>
        </TitleContainer>
        
        <AboutContent>
          <AboutText>
            <AboutParagraph
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={fadeInUp}
            >
              Hello! I'm <HighlightText>John Lloyd Andalajao</HighlightText>, a passionate BSIT student specializing in Mobile and Web Applications. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
            </AboutParagraph>
            
            <AboutParagraph
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={fadeInUp}
            >
              My interest in web development started back when I was in college, where I first learned HTML & CSS. Fast forward to today, I've had the privilege to study and work on various projects that have helped me improve my skills.
            </AboutParagraph>
            
            
            <AboutParagraph
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              variants={fadeInUp}
            >
              I'm currently focused on expanding my knowledge in Front-end development and UI/UX Design, with the goal of creating intuitive and engaging user experiences.
            </AboutParagraph>
          </AboutText>
          
          <AboutImage>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={fadeInUp}
            >
              <StyledImage src={require('../assets/profile.jpeg')} alt="John Lloyd Andalajao" />
            </motion.div>
          </AboutImage>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 