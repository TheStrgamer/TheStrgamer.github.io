import { useState } from 'react'
import '../assets/NavBar.css'

function NavBarButton({name, route, color}) {

  return (
    <>
    <a style={{ '--hover-color': color }} className='navBarButton' href={route}>{name}</a>
    </>
  )
}

export default NavBarButton
