import { useState } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer' 
import routes from './routes'
import {useRoutes} from 'react-router-dom'
function App() {
  
const router = useRoutes(routes)
  return (
    <>
  <Header/>
  {router} 
  <Footer/>     
    </>
  )
}

export default App
