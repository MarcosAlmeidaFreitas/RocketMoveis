import styled from "styled-components";

export const Container = styled.section`
  margin-top: 3rem;
  
  h3{
    margin-bottom: 2rem;
  }
  
  div{
    display: flex;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_SECTION};
    padding: 1rem;
    /* div{
      background-color: red;
    } */
  }
`;