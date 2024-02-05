import styled from "styled-components";


export const Container = styled.div`
  
  color: ${({theme}) => theme.COLORS.PARAGRAPH};
  
  div{
    background-color: ${({theme, $isactive}) => $isactive ? theme.COLORS.INPUT_BACKGROUND : theme.COLORS.BACKGROUND_SECTION };
    border-radius: .5rem;
    display: flex;
    align-items: center;
    border: ${({ $isactive }) => $isactive ? 'none' : 'dashed'}
  }

  svg{
    color: ${({theme})=> theme.COLORS.COLOR_CONTRAST};
    margin-left: 0.5rem;
  }
`;