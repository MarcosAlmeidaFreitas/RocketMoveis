import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 150px;

  padding: 2rem;
  background-color: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND};
  color: ${({theme}) => theme.COLORS.INPUT_TEXT};
  /* Retirar a possibilidade do usuário aumentar o text_area */
  resize: none;
  border: none;
  outline: none;
  
`;