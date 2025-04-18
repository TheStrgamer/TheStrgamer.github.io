import { useEffect, useState } from 'react'
import '../assets/ThemeToggle.css'

function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    const darkMode = savedTheme === 'dark'
    setIsDark(darkMode)
    document.documentElement.classList.toggle('dark', darkMode)
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    const theme = newIsDark ? 'dark' : 'light'
    document.documentElement.classList.toggle('dark', newIsDark)
    localStorage.setItem('theme', theme)
  }

  return (
    <label className="slider-toggle">
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggleTheme}
      />
      <span className="slider">
        <img className="icon" src={isDark ? '/moon.svg' : '/sun.svg'}/>
      </span>
    </label>
  )
}

export default ThemeToggle
