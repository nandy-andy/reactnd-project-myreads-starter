import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchInput from './SearchInput';
import ListBooks from './ListBooks';

class Search extends Component {
    onQuery = (query) => {
      this.props.onQuery(query);
    };

    render() {
        const {books, onQuery, onChange} = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">Close</button>
                    </Link>
                    <SearchInput onChange={onQuery} />
                </div>
                <div className="search-books-results">
                    <ListBooks
                        books={books}
                        onChange={onChange}
                    />
                </div>
            </div>
        );
    }
}

export default Search;
