import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;
    font-family: 'Roboto Slab', serif;
  }

  body{
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  }
  
  h1{
    font-size: 4.8rem;
    font-weight: bold;
    color: ${({theme}) => theme.COLORS.COLOR_CONTRAST};
  }

  h2{
    color: ${({theme}) => theme.COLORS.CAPTION};
    font-weight: 500;
  }

  p{
    color: ${({theme}) => theme.COLORS.PARAGRAPH};
    font-size: 1.4rem;
  }

  button, input, textarea, body{
    font-size: 1.6rem;
  }  
`
