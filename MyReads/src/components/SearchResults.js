import React, { Component } from 'react';
import Book from './Book';

class SearchResults extends Component {
  render() {
    const results = this.props.results || []
    const query = this.props.query
    let emptyResults = null

    if (query === '') {
      emptyResults = 'Please enter a search query'
    } else {
      emptyResults = `Your search for '${query}' returned no results.  Please try again.` 
    }

    return (
      <div className="search-books-results">
        { results.length ? 
          <ol className="books-grid">
            { results.map((result) => (
              <li key={result.id}><Book book={result} changeBookLocation={this.props.moveBook} /></li>
            )) }
          </ol> : 
          <h3 className="no-results">{emptyResults}</h3>
        }
      </div>
    );
  }
}

export default SearchResults;

