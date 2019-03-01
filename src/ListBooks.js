import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

class ListBooks extends Component {
    handleChange = (book, newShelf) => {
        this.props.onChange(book, newShelf);
    };

    render() {
        const { books } = this.props;

        return (
            <ol className="books-grid">
                {books.length > 0 && books.map((book) => (
                    <li key={book.id}>
                        <Book data={book} onChange={this.handleChange} />
                    </li>
                ))}
            </ol>
        );
    }
}

ListBooks.propTypes = {
    books: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
};

export default ListBooks;
