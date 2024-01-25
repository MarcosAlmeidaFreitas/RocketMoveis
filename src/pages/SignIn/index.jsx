import { Container, Form } from './styles'

import background from '../../assets/cinema.png';

import { Input } from '../../components/Input'

import { FiMail, FiLock } from 'react-icons/fi'

export function SignIn(){
  return(
    <Container>
      <div id='form'>
        <h1>RocketMoveis</h1>
        <p>Aplicação para acompanhar tudo o que assistir</p>

        <Form>
          <h2>Faça o seu login</h2>
          
          <Input 
            placeholder = "Email" 
            type = "text"
            icon= {FiMail}
          />
          
          <Input 
            placeholder = "Senha"
            type = "password"
            icon= {FiLock}
          />
          </Form>
      </div>

      
      <img src={background} alt="imagem de fundo ilustrativa de cadeiras de cinema" />
    </Container>
  );
}