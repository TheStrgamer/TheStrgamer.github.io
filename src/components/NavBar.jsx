import { useState } from 'react'
import '../assets/NavBar.css'
import NavBarButton from './NavBarButton';

function NavBar() {
  
  const pages = [["Home", "/", "#be1030"],["Experience", "/experience", "#30ae00"],["Projects", "/projects", "#0040ae"]]
  const [index, setIndex] = useState(0);

  let buttons = [];
  for (let i = 0; i<pages.length; i++) {
    buttons.push(
        <NavBarButton key={i} name={pages[i][0]} route={pages[i][1]} color={pages[i][2]} onClick={() => setIndex(i)} active={index === i} />
    )
  }

  
  
  return (
    <>
    <div className="navBar">
        {buttons}

    </div>

    </>
  )
}

export default NavBar
