import React from 'react';

import Book from './Book';

function Bookshelf(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.length > 0 && props.books.map((book, index) => (
                        (book.shelf === props.code && (
                            <li key={index}>
                                <Book data={book} />
                            </li>
                        ))
                    ))}
                    {props.books.length === 0 && (
                        <li>No books here, yet. Add some! ;-)</li>
                    )}
                </ol>
            </div>
        </div>
    );
}

export default Bookshelf;
