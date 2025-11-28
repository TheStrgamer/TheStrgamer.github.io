import { useState } from 'react'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Wishlist } from './pages/Wishlist'

function App() {
  return (
    <HashRouter>
      <NavBar/>
      <div className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/wishlist' element={<Wishlist />} />

        </Routes>
        <br/><br/><br/><br/>
      </div>
      <br/><br/>
      <Footer/>
    </HashRouter>
  );
}

export default App
