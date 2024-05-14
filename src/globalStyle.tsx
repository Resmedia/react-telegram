/*
TG Theme:
--tg-background-color: #18222d;
--tg-header-color: #18222d;
--tg-theme-secondary-background-color: #131415;
--tg-theme-hint-color: #b1c3d5;
--tg-theme-destructive-text-color: #ef5b5b;
--tg-theme-button-color: #2ea6ff;
--tg-theme-button-text-color: #ffffff;
--tg-theme-section-background-color: #18222d;
--tg-theme-link-color: #62bcf9;
--tg-theme-section-header-text-color: #b1c3d5;
--tg-theme-background-color: #18222d; --tg-theme-text-color: #ffffff;
--tg-theme-header-background-color: #131415;
--tg-theme-accent-text-color: #2ea6ff;
--tg-theme-subtitle-text-color: #b1c3d5;
--tg-viewport-height: 558px;
--tg-viewport-width: 380px;
--tg-viewport-stable-height: 558px;
* */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --tc-gold: #E6B027;
    --tc-active: #F2CC1F;
    --tc-border: #1E1F21;
    --tc-panel: #141517;
    --tc-background: #060606;
    --tc-gray: #949FA8;
    --tc-gold-gradient: linear-gradient(90deg, #F2CC1F 0%, #E3A31D 100%);
    --tc-bronse-gradient: linear-gradient(135deg, #F3A046 0%, #E76526 100%);
    --tc-silver-gradient: linear-gradient(135deg, #b2bdcb 0%, #828c94 100%);
  }

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background: var(--tc-panel);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--tc-background);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--tc-active);
  }
  
  a, a:any-link {
    text-decoration: none;
    transition: color 200ms ease;
    &:hover, &:focus {
      transition: color 200ms ease;
      text-decoration: none;
    }
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;

    background: #060606;
    color: white;
    
    
    &.stop-scrolling {
      overflow: hidden;
    }
  }

  blockquote {
    margin: 0;
  }

  blockquote p {
    padding: 15px;
    background: #eee;
    border-radius: 5px;
  }

  pre {
    overflow: auto;
  }
  
  button {
    border: 0;
    background: transparent;
    transition: background 200ms ease;
    &:hover, &:focus {
      transition: background 200ms ease;
    }
  }
`;
