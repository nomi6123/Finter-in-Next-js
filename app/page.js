import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Guards from './components/Team/Team'

const page = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Guards/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page
