import { Container } from './styles'

export function ButtonBlack({title, disable= false,  ...rest}){
  return(
    <Container type='button' disabled={disable} {...rest}>
      { title }
    </Container>
  )  
}