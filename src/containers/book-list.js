import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions";
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }
  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// 2. Anything returned from this function will end up as porps on the BookList container
function mapDispatchToProps(dispatch) {
  // 1. Whenever selectBook is called,
  // result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// 3. promote BookList from a component to a container - it needs to know about this new dispatch method,
// selectBook. Make it available as a prop.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
