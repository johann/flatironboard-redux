import React, { Component } from "react";

import { connect } from "react-redux";

// class BookShow extends Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.book}</h1>
//       </div>
//     );
//   }
// }

const BookShow = props => {
  return (
    <div>
      <h1>{props.selectedBook}</h1>
    </div>
  );
};

// grab some state and map it to some new props
function mapStateToProps(state) {
  return {
    selectedBook: state.selectedBook
  };
}

export default connect(mapStateToProps)(BookShow);
