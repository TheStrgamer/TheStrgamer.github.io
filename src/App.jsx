import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import NavBar from './components/NavBar'

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
      </div>
    </BrowserRouter>
  )
}

export default App
