import styled from "styled-components";

export const Container = styled.div`
  /* background-color: red; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  #container_form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 2rem;
  }

  >img{
    width: 100%;
    height: 100vh;
  }
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 4.8rem;

  > h2{
    margin-bottom: 4.8rem;
  }

  > button{
    margin-top: 2.4rem;
  }
`;