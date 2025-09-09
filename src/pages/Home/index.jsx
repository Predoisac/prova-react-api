import './style.css'
import { Link } from 'react-router-dom'
function Home(){
    return(
        <>            
            {/*TELA INICIAL - APENAS TER 3 BOTOES, 1 para cada pagina */}
            <div>
                <Link to='API-Futurama'>
                    <button class='botoes' type='button'>API-Futurama</button>
                </Link>
            </div>
            <div>
                <Link to='Futurama-DOC'>
                    <button class='botoes' type='button'>Documentaçao</button>
                </Link>
            </div>
         </>
    )}
export default Home;