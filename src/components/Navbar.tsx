import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import IconWrapper from './IconWrapper';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--bg-primary);
  box-shadow: 0 2px 10px var(--shadow);
  z-index: 1000;
  padding: 1rem 2rem;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    flex-direction: column;
    background-color: var(--bg-primary);
    box-shadow: -2px 0 10px var(--shadow);
    padding: 5rem 2rem 2rem 2rem;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    z-index: 1001;
  }
`;

const NavLink = styled.a`
  margin: 0 1rem;
  color: var(--text-primary);
  font-weight: 500;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: var(--accent);
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  margin-left: 1rem;
  
  &:hover {
    background-color: var(--bg-secondary);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1002;
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MenuIconWrapper = styled.div<{ isOpen: boolean }>`
  position: relative;
  width: 24px;
  height: 24px;
  
  svg {
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  
  .menu-icon {
    opacity: ${props => props.isOpen ? 0 : 1};
    transform: ${props => props.isOpen ? 'rotate(90deg)' : 'rotate(0)'};
  }
  
  .close-icon {
    opacity: ${props => props.isOpen ? 1 : 0};
    transform: ${props => props.isOpen ? 'rotate(0)' : 'rotate(-90deg)'};
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: ${({ isOpen }) => isOpen ? 1 : 0};
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <NavbarContainer style={{ 
      backgroundColor: scrolled ? 'var(--bg-primary)' : 'transparent',
      boxShadow: scrolled ? '0 2px 10px var(--shadow)' : 'none',
      transition: 'background-color 0.3s, box-shadow 0.3s'
    }}>
      <NavContent>
        <Logo>JL</Logo>
        
        <MenuButton onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          <MenuIconWrapper isOpen={isMenuOpen}>
            <IconWrapper className="menu-icon" icon={FiMenu} />
            <IconWrapper className="close-icon" icon={FiX} />
          </MenuIconWrapper>
        </MenuButton>
        
        <Overlay isOpen={isMenuOpen} onClick={closeMenu} />
        
        <NavLinks isOpen={isMenuOpen}>
          <NavLink href="#home" onClick={closeMenu}>Home</NavLink>
          <NavLink href="#about" onClick={closeMenu}>About</NavLink>
          <NavLink href="#skills" onClick={closeMenu}>Skills</NavLink>
          <NavLink href="#projects" onClick={closeMenu}>Projects</NavLink>
          <NavLink href="#contact" onClick={closeMenu}>Contact</NavLink>
          <ThemeToggle onClick={toggleTheme}>
            {theme === 'light' 
              ? <IconWrapper icon={FiMoon} />
              : <IconWrapper icon={FiSun} />
            }
          </ThemeToggle>
        </NavLinks>
      </NavContent>
    </NavbarContainer>
  );
};

export default Navbar; 