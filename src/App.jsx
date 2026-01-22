import { useState } from 'react'
import './App.css'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Wishlist } from './pages/Wishlist'
import Demo from './pages/Demo'

function Layout() {
  const location = useLocation();
  const hideLayout = location.pathname === '/demo';

  return (
    <>
      {!hideLayout && <NavBar />}
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </div>
      {!hideLayout && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  );
}
