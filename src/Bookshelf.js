import React, { Component } from 'react';

import Book from './Book';

class Bookshelf extends Component {
    handleChange = (id, newShelf) => {
        this.props.onChange(id, newShelf);
    };

    render() {
        const { books, code, title } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.length > 0 && books.map((book) => (
                            (book.shelf === code && (
                                <li key={book.id}>
                                    <Book data={book} onChange={this.handleChange} />
                                </li>
                            ))
                        ))}
                        {books.length === 0 && (
                            <li>No books here, yet. Add some! ;-)</li>
                        )}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Bookshelf;
