import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { GetCharacters } from './api/characters'

async function ListCharacters() {
  const AllCharacters = await GetCharacters();

  return AllCharacters
}

function App() {
  const [conteudo, setConteudo] = useState(<></>)
  
  useEffect(() => {
  async function Carregar() {
    setConteudo(await ListCharacters());
  }
  Carregar();
  }, {})

  return (
    <>
    <main>
      {conteudo}
    </main>
    </>
  )
}

export default App
