import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookContainer from "./containers/BookContainer";

class App extends Component {
  render() {
    return (
      <div>
        <BookContainer />
      </div>
    );
  }
}

export default App;
