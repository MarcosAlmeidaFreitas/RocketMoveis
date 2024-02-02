import { Container } from './styles'
import { ButtonText } from '../ButtonText'
import { CiSquareRemove } from "react-icons/ci";

export function Tag({icon : Icon, title}){
  return(
    <Container>
      {title}
      {Icon && <Icon size={20}/>}
    </Container>
  );
}