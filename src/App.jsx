import { useState } from 'react'
import './App.css'
import ImageSlider from './components/ImageSlider.jsx'

function App() {
  return (
    <>
      <ImageSlider images={["Baines.png", "dante.jpg", "vergil.png"]} />
    </>
  )
}

export default App
