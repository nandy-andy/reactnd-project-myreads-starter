import React, {Component} from 'react';
import PropTypes from 'prop-types';

import BookSelectBox from './BookSelectBox';

class Book extends Component {
  handleChange = (book, newShelf) => {
    book.shelf = newShelf;
    this.props.onChange(book);
  };

  render() {
    const {imageLinks, title, authors} = this.props.data;
    let shelf = this.props.data.shelf || 'none';

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              backgroundImage: `url("${imageLinks.smallThumbnail}")`
            }}>
          </div>
          <div className="book-shelf-changer">
            <BookSelectBox category={shelf} onChange={(newShelf) => {
              this.handleChange(this.props.data, newShelf);
            }}/>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors.join(', ')}</div>
      </div>
    );
  }
}

Book.propTypes = {
  data: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Book;
