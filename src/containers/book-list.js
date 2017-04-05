import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions'
import { bindActionCreators } from 'redux'

class BookList extends Component {
  renderList(){
    return this.props.books.map((book)=>{
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">{book.title}
        </li>
      )
    })
  }


  render (){
    return (
      <ul className ="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){ //this name is arbitruary
  //Whatever is returned will show up as props
  //inside of book list
  return {
    books: state.books
  }
}

function mapDispatchToProps(dispatch){
  //Whenever selectBook is called, the result should be passed  all of our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

//Promote booklist from a component to container, need to know about new dispatch method, selectBook.
//Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
