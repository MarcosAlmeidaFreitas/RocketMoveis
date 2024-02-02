import styled from "styled-components";


export const Container = styled.div`
  background: none;
  color: ${({theme}) => theme.COLORS.COLOR_CONTRAST};
  border: none;
  
  >button{
    color: red;
  }
`; 