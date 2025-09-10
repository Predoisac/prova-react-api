import './style.css'
import { Link } from 'react-router-dom'

function FuturamaDOC(){
    return(
        <>            
            {/*COLOCAR A DOCUMENTAÇAO AQUI*/}


             <div>
                <Link to='/'>
                    <button className = 'botoes' type='button'>Voltar</button>
                </Link>
            </div>
         </>
    )}
export default FuturamaDOC;