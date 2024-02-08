import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme}) => theme.COLORS.COLOR_CONTRAST_TRANSPARENT}; 
  padding: 2rem 3rem;
  border-radius: .5rem;

  h3{
    color: white;
  }

  p{
    margin-top: 1.5rem;
  }
`;

export const Notas = styled.div`
  margin-top: .5rem;
  display: flex;
  gap: .5rem;

  svg{
    font-size: 1.2rem;
    color: ${({theme}) => theme.COLORS.COLOR_CONTRAST};
  }
`;

export const Tags = styled.div`
  display: flex;
  margin-top: 1.5rem;
  gap: 1.2rem;
`;

export const Tag = styled.div`
  background-color: ${({theme}) => theme.COLORS.TEXT_BUTTON};
  color: ${({theme}) => theme.COLORS.PARAGRAPH};
  border-radius: .8rem;
  padding: 1rem;
  font-size: 1.2rem;
`;

