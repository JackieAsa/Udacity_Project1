import React from 'react'
import { Route, Link } from 'react-router-dom';
import './App.css'

import * as BooksAPI from './BooksAPI'
import Shelf from './components/Shelf';
import Search from './components/Search';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  Shelves = [
    { filterName: "currentlyReading", title: "Currently Reading" },
    { filterName: "wantToRead", title: "Want to Read" },
    { filterName: "read", title: "Read" }
  ]

  componentDidMount() {
    this.refreshBooks()
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() =>  this.refreshBooks())
  }

  refreshBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({ books }))
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                { this.Shelves.map( (shelf) => (
                  <Shelf
                    key={shelf.filterName}
                    filterName={shelf.filterName}
                    title={shelf.title}
                    books={this.state.books}
                    moveBook={this.moveBook}
                  />
                ))}
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )} />

        <Route path="/search" render={() => (
          <Search books={this.state.books} moveBook={this.moveBook} />
        )} />
      </div>
    )
  }
}


export default BooksApp
