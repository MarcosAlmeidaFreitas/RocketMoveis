import { Container } from './styles'
export function ButtonText({icon : Icon, title, ...rest}){
  return(
    <Container>
      {Icon && <Icon size={20}/>}
      <button></button>
    </Container>
  );  
}