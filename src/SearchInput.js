import React, { Component } from 'react';

class SearchInput extends Component {
    state = {
        query: ''
    };

    render() {
        return (
            <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>
            </div>
        );
    }
}

export default SearchInput;
