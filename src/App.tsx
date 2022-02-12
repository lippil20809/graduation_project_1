import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from './router/AppRouter';
import ThemeProviders from 'providers/ThemeProvider';
import store from './store';
const App:React.FC = () => {
  return (
    
    <Provider store={store}>
      <ThemeProviders>
      <Router>
       <AppRouter/>
       </Router>
       </ThemeProviders>
      </Provider>
    
  
  );
}

export default App;
