import './style.css'
import { Link } from 'react-router-dom'

function About() {
    return (
        <>
            <div>
                <h2>
                    Sobre
                </h2>
                <img src='https://avatars.githubusercontent.com/u/223376305?v=4' alt="Pedro" />
                <h3>Pedro Isac</h3>
                Estudante do Jovem Programador, fez a chamada da api e a página Sobre <br />
                <img src="https://avatars.githubusercontent.com/u/112735829?v=4" alt="" />
                <h3>Vitor Przybylski</h3>
                Estudante do Jovem Programador, fez a estilização e as rotas das páginas
                <h4>Sobre o Projeto</h4>
                Esse projeto foi criado como parte de uma avaliação sobre Front end, do curso Jovem Programador em 2025.
                Foi desenvolvido durante os dias 8/9 ate 10/9.
                Os componentes principais do projeto que seriam avaliados eram: consumir uma Api, cirar 3 páginas(com estilização), e colocar o projeto no Github Pages.
                Com base nesses requisitos criamos esse projeto com todo nosso esforço e muita determinação.
                Espero que tenha ficado bom :3
                <Link to='/'>
                    <button className='botoes' type='button'>Voltar</button>
                </Link>
            </div>
        </>
    )
}
export default About;