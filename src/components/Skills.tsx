import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiFlutter, SiTypescript, SiTailwindcss, SiNodedotjs } from 'react-icons/si';
import IconWrapper from './IconWrapper';

const SkillsSection = styled.section`
  padding: 8rem 2rem;
`;

const SkillsContainer = styled.div`
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

const SkillsCategoryContainer = styled.div`
  margin-bottom: 4rem;
`;

const CategoryTitle = styled(motion.h3)`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--text-primary);
  text-align: center;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 60%;
    height: 2px;
    background-color: var(--accent);
  }
`;

const CategoryTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const SkillBadge = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const SkillCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--bg-primary);
  border: 3px solid var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px var(--shadow);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px var(--shadow);
    border-color: var(--accent-light);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, var(--accent) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }
  
  &:hover:before {
    opacity: 0.1;
  }
  
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  color: var(--accent);
  transition: transform 0.3s ease;
  z-index: 2;
  
  ${SkillCircle}:hover & {
    transform: scale(1.1);
    color: var(--accent-light);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SkillName = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 0.8rem 1.5rem;
  background-color: ${props => props.active ? 'var(--accent)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-primary)'};
  border: 2px solid ${props => props.active ? 'var(--accent)' : 'var(--border)'};
  border-radius: 30px;
  margin: 0 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--accent)' : 'var(--bg-secondary)'};
    transform: translateY(-3px);
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
    margin: 0 0.3rem;
  }
`;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Skill categories
const skillCategories = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    skills: [
      {
        name: 'HTML',
        icon: <IconWrapper icon={FaHtml5} />,
        color: '#E34F26',
      },
      {
        name: 'CSS',
        icon: <IconWrapper icon={FaCss3Alt} />,
        color: '#1572B6',
      },
      {
        name: 'JavaScript',
        icon: <IconWrapper icon={SiJavascript} />,
        color: '#F7DF1E',
      },
      {
        name: 'React',
        icon: <IconWrapper icon={FaReact} />,
        color: '#61DAFB',
      },
      {
        name: 'TypeScript',
        icon: <IconWrapper icon={SiTypescript} />,
        color: '#3178C6',
      },
      {
        name: 'Tailwind CSS',
        icon: <IconWrapper icon={SiTailwindcss} />,
        color: '#38B2AC',
      },
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile Development',
    skills: [
      {
        name: 'Flutter',
        icon: <IconWrapper icon={SiFlutter} />,
        color: '#02569B',
      },
      {
        name: 'Java',
        icon: <IconWrapper icon={FaJava} />,
        color: '#007396',
      },
    ],
  },
  {
    id: 'design',
    name: 'Design Tools',
    skills: [
      {
        name: 'Figma',
        icon: <IconWrapper icon={FaFigma} />,
        color: '#F24E1E',
      },
    ],
  },
  {
    id: 'backend',
    name: 'Backend Development',
    skills: [
      {
        name: 'Node.js',
        icon: <IconWrapper icon={SiNodedotjs} />,
        color: '#339933',
      },
    ],
  },
];

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  
  const filteredCategories = activeTab === 'all' 
    ? skillCategories 
    : skillCategories.filter(category => category.id === activeTab);
  
  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <TitleContainer>
          <SectionTitle
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
          >
            Skills
          </SectionTitle>
        </TitleContainer>
        
        <TabsContainer>
          <Tab 
            active={activeTab === 'all'} 
            onClick={() => setActiveTab('all')}
          >
            All Skills
          </Tab>
          <Tab 
            active={activeTab === 'frontend'} 
            onClick={() => setActiveTab('frontend')}
          >
            Frontend
          </Tab>
          <Tab 
            active={activeTab === 'mobile'} 
            onClick={() => setActiveTab('mobile')}
          >
            Mobile
          </Tab>
          <Tab 
            active={activeTab === 'backend'} 
            onClick={() => setActiveTab('backend')}
          >
            Backend
          </Tab>
          <Tab 
            active={activeTab === 'design'} 
            onClick={() => setActiveTab('design')}
          >
            Design
          </Tab>
        </TabsContainer>
        
        {filteredCategories.map((category, categoryIndex) => (
          <SkillsCategoryContainer key={category.id}>
            <CategoryTitleContainer>
              <CategoryTitle
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                variants={fadeInUp}
              >
                {category.name}
              </CategoryTitle>
            </CategoryTitleContainer>
            
            <SkillsGrid>
              {category.skills.map((skill, index) => (
                <SkillBadge
                  key={`${category.id}-${skill.name}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  variants={fadeInUp}
                >
                  <SkillCircle>
                    <SkillIcon>{skill.icon}</SkillIcon>
                  </SkillCircle>
                  <SkillName>{skill.name}</SkillName>
                </SkillBadge>
              ))}
            </SkillsGrid>
          </SkillsCategoryContainer>
        ))}
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills; 