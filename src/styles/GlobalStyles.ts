import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  :root {
    --color-bg: hsl(0, 0%, 98%);
    --color-text: hsl(200, 15%, 8%);
    --color-input: hsl(0, 0%, 52%);
    --color-elements: hsl(0, 0%, 100%);
    --color-highlighted: #bde4ff;
    --fw-light: 300;
    --fw-semi-bold: 600;
    --fw-extra-bold: 800;
    --border-radius: 0.3125rem;
    --card-box-shadow: 0 0.125rem 0.5625rem rgba(0, 0, 0, 0.05);
    --media-desktop: 45rem;
    --transition: background-color .2s linear, color .2s linear;
  }

  .light-theme {
    --color-bg: hsl(0, 0%, 98%);
    --color-text: hsl(200, 15%, 8%);
    --color-input: hsl(0, 0%, 52%);
    --color-elements: hsl(0, 0%, 100%);
    --color-highlighted: #bde4ff;
  }

  .dark-theme {
    --color-bg: hsl(207, 26%, 17%);
    --color-text: hsl(0, 0%, 100%);
    --color-input: hsl(0, 0%, 100%);
    --color-elements: hsl(209, 23%, 22%);
    --color-highlighted: #517086;
 }



  /* Box sizing rules */
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core root defaults */
  html {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  ul {
    list-style-type: none;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  body {
    font-family: 'Nunito Sans', sans-serif;
  }
`;
