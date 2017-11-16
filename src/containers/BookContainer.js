import React, { Component } from "react";
import BookList from "../components/BookList";
import BookShow from "../components/BookShow";

class BookContainer extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookShow />
      </div>
    );
  }
}

export default BookContainer;
