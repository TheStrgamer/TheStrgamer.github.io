import { useState } from 'react'
import '../assets/NavBar.css'
import NavBarButton from './NavBarButton';

function NavBar() {
  
  const pages = [["Home", "/"],["Experience", "/experience"],["Projects", "/projects"]]
  const [index, setIndex] = useState(0);
  const activePage = pages[index]

  let buttons = [];
  for (var i = 0; i<pages.length; i++) {
    buttons.push(
        <NavBarButton name={pages[i][0]} route={pages[i][1]} />
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
