import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import 'animate.css';



function App(){
  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
      <Nav/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/>
      
    </div>
  )
}

export default App