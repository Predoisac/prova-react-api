import './style.css'
import { Link } from 'react-router-dom'

function About() {
    return (
        <>
            <main>
                <div className='aboutPage'>
                    <h1>Sobre</h1>
                    <div>
                        <img className='imgSobre' src='https://avatars.githubusercontent.com/u/223376305?v=4' alt="Pedro" />
                        <h3>Pedro Isac</h3>
                        <h4 className='pedroDesc'>Estudante do Jovem Programador, fez a chamada da api e a página Sobre</h4>
                    </div>
                    <div>
                        <img className='imgSobre' src="https://avatars.githubusercontent.com/u/112735829?v=4" alt="Vitor" />
                        <h3>Vitor Przybylski</h3>
                        <h4>Estudante do Jovem Programador, fez a estilização e as rotas das páginas</h4>
                    </div>
                    <div>
                        <h3>Sobre o Projeto</h3>
                        Esse projeto foi criado como parte de uma avaliação sobre Front end, do curso Jovem Programador em 2025.
                        Foi desenvolvido durante os dias 8/9 ate 10/9.
                        Os componentes principais do projeto que seriam avaliados eram: consumir uma Api, cirar 3 páginas(com estilização), e colocar o projeto no Github Pages.
                        Com base nesses requisitos criamos esse projeto com todo nosso esforço e muita determinação.
                        Espero que tenha ficado bom :3<br />
                        <Link to='/'>
                            <button className='botoes voltar' type='button'>Voltar</button>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}
export default About;