import styled from "styled-components";


export const Container = styled.div`
  /* background-color: ; */
  color: ${({theme}) => theme.COLORS.PARAGRAPH};
  padding: 1rem;
  display: flex;
  align-items: center;
  
  svg{
    color: ${({theme})=> theme.COLORS.COLOR_CONTRAST};
    margin-left: .5rem;
    
  }
`;