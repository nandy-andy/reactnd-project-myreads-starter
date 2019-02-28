import React, { Component } from 'react';

import BookSelectBox from './BookSelectBox';

class Book extends Component {
    handleChange = (id, newShelf) => {
        this.props.onChange(id, newShelf);
    };

    render() {
        const {id, imageLinks, title, authors, shelf} = this.props.data;

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
                            this.handleChange(id, newShelf);
                        }} />
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors.join(', ')}</div>
            </div>
        );
    }
}

export default Book;
