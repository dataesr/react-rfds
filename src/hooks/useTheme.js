import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const storedTheme = localStorage.getItem('__react-dsfr_theme__') || 'light';
  const [theme, setTheme] = useState(storedTheme);
  document.documentElement.setAttribute('data-fr-theme', storedTheme);

  const switchTheme = () => {
    const newTheme = (theme === 'light') ? 'dark' : 'light';
    localStorage.setItem('__react-dsfr_theme__', newTheme);
    setTheme(newTheme);
    document.documentElement.setAttribute('data-fr-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useTheme = () => useContext(ThemeContext);
export default useTheme;
