import {
    createStore,
    combineReducers,
    applyMiddleware,
    Middleware,
  } from "redux";
  import thunk from "redux-thunk";
  
  import { userReducer  } from "./user";
  
  const logger: Middleware = (store) => (next) => (action) => {
    console.log(action);
    return next(action);
  };
  
  const reducers = combineReducers({ user: userReducer });
  const store = createStore(reducers, applyMiddleware(logger, thunk));

  console.log(reducers)
  console.log(store)
  
  export default store;