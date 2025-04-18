import { useState } from 'react'
import '../assets/NavBar.css'
import { Link } from 'react-router-dom';


function NavBarButton({name, route, color, onClick, active}) {

  return (
    <>
    <Link style={{ '--hover-color': color, backgroundColor: active? color : ''  }} className='navBarButton' to={route} onClick={onClick} >{name}</Link>
    </>
  )
}

export default NavBarButton
