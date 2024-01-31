import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.INPUT_BACKGROUND};
  color: ${({theme}) => theme.COLORS.INPUT_TEXT};
  
  border-radius: 1rem;
  margin-bottom: .8rem;

  >input{
    height: 56px;
    width: 100%;

    background: transparent;
    border: 0;
    padding: 1.2rem;
    padding-left: 1rem;

    color: ${({theme}) => theme.COLORS.INPUT_TEXT};
    
    /* Usado para retirar a seleção do input quando clica */
    outline: none;
  }

  >svg{
    margin-left: 1.2rem;
  }
`;