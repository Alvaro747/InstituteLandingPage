import React from 'react'
import BtnWhatsApp from './components/BtnWhatsApp/BtnWhatsApp'
import NavBar from './components/nav/NavBar'
import Clients from './pages/Clients'
import Cta from './pages/Cta'
import CtaFooter from './pages/CtaFooter'
import Feature from './pages/Feature'
import Footer from './pages/Footer'
import Gallery from './pages/Gallery'
import Home from './pages/Home/Home'
import Stadistics from './pages/Home/Stadistics'
import Programs from './pages/Programs'
import useFetch from './hoocks/useFetch'


function App() {
  return (
    <div className='scroll-smooth'>
   <NavBar/>
   <Home/>
   <Feature/>
   <Cta/>
   <Gallery/>
   <Stadistics/>
   <Programs/>
   <Clients/>
   <CtaFooter/>
   <Footer/>
   <BtnWhatsApp/>
   
   
    </div>
   
  )
}

export default App