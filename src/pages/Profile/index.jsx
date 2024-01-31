import { Container, Avatar, Form } from './styles'
import { FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile(){
  return(
    <Container>
      <header>
        {/* vai entrar o link */}
      </header>
      
      <Form>
        <Avatar>
          <img src="https://github.com/MarcosAlmeidaFreitas.png" alt="Imagem do Usuário" />

          <label htmlFor="avatar">
            <FiCamera/>
            <input id='avatar' type='file'/>
          </label>
        </Avatar>
      
        <Input placeholder="Nome" type='text' icon={FiUser}/>
        <Input placeholder="Email" type="email" icon={FiMail}/>
        <Input placeholder="Senha atual" type="password" icon={FiLock}/>
        <Input placeholder="Nova senha" type="password" icon={FiLock}/>
        <Button title="Salvar"/>
      </Form>
      
    </Container>
  );
}