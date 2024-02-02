import { Container } from './styles'
export function Section({title, children}){
  return(
    <Container>
      <h3 id='h3-noBackground'>{ title }</h3>
      <div>
        { children }
      </div>
    </Container>
  );
}