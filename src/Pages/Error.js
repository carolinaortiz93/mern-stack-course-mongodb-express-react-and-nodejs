import { Link } from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'

const Error = () => {
  return (
    <Wrapper className= 'full-page'>
      <div> 
        
        <img src = { img } alt ='not found'/>
        <h3> OH! PAGINA NO ENCONTRADA</h3>
        <p>NO EXISTE - 404 </p>
        <Link to='/'>back home</Link>

         </div>
      </Wrapper>
      
  )
}

export default Error