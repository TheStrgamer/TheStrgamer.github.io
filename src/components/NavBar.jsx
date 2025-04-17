import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../assets/NavBar.css'
import NavBarButton from './NavBarButton';
import ThemeToggle from './ThemeToggle';

function NavBar() {
  const pages = [["Home", "/", "var(--hover-red)"],["Experience", "/experience", "var(--hover-green)"],["Projects", "/projects", "var(--hover-blue)"]];
  const location = useLocation();

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 450);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const currentPath = location.pathname;
    const foundIndex = pages.findIndex(([_, path]) => path === currentPath);
    if (foundIndex !== -1) setIndex(foundIndex);
  }, [location.pathname]);

  const toggleDropDown = () => setDropdownVisible(!dropdownVisible);

  const buttons = pages.map(([name, route, color], i) => (
    <NavBarButton
      key={i}
      name={name}
      route={route}
      color={color}
      onClick={() => setIndex(i)}
      active={index === i}
    />
  ));

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 450);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className="navBar">
        {isMobile ? (
          <button className="dropDownButton" onClick={toggleDropDown}>☰</button>
        ) : (
          buttons
        )}
      </header>
      {isMobile && dropdownVisible && (
        <div className="dropdown">
          {buttons}
        </div>
      )}
      <br />
      <ThemeToggle />
    </>
  );
}

export default NavBar;
