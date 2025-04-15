import { useState } from 'react'
import './App.css'
import ImageSlider from './components/ImageSlider.jsx'
import NavBar from './components/NavBar.jsx'

function App() {
  return (
    <>
      <NavBar/>
      <ImageSlider images={["Baines.png", "dante.jpg", "vergil.png"]} />
    </>
  )
}

export default App
