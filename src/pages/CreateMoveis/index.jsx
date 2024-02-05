import { Container, Form } from './styles'
import { Header } from '../../components/Header';
import { TextArea } from '../../components/TextArea';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonBlack } from '../../components/ButtonBlack'
import { Button } from '../../components/Button'

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
          <Tag title='Express' isactive={true}></Tag>
          <Tag title='Node' isactive={true}></Tag>
          <Tag title='NovaTag' isactive={false}></Tag>
        </Section>
        <div id='div_buttons'>
          <ButtonBlack title='Excluir filme'/>
          <Button title='Salvar'></Button>
        </div>
      </Form>
    </Container>
  );
}