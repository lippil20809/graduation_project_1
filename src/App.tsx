import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import ThemeProviders from 'providers/ThemeProvider';
import LocalesProvider from 'providers/LocalesProvider';


const App:React.FC =() => {
  return (
    <ThemeProviders>
   
    <Router>
    <AppRouter />
  </Router>
 
  </ThemeProviders>
  );
}

export default App;
