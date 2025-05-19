import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
