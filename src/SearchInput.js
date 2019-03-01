import React, { Component } from 'react';

class SearchInput extends Component {
    state = {
        query: ''
    };

    handleChange = (event) => {
        const searchQuery = event.target.value || "";

        this.setState({
            query: searchQuery
        });
        this.props.onChange(searchQuery);
    };

    render() {
        return (
            <div className="search-books-input-wrapper">
                <input
                    type="text"
                    placeholder="Search by title or author"
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default SearchInput;
