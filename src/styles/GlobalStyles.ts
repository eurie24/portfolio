import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Light theme colors */
    --bg-primary: #ffffff;
    --bg-secondary: #f8f9fa;
    --text-primary: #1a1a2e;
    --text-secondary: #4a4a68;
    --accent: #0a3d62;  /* Navy blue accent */
    --accent-light: #3a7bd5;
    --border: #e0e0e0;
    --shadow: rgba(0, 0, 0, 0.08);
    --card-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
    --gradient: linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%);
  }

  [data-theme='dark'] {
    /* Dark theme colors */
    --bg-primary: #0f1624;
    --bg-secondary: #162033;
    --text-primary: #f5f5f5;
    --text-secondary: #b3b3b3;
    --accent: #1a5f9c;  /* Lighter navy blue for dark mode */
    --accent-light: #4a8fd9;
    --border: #2d3748;
    --shadow: rgba(255, 255, 255, 0.05);
    --card-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s, box-shadow 0.3s;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px; /* Height of fixed header */
  }

  body {
    font-family: 'Inter', 'Roboto', 'Helvetica Neue', sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--text-primary);
    line-height: 1.2;
  }

  h1 {
    font-size: 3.5rem;
    
    @media (max-width: 768px) {
      font-size: 2.8rem;
    }
  }

  h2 {
    font-size: 2.5rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.8rem;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    margin-bottom: 1rem;
    color: var(--text-secondary);
    font-size: 1.05rem;
  }

  a {
    color: var(--accent);
    text-decoration: none;
    transition: var(--transition);
    
    &:hover {
      color: var(--accent-light);
    }
  }

  button {
    cursor: pointer;
    background-color: var(--accent);
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    transition: var(--transition);
    
    &:hover {
      background-color: var(--accent-light);
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(10, 61, 98, 0.2);
    }
    
    &:focus {
      outline: none;
    }
  }

  section {
    padding: 5rem 0;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-secondary);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--accent);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--accent-light);
  }
  
  /* Selection */
  ::selection {
    background-color: var(--accent);
    color: white;
  }
`;

export default GlobalStyles; 