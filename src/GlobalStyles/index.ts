import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#FFFFFF',
  white2: '#FFF8F2',
  red: '#E66767',
  yellow: '#FFB930',
  orange: '#FFEBD9',
  black: '#4B4B4B'
}

export const breakPointers = {
  mobile: '768px',
  tablet: '1023px'
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.white2};
  }

  .container {
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;

    @media screen and (max-width: ${breakPointers.tablet}) {
    width: 90%;
  }
    @media screen and (max-width: ${breakPointers.mobile}) {
    width: 90%;
  }
  }

`
