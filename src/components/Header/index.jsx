import { Container, Avatar } from './styles'
import { Input } from '../Input'
import { FiSearch } from 'react-icons/fi'
export function Header(){
 return(
  <Container>
    <h1>RocketMoveis</h1>
    <Input placeholder='Pesquisar pelo título' type='text' icon={FiSearch}/>
    <Avatar>
      <div id='text'>
        <strong>Marcos Antonio</strong>
        <a href="">Sair</a>
      </div>
      <img src="https://github.com/MarcosAlmeidaFreitas.png" alt="" />
    </Avatar>
  </Container>
 ); 
}