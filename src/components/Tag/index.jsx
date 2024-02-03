import { Container } from './styles'
import { ButtonText } from '../ButtonText'
import { FiMinus } from "react-icons/fi";
import { FiPlus } from 'react-icons/fi'

export function Tag({ title, isactive}){
  let Icon;
  
  if(isactive === true){
    Icon = FiMinus;
  }else{
    Icon = FiPlus;
  }
  
  return(
    <Container>
      <div>
        {title}
        {Icon && <Icon size={20}/>}
      </div>
    </Container>
  );
}