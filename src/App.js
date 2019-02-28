import React from 'react';

// import * as BooksAPI from './BooksAPI';
import SearchInput from './SearchInput';
import Bookshelf from './Bookshelf';

import './App.css';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
  };

  render() {
    const categories = [
      {
          name: 'None',
          searchable: false
      },
      {
          name: 'Currently Reading',
          searchable: true
      },
      {
          name: 'Want to read',
          searchable: true
      },
      {
          name: 'Read',
          searchable: true
      }
    ];

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <SearchInput />
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {categories.map(category => (
                    category.searchable && <Bookshelf key={category.name} title={category.name} />
                ))}
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
