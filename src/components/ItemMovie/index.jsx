import { Container, Notas, Tags, Tag } from './styles'
import { FiStar } from 'react-icons/fi'
export function ItemMovie({title, tags}){
  return(
    <Container>
      <h3>{title}</h3>
      
      <Notas>
        <div id='star1'>
          <FiStar></FiStar>
        </div>
        
        <div id='star2'>
          <FiStar></FiStar>
        </div>
        
        <div id='star3'>
          <FiStar></FiStar>
        </div>

        <div id='star4'>
          <FiStar></FiStar>
        </div>

        <div id='star5'>
          <FiStar></FiStar>
        </div>
      </Notas>
      
      
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ad delectus, reiciendis quisquam dolore quaerat atque non numquam labore nobis veritatis id, iste possimus. Pariatur quae fugiat ratione nobis necessitatibus!</p>
      <Tags>
        <Tag>Terror</Tag>
        <Tag>Ficção Cientifica</Tag>
        <Tag>Drama</Tag>
      </Tags>
    </Container>
  );
}