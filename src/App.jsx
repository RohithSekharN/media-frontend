
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/Landingpage'
import Home from './Pages/Home'
import WatchHistory from './Pages/Watchhistory'

function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/watch-history' element={<WatchHistory/>}/>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
