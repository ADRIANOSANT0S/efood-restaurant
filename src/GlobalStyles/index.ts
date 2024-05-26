import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  .container {
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;
  }
`
export const colors = {
  orange: '#FFF8F2',
  white: '#FFFFFF',
  red: '#E66767',
  yellow: '#FFB930',
  orange2: '#FFEBD9',
  black: '#4B4B4B'
}
