import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { deposit, withdraw, changeName } from "./actions";
import rootReducer from "./reducers/rootReducer";
import bookReducer from "./reducers/bookReducer";
import { Provider } from "react-redux";

// 1 -> Reducer

/// 2 -> Store

// To create a store pass the reducer to the createStore function

const store = createStore(
  bookReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());
// console.log(store.getState());
// /// 3 -> Actions
//
// store.dispatch(deposit(50));
// console.log(store.getState());
//
// store.dispatch(deposit(50));
// console.log(store.getState());
//
// store.dispatch(withdraw(10));
// console.log(store.getState());
//
// store.dispatch(withdraw(100));
// console.log(store.getState());
//
// store.dispatch(deposit(100));
// console.log(store.getState());
//
// store.dispatch(changeName("Daniel"));
// console.log(store.getState());

// TO USE REDUX IN YOUR REACT APP you must pass provider your store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
