import styled from "styled-components";


export const Container = styled.div`
  
  color: ${({theme}) => theme.COLORS.PARAGRAPH};
  
  div{
    background-color: ${({theme}) => theme.COLORS.INPUT_BACKGROUND};
    border-radius: .5rem;
    display: flex;
    align-items: center;
  }

  svg{
    color: ${({theme})=> theme.COLORS.COLOR_CONTRAST};
    margin-left: 0.5rem;
  }
`;