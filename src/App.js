import React from 'react';
import { Link, Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import Bookshelf from './Bookshelf';

import './App.css';
import Search from "./Search";

class BooksApp extends React.Component {
  state = {
    books: [],
    searchResults: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
        this.setState({books: books});
    }, () => {
        console.warn('No books from API');
    });
  }

  updateBooksState(bookToChange) {
      this.setState((currentState) => {
          const alreadyExist = currentState.books.filter((book) => book.id === bookToChange.id);

          if (alreadyExist.length > 0) {
              return currentState.books.map((book) => {
                  if (book.id === bookToChange.id) {
                      book = bookToChange;
                  }

                  return book;
              });
          } else {
              currentState.books.push(bookToChange);
              currentState.searchResults = [];
              return currentState;
          }
      });
  }

  handleBookChange = (bookToChange) => {
    BooksAPI.update(bookToChange, bookToChange.shelf).then((res) => {
        if (!res.error) {
            this.updateBooksState(bookToChange);
        } else {
            console.warn(res.error);
        }
    }, (res) => {
      console.warn(res);
    });
  };

  handleQuery = (query) => {
    if (query === "") {
        return;
    }

    BooksAPI.search(query).then(result => {
        let books;

        if (result.error) {
            console.warn(result.error);
            books = result.items;
        } else {
            books = result;
        }

        this.setState({searchResults: books});
    }, () => {
        console.warn('No books from API');
    });
  };

  render() {
    const categories = [
      {
          name: 'None',
          code: 'none',
          showOnMainPage: false
      },
      {
          name: 'Currently Reading',
          code: 'currentlyReading',
          showOnMainPage: true
      },
      {
          name: 'Want to read',
          code: 'wantToRead',
          showOnMainPage: true
      },
      {
          name: 'Read',
          code: 'read',
          showOnMainPage: true
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
                        category.showOnMainPage &&
                        <Bookshelf
                            key={key}
                            title={category.name}
                            books={this.state.books.filter(book => {
                                return book.shelf === category.code;
                            })}
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
          <Route exact path='/search' render={({ history }) => (
              <Search
                  onQuery={this.handleQuery}
                  onChange={(bookToChange, newShelf) => {
                      this.handleBookChange(bookToChange, newShelf);
                      history.push('/');
                  }}
                  books={this.state.searchResults.filter(book => {
                      return book.title && book.authors && book.imageLinks && book.imageLinks.smallThumbnail;
                  })}
              />
           )}/>
      </div>
    )
  }
}

export default BooksApp
