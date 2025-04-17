import { useState } from 'react'
import '../assets/NavBar.css'
import NavBarButton from './NavBarButton';
import ThemeToggle from './ThemeToggle';

function NavBar() {
  
  const pages = [["Home", "/", "var(--hover-red)"],["Experience", "/experience", "var(--hover-green)"],["Projects", "/projects", "var(--hover-blue)"]]
  const [index, setIndex] = useState(0);

  let buttons = [];
  for (let i = 0; i<pages.length; i++) {
    buttons.push(
        <NavBarButton key={i} name={pages[i][0]} route={pages[i][1]} color={pages[i][2]} onClick={() => setIndex(i)} active={index === i} />
    )
  }
  
  
  return (
    <>
    <header className="navBar">
        {buttons}

    </header>
    <br/>
    <ThemeToggle/>


    </>
  )
}

export default NavBar
