import { Link } from 'react-router';
import './style.css'

function Futurama(){
    /* PODE FAZER OS CODIGOS AQUI, SO LEMBRA DE COLOCAR NO RETURN O CONTEUDO */


    return(
        <>            
            {/*COLOCA O CONTEUDO AQUI */}

            <div>
                <Link to='/'>
                    <button class = 'botoes' type='button'>Voltar</button>
                </Link>
            </div>
         </>
    )}
export default Futurama;