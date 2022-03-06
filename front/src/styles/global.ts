import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --light-grey: #959292;

    --light-blue: #00a9e4;
    --light-green: #00a152;

    --primary-color: #fddc47;
    --secondary-color: #e5cb51;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    outline: 0;
    user-select: none;
  }

  body {
    background: #f2f2f2;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`;
