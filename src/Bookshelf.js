import React, { Component } from 'react';

import ListBooks from './ListBooks';

class Bookshelf extends Component {
    handleChange = (id, newShelf) => {
        this.props.onChange(id, newShelf);
    };

    render() {
        const { books, title } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ListBooks
                        books={books}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        );
    }
}

export default Bookshelf;
