import React, { useState, useCallback, createContext, useContext, useEffect } from "react";
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from "styled-components";

import { lightTheme, darkTheme } from "./constants";
import {ThemeContextContext,Themes } from './ThemeProvider.type'




const GlobalStyle = createGlobalStyle<ThemeContextContext>`
  body {
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.backgroundColor.main}

  }
`;




export const ThemeContext = createContext<ThemeContextContext>({});

export const useTheme = () => useContext(ThemeContext);

const getItem = <T extends string>(key: string, defaultValue?: unknown) => {
  const value = localStorage.getItem("theme") ?? defaultValue
  return value as T
}  

const ThemeProvider:React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Themes>(getItem<Themes>("light","dark"));

  useEffect(()=>{
     localStorage.setItem('theme',JSON.stringify(theme))
 },[theme])


  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);


  
  return (
    <StyledThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <ThemeContext.Provider value={{  toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
};

export default ThemeProvider;