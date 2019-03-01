import React, { Component } from 'react';

import Book from './Book';

class ListBooks extends Component {
    handleChange = (id, newShelf) => {
        this.props.onChange(id, newShelf);
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

export default ListBooks;
