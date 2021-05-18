import { createGlobalStyle } from 'styled-components';
import { breakpoints } from 'styles/Breakpoints';

export const GlobalStyles = createGlobalStyle`

  :root {
    --color-bg: hsl(0, 0%, 98%);
    --color-text: hsl(200, 15%, 8%);
    --color-input: hsl(0, 0%, 52%);
    --color-elements: hsl(0, 0%, 100%);
    --color-highlighted: #bde4ff;
    --color-red: #DB3930;
    --fw-light: 300;
    --fw-semi-bold: 600;
    --fw-extra-bold: 800;
    --border-radius: 0.3125rem;
    --card-box-shadow: 0 0.125rem 0.5625rem rgba(0, 0, 0, 0.05);
    --transition: background-color .2s linear, color .2s linear;
  }

  .light-theme {
    --color-bg: hsl(0, 0%, 98%);
    --color-text: hsl(200, 15%, 8%);
    --color-input: hsl(0, 0%, 52%);
    --color-elements: hsl(0, 0%, 100%);
    --color-highlighted: #bde4ff;
    --color-page-hover: #e7e5e5;
  }

  .dark-theme {
    --color-bg: hsl(207, 26%, 17%);
    --color-text: hsl(0, 0%, 100%);
    --color-elements: hsl(209, 23%, 22%);
    --color-highlighted: #517086;
    --color-page-hover: var(--color-elements);
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

  a:focus,
  button:focus {
    outline: 2px dashed var(--color-red);
    outline-offset: 4x;
  }

  a:focus:not(:focus-visible),
  button:focus:not(:focus-visible) {
    outline: none;
  }
  ul:focus-visible {
    outline: none;
  }

  .pagination {
    display: flex;
    align-items: center;
    /* gap: .5rem; */
    margin: 0 auto;
    margin: 0 auto;
    padding: 1rem 1rem 2rem;
    justify-content: center;
    color: var(--color-text);
    font-size: .7;

    @media (min-width: ${breakpoints.tablet}) {
      font-size: 1.1rem;
    }

    .previous.disabled,
    .next.disabled {
      background-color: transparent;
      pointer-events: none;
    }

    .active {
      background-color: var(--color-highlighted)
    }

    li:not(:last-child) {
      margin-right: .2rem;
    }
    li {
      padding: .5rem;
    }

    a {
        display: flex;
    }

    li:hover {
      cursor: pointer;
      background-color: var(--color-page-hover);

    }
  }
`;
