import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <div className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />

        </Routes>
        <br/><br/><br/><br/>
      </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
