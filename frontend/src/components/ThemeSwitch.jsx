import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'DarkTheme'
  });

  const handleThemeChange = () => {
    if (!darkMode) {
      localStorage.setItem('theme', 'DarkTheme')
      document.documentElement.classList.add('dark')
      setDarkMode(true);
    } else {
      localStorage.removeItem('theme')
      document.documentElement.classList.remove('dark')
      setDarkMode(false)
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])


  return (
    <div>
      <button onClick={handleThemeChange}>
        {darkMode ? "Light Theme" : "Dark Theme"}
      </button>
    </div>
  )
}

export default ThemeSwitch
