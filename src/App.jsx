import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Futurama from './pages/API-Futurama'
import FuturamaDOC from './pages/Futurama-Documents'
import './App.css'

function App() {
return (
    <>
    <body>
      <Header/>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='API-Futurama' element={<Futurama/>}/>
        <Route path='Futurama-DOC' element={<FuturamaDOC/>}/>
      </Routes>
      <Footer/>
    </body>
    </>
  )
}

export default App;
