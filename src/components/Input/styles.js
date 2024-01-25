import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: ${({theme}) => theme.COLORS.GRAY_INPUT_BACKGROUND }; */
  color: ${({ theme }) => theme.COLORS.GRAY_INPUT_TEXT };
  gap: 1rem;
  padding: 1rem;
  border: none;
  background-color: ${({theme}) => theme.COLORS.GRAY_INPUT_BACKGROUND };
`;