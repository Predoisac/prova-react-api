import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { GetCharacters } from "../../api/characters";

function Futurama() {
  const [conteudo, setConteudo] = useState(<></>);

  async function ListCharacters() {
    const AllCharacters = await GetCharacters();
    console.log(AllCharacters)
    return AllCharacters.map((personagem) => (
      <div className="card char" key={personagem.id}>
        <img src={personagem.image} alt={`Foto de ${personagem.name}`} />
        <h2>{personagem.name}</h2>
        <div className="char-info">
          <span>
            <b>Espécie: </b>
            {personagem.species}
          </span>
          <span>
            <b>Gênero: </b>
            {personagem.gender}
          </span>
          <span>
            <b>Estado: </b>
            {personagem.status}
          </span>
        </div>
      </div>
    ));
  }

  useEffect(() => {
    async function Carregar() {
      setConteudo(await ListCharacters());
    }
    Carregar();
  }, []);

  return (
    <>
      {/*COLOCA O CONTEUDO AQUI */}
      <main>
        <div>
          <Link to="/">
            <button className="botoes" type="button">
              Voltar
            </button>
          </Link>
        </div>
        <div className="lista-principal">
            {conteudo}
        </div>
      </main>
    </>
  );
}
export default Futurama;
