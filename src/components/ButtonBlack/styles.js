import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_SECTION};
  color: ${({theme}) => theme.COLORS.COLOR_CONTRAST};
  padding: 2rem;
  border: none;
  font-weight: bold;
  border-radius: 1rem;
`;