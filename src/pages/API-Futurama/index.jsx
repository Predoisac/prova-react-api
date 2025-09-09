import { useEffect, useState } from 'react'
import { data, Link } from 'react-router';
import './style.css'
import { GetCharacters } from '../../api/characters';

function CharacterInfo(character) {
    

    return character
}

function Futurama() {
    const [conteudo, setConteudo] = useState(<></>)

    async function ListCharacters() {[]
        const AllCharacters = await GetCharacters();
        console.log(AllCharacters)
        return AllCharacters.map(personagem => <div key={personagem.name} />)
    }

    useEffect(() => {
        async function Carregar() {
            setConteudo(await ListCharacters());
        }
        Carregar();
    }, {})

    ListCharacters()
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