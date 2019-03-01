import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListBooks from './ListBooks';

class Bookshelf extends Component {
    handleChange = (book) => {
        this.props.onChange(book);
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

Bookshelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Bookshelf;
