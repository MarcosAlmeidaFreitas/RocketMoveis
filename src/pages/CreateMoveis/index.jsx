import { Container, Form } from './styles'
import { Header } from '../../components/Header';
import { TextArea } from '../../components/TextArea';
import { Input } from '../../components/Input';

export function CreateMoveis(){
  return(
    <Container>
      <Header></Header>
      <Form>
        <h2>Novo Filme</h2>
        <div>
          <Input placeholder='Titulo'></Input>
          <Input placeholder='Sua nota (de 0 a 5)'></Input>
        </div>
        <TextArea placeholder='Observações'></TextArea>
      </Form>
      
    </Container>
  );
}