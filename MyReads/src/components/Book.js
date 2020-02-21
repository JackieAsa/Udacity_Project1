import React, { Component } from 'react';

class Book extends Component {
  render() {
    const book = this.props.book;
    const cover = (book.imageLinks && book.imageLinks.smallThumbnail) || "https://via.placeholder.com/128x193?text=No%20Cover"

    return (
      <div className="book">

        <div className="book-top">

          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${cover}")` }}></div>

          <div className="book-shelf-changer">
            <select value={book.shelf || "move"} onChange={(event) => this.props.changeBookLocation(book, event.target.value)}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead" >Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>

        </div>

        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
        
      </div>
    );
  }
}

export default Book;
