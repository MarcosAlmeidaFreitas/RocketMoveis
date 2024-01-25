import styled from "styled-components";


export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  #form h1{
    color: ${({theme}) => theme.COLORS.ROSE};
    text-align: center;
  }

  #form p{
    color: ${({theme}) => theme.COLORS.WHITE_P};
    text-align: center;
  }

  img{
    height: 100vh;
    width: 100%;
  }
  
`;

export const Form = styled.form`
  /* width: 100%;
  height: 100vh; */
  
  h2{
    text-align: center;
    color: ${({theme}) => theme.COLORS.WHITE};
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

`;