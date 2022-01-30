import React from 'react';
import Users from './containers/Users';
import User from 'commponents/User';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from './router/AppRouter';
import store from './store';
const App:React.FC = () => {
  return (
    
    <Provider store={store}>
      <Router>
       <AppRouter/>
       </Router>
      </Provider>
  
  );
}

export default App;
