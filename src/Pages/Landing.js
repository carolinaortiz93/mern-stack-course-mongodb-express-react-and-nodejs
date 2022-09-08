import main from '../assets/images/main-alternative.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components'
import {Link} from 'react-router-dom'


const Landing = () => {
  return (
  <Wrapper>
    <nav> 
    <Logo />
    </nav>
    <div className='container page'>
      {/* info */}
        <div className='info'>
         <h1>
            job <span> tracking</span> app
         </h1>
         <p>
         I'm baby chicharrones keffiyeh 8-bit, coloring book franzen tofu +1 put a bird on it tumblr sriracha activated charcoal. DSA raw denim woke forage, live-edge listicle succulents activated charcoal chillwave cloud bread locavore prism af chambray gastropub. 
         </p>
        <Link to='/register'className='btn btn-hero'>
          Login/Register
        </Link>
   </div>
 <img src={main} alt='job hunt' className='img 
 main-img'/>
    </div>
  </Wrapper>
  
  
  )
 }

export default Landing