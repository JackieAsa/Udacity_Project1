import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <DebounceInput 
            type="text"
            placeholder="Search by title or author"
            minLength={1} 
            debounceTimeout={300} 
            onChange={(event) => this.props.onSearch(event.target.value)}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
