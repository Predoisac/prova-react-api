import './style.css'
import { Link } from 'react-router-dom'
function Home(){
    return(
        <>            
            {/*TELA INICIAL - APENAS TER 3 BOTOES, 1 para cada pagina */}
            <div>
                <Link to='API-Futurama'>
                    <button className='botoes' type='button'>API-Futurama</button>
                </Link>
            </div>
            <div>
                <Link to='About'>
                    <button className='botoes' type='button'>Sobre</button>
                </Link>
            </div>
         </>
    )}
export default Home;