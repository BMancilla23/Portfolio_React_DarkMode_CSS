import { useEffect } from 'react';
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Inicializa el estado del tema desde el localStorage o establece false como valor predeterminado
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('isDarkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;

    if (isDarkMode) {
      htmlElement.classList.add('dark');
      bodyElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
      bodyElement.classList.remove('dark');
    }

    // Guarda el estado en localStorage cuando cambie
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));

    // Limpiar event listeners si el componente se desmonta
    return () => {
      htmlElement.classList.remove('dark');
      bodyElement.classList.remove('dark');
    };
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
