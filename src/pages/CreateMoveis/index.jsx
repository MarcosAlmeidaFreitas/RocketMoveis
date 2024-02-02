import { Container, Form } from './styles'
import { Header } from '../../components/Header';
import { TextArea } from '../../components/TextArea';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { CiSquareRemove } from "react-icons/ci";

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
        <Section title='Marcadores'>
          <Tag title='Express' icon={CiSquareRemove}></Tag>
          <Tag title='Node' icon={CiSquareRemove}></Tag>
        </Section>
      </Form>
    </Container>
  );
}