import styled from "styled-components";

export const Container = styled.div`
  > header{
    width: 100%;
    height: 144px;

    background-color: ${({theme}) => theme.COLORS.COLOR_CONTRAST_TRANSPARENT};
  }
`;

export const Avatar = styled.div`
  width: 186px;
  height: 186px;
  position: relative;
  margin: -10rem auto;
  margin-bottom: 6rem;
  
  >img{
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  > label {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: .7rem;
    right: .7rem;
    
    position: absolute;
    
    background-color: ${({theme}) => theme.COLORS.COLOR_CONTRAST};
    
    > input {
      display: none;
    }
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 0 auto;
  
  button{
    margin-top: 2rem;
  }

  input{
    
  }
`;
