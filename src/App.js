import React from 'react';

import * as BooksAPI from './BooksAPI';
import SearchInput from './SearchInput';
import Bookshelf from './Bookshelf';

import './App.css';

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
        this.setState({books: books});
        console.log(books);
    }, () => {
        console.warn('No books from API');
    });
  }

  render() {
    const categories = [
      {
          name: 'None',
          searchable: false
      },
      {
          name: 'Currently Reading',
          code: 'currentlyReading',
          searchable: true
      },
      {
          name: 'Want to read',
          code: 'wantToRead',
          searchable: true
      },
      {
          name: 'Read',
          code: 'read',
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
                {categories.map((category, key) => (
                    category.searchable && <Bookshelf key={key} code={category.code} title={category.name} books={this.state.books} />
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
