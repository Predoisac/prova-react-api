import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Futurama from './pages/API-Futurama'
import About from './pages/About'
import './App.css'

function App() {
return (
    <>
    <body>
      <Header/>
      <main>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='API-Futurama' element={<Futurama/>}/>
        <Route path='About' element={<About/>}/>
      </Routes>
      </main>
      <Footer/>
    </body>
    </>
  )
}

export default App;
