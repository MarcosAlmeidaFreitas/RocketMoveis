import styled from "styled-components";


export const Container = styled.button`
  width: 100%;
  color: ${({theme}) => theme.COLORS.TEXT_BUTTON};
  background-color: ${({theme}) => theme.COLORS.COLOR_CONTRAST};
  font-weight: 500;
  padding: 2rem;
  border-radius: 1rem;
  border: none;
  
`;
