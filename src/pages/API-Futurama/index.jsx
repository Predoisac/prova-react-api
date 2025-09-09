import { useEffect, useState } from 'react'
import { Link } from 'react-router';
import './style.css'
import { GetCharacters } from '../../api/characters';

function Futurama() {
    const [conteudo, setConteudo] = useState(<></>)

    async function ListCharacters() {
        const AllCharacters = await GetCharacters();

        return AllCharacters
    }

    useEffect(() => {
        async function Carregar() {
            setConteudo(await ListCharacters());
        }
        Carregar();
    }, {})

    return (
        <>
            {/*COLOCA O CONTEUDO AQUI */}
            <main>
                <div>
                    {conteudo}
                </div>
                <div>
                    <Link to='/'>
                        <button class='botoes' type='button'>Voltar</button>
                    </Link>
                </div>
            </main>
        </>
    )
}
export default Futurama;