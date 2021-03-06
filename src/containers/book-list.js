import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  renderList(){
    console.log(this.props);
    return this.props.books.map((book) => {
      return(
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  //maps returned objects(state) to props
  return {
    books: state.books
  }
}

//anything returned from this funtion will end
//up as props on the BookList container
function mapDispatchToProps(dispatch){
  //whenever selectBook is called the result
  //should be passed to all our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

//promote BookList from a Component to a container
//it needs to know about the new dispatch method, selectBook. Make it
//available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
