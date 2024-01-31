import { Container } from './styles'
import { Header } from '../../components/Header';
import { TextArea } from '../../components/TextArea';
export function CreateMoveis(){
  return(
    <Container>
      <Header></Header>
      <TextArea placeholder='Insira a sua descrição'></TextArea>
    </Container>
  );
}