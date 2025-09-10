import './style.css'
import { Link } from 'react-router-dom'

function About(){
    return(
        <>            
             <div>
                Teste
                <Link to='/'>
                    <button className = 'botoes' type='button'>Voltar</button>
                </Link>
            </div>
         </>
    )}
export default About;