import React from 'react';
import { Link, Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import SearchInput from './SearchInput';
import Bookshelf from './Bookshelf';

import './App.css';

class BooksApp extends React.Component {
  state = {
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

  handleBookChange = (id, newShelf) => {
    this.setState((currentState) => {
        return currentState.books.map((book) => {
            if (book.id === id) {
                book.shelf = newShelf;
            }

            return book;
        });
    });
  };

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
          <Route exact path='/' render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                    {categories.map((category, key) => (
                        category.searchable &&
                        <Bookshelf
                            key={key}
                            code={category.code}
                            title={category.name}
                            books={this.state.books}
                            onChange={this.handleBookChange}
                        />
                    ))}
                  </div>
                </div>
                <div className="open-search">
                    <Link to="/search">
                        <button className="open-search">Add a book</button>
                    </Link>
                </div>
              </div>
          )}/>
          <Route exact path='/search' render={() => (
              <div className="search-books">
                  <div className="search-books-bar">
                      <Link to="/">
                        <button className="close-search">Close</button>
                      </Link>
                      <SearchInput />
                  </div>
                  <div className="search-books-results">
                      <ol className="books-grid"></ol>
                  </div>
              </div>
           )}/>
      </div>
    )
  }
}

export default BooksApp
