import {
    createStore,
    combineReducers,
    applyMiddleware,
    Middleware,
  } from "redux";
  import thunk from "redux-thunk";
  
  import { usersReducer  } from "./users";
  
  const logger: Middleware = (store) => (next) => (action) => {
    console.log(action);
    return next(action);
  };
  
  const reducers = combineReducers({ users: usersReducer });
  const store = createStore(reducers, applyMiddleware(logger, thunk));
  
  export default store;