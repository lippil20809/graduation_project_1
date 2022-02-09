import  React , { useState, useCallback, createContext, useContext, useEffect,useMemo }  from 'react';

import {  ThemeProvider, createTheme } from '@mui/material/styles';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export const useModes = () => useContext(ColorModeContext);

const  ToggleColorMode :React.FC = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      { children }
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ToggleColorMode