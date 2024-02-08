import { Container, List } from './styles';
import { Header } from '../../components/Header';
import { ItemMovie } from '../../components/ItemMovie';

export function Home(){
  return(
    <Container>
      <Header>
      </Header>
      
      <List>
        <ItemMovie title='Interestellar'>
          
        </ItemMovie>
      </List>
    </Container>
  );
}