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
    background-color: ${(props:any) => props.theme.backgroundColor.main}

  }
`;




const ThemeContext = createContext({ });

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider:React.FC = ({ children }) => {
  const themeProvider = localStorage.getItem('theme')
  let themeThemeProvider = themeProvider ?  JSON.parse(themeProvider) : {}
  const [theme, setTheme] = useState<string>(themeThemeProvider);

  useEffect(()=>{
     localStorage.setItem('theme',JSON.stringify(theme))
 },[theme])


  const toggleTheme = useCallback(() => {
    setTheme((prev: string) => (prev === "light" ? "dark" : "light"));
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