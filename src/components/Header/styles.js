import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  
  >h1{
    font-size: 2.4rem;
  }

  /* Definindo o tamanho do input */
  >div:nth-child(2){ 
    width: 50%;
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: end;

  #text{
    display: flex;
    flex-direction: column;
    
  }

  >img{
    border-radius: 50%;
    width: 6.4rem;
    height: 6.4rem;
  }
`;

