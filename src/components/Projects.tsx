import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaReact, FaHtml5, FaCss3Alt, FaJava, FaNodeJs, FaYoutube, FaMicrophone } from 'react-icons/fa';
import { SiJavascript, SiFlutter, SiTypescript, SiTailwindcss, SiRedux, SiMongodb, SiFirebase, SiDart, SiTensorflow } from 'react-icons/si';
import IconWrapper from './IconWrapper';

const ProjectsSection = styled.section`
  padding: 8rem 2rem;
  background-color: var(--bg-secondary);
`;

const ProjectsContainer = styled.div`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: var(--bg-primary);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px var(--shadow);
  transition: all 0.3s ease;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px var(--shadow);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 100%);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${ProjectCard}:hover &:before {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 1.8rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: var(--accent);
    transition: width 0.3s ease;
  }
  
  ${ProjectCard}:hover &:after {
    width: 60px;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
  line-height: 1.7;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  gap: 0.8rem;
`;

const TechBadge = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-secondary);
  border: 2px solid var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 6px var(--shadow);
  transition: all 0.3s ease;
  position: relative;
  font-size: 1.2rem;
  color: var(--accent);
  
  &:hover {
    transform: translateY(-3px) scale(1.1);
    border-color: var(--accent-light);
    box-shadow: 0 6px 12px var(--shadow);
  }
  
  &:before {
    content: attr(data-tip);
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--bg-primary);
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.7rem;
    color: var(--text-primary);
    white-space: nowrap;
    box-shadow: 0 3px 8px var(--shadow);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    pointer-events: none;
    z-index: 10;
  }
  
  &:hover:before {
    opacity: 1;
    visibility: visible;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: auto;
`;

const ProjectLink = styled.a`
  color: var(--text-primary);
  font-size: 1.3rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    color: var(--accent);
    transform: translateY(-2px);
    text-decoration: none;
  }
`;

const ProjectLinkText = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const FilterButton = styled.button<{ active: boolean }>`
  background-color: ${props => props.active ? 'var(--accent)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-primary)'};
  border: 2px solid ${props => props.active ? 'var(--accent)' : 'var(--border)'};
  padding: 0.6rem 1.2rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--accent)' : 'var(--bg-secondary)'};
    transform: translateY(-2px);
  }
`;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Function to get tech icon based on name
const getTechIcon = (tech: string) => {
  switch (tech.toLowerCase()) {
    case 'react':
      return <IconWrapper icon={FaReact} />;
    case 'javascript':
      return <IconWrapper icon={SiJavascript} />;
    case 'typescript':
      return <IconWrapper icon={SiTypescript} />;
    case 'html':
      return <IconWrapper icon={FaHtml5} />;
    case 'css':
      return <IconWrapper icon={FaCss3Alt} />;
    case 'flutter':
      return <IconWrapper icon={SiFlutter} />;
    case 'tailwind':
    case 'tailwindcss':
      return <IconWrapper icon={SiTailwindcss} />;
    case 'java':
      return <IconWrapper icon={FaJava} />;
    case 'redux':
      return <IconWrapper icon={SiRedux} />;
    case 'node.js':
    case 'nodejs':
      return <IconWrapper icon={FaNodeJs} />;
    case 'mongodb':
      return <IconWrapper icon={SiMongodb} />;
    case 'firebase':
      return <IconWrapper icon={SiFirebase} />;
    case 'dart':
      return <IconWrapper icon={SiDart} />;
    case 'ai/ml':
    case 'ai':
    case 'ml':
      return <IconWrapper icon={SiTensorflow} />;
    case 'speech recognition':
    case 'speech':
      return <IconWrapper icon={FaMicrophone} />;
    default:
      return tech.charAt(0).toUpperCase();
  }
};

// Sample project data
const projectsData = [
  {
    id: 1,
    title: 'PolyglAI - CMS',
    description: 'A comprehensive pronunciation assessment platform with AI-powered speech recognition and error detection. Features a web-based CMS for content management and a mobile app for 5-language pronunciation practice with precise scoring and multilingual support.',
    image: require('../assets/polyglai-thumbnail.png'),
    tech: ['React', 'TypeScript', 'Node.js', 'AI/ML', 'Speech Recognition'],
    github: '#',
    live: 'https://drive.google.com/file/d/1tsheo4XEKD4XzJvlhOGUttwq0moQTtwT/view?usp=sharing',
    category: 'web',
    hasVideo: true,
  },
  {
    id: 2,
    title: 'PolyglAI - Pronunciation Assessment App',
    description: 'A comprehensive pronunciation assessment platform with AI-powered speech recognition and error detection. Features a web-based CMS for content management and a mobile app for 5-language pronunciation practice with precise scoring and multilingual support.',
    image: require('../assets/polyglai-mobile.png'),
    tech: ['Flutter', 'Dart', 'AI/ML', 'Speech Recognition'],
    github: '#',
    live: 'https://drive.google.com/file/d/1brzoy1apyxnmgsyMAhLWY6c1AVLkR755/view?usp=sharing',
    category: 'mobile',
    hasVideo: true,
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);
    
  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <TitleContainer>
          <SectionTitle
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
          >
            Projects
          </SectionTitle>
        </TitleContainer>
        
        <FilterContainer>
          <FilterButton 
            active={filter === 'all'} 
            onClick={() => setFilter('all')}
          >
            All Projects
          </FilterButton>
          <FilterButton 
            active={filter === 'web'} 
            onClick={() => setFilter('web')}
          >
            Web Development
          </FilterButton>
          <FilterButton 
            active={filter === 'mobile'} 
            onClick={() => setFilter('mobile')}
          >
            Mobile Apps
          </FilterButton>
        </FilterContainer>
        
        <ProjectsGrid>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
            >
              <ProjectImage>
                <Image src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTech>
                  {project.tech.map(tech => (
                    <TechBadge 
                      key={tech} 
                      data-tip={tech}
                    >
                      {getTechIcon(tech)}
                    </TechBadge>
                  ))}
                </ProjectTech>
                <ProjectLinks>
                  <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                    <IconWrapper icon={project.hasVideo ? FaYoutube : FaExternalLinkAlt} />
                    <ProjectLinkText>{project.hasVideo ? 'Video Demo' : 'Live Demo'}</ProjectLinkText>
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects; 