import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import {Provider} from 'react-redux'
import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import AuthReducer from './Containers/ReduxStore/Reducers/AuthReducer'
import thunk from 'redux-thunk'

const reducer=combineReducers({
  auth:AuthReducer
})
const logger=state=>next=>action=>{
  return next(action)
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store=createStore(reducer,composeEnhancers(applyMiddleware(logger,thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
