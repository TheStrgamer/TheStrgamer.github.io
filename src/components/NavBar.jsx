import { useState, useEffect } from 'react'
import '../assets/NavBar.css'
import NavBarButton from './NavBarButton';
import ThemeToggle from './ThemeToggle';

function NavBar() {
  
  const pages = [["Home", "/", "var(--hover-red)"],["Experience", "/experience", "var(--hover-green)"],["Projects", "/projects", "var(--hover-blue)"]]
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 450);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  let buttons = [];
  for (let i = 0; i<pages.length; i++) {
    buttons.push(
        <NavBarButton key={i} name={pages[i][0]} route={pages[i][1]} color={pages[i][2]} onClick={() => setIndex(i)} active={index === i} />
    )
  }
  
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 450);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function toggleDropDown() {
    const newBool = !dropdownVisible;
    setDropdownVisible(newBool);
  } 



  return (
    <>
        <header className="navBar">
        {isMobile ? (
            <>
            <button className="dropDownButton" onClick={toggleDropDown}>☰</button>
            </>
        ) : (
            buttons
        )}
        </header>
        {dropdownVisible && (
                <div className="dropdown">
                {buttons}
                </div>
        )}
      <br />
      <ThemeToggle />
    </>
  );
}

export default NavBar
