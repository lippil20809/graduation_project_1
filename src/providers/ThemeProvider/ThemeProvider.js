import React, { useState, useCallback, createContext, useContext, useEffect } from "react";
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from "styled-components";

import { lightTheme, darkTheme } from "./constants";


const GlobalStyle = createGlobalStyle`
  body {
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.backgroundColor.main}
  }
`;




const ThemeContext = createContext({});

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  let themeThemeProvider = JSON.parse(localStorage.getItem('theme'))
  const [theme, setTheme] = useState(themeThemeProvider);

  useEffect(()=>{
     localStorage.setItem('theme',JSON.stringify(theme))
 },[theme])


  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);


  
  return (
    <StyledThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
};

export default ThemeProvider;