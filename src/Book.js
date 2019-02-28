import React from 'react';

import BookSelectBox from './BookSelectBox';

function Book(props) {
    const { coverUrl, title, authors } = props.data;

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 188,
                        backgroundImage: `url("${coverUrl}")`
                    }}>
                </div>
                <div className="book-shelf-changer">
                    <BookSelectBox />
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors}</div>
        </div>
    );
}

export default Book;
