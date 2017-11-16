import React, { Component } from "react";
import { connect } from "react-redux";

class BookList extends Component {
  render() {
    const bookItems = this.props.books.map((book, index) => (
      <li key={index}>{book}</li>
    ));
    console.log("props", this.props);
    return (
      <div>
        <ul>{bookItems}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("mstp", state);
  return {
    beef: true,
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);
//export default BookList;

// hoc(BookList);
//
// pretendConnect()(BookList);
// function pretendConnect(newProps, newActions) {
//   return function hoc(RenderedComponent) {
//     return class extends Component {
//       render() {
//         return <RenderedComponent {...newProps} {...newActions} />;
//       }
//     };
//   };
// }
