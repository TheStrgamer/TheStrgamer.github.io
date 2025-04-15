import { useState } from 'react'
import '../assets/NavBar.css'
import { Link } from 'react-router-dom';


function NavBarButton({name, route, color}) {

  return (
    <>
    <Link style={{ '--hover-color': color }} className='navBarButton' to={route}>{name}</Link>
    </>
  )
}

export default NavBarButton
