import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import ThemeProvider from 'providers/ThemeProvider';
import LocalesProvider from 'providers/LocalesProvider';

const App:React.FC =() => {
  return (
    <ThemeProvider>
      <LocalesProvider>
    <Router>
    <AppRouter />
  </Router>
  </LocalesProvider>
  </ThemeProvider>
  );
}

export default App;
