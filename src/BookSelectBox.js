import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BookSelectBox extends Component {
  state = {
    value: this.props.category
  };

  handleChange = (event) => {
    const newShelf = event.target.value;
    this.props.onChange(newShelf);
  };

  render() {
    return (
      <select value={this.state.value} onChange={this.handleChange}>
        <option value="move" disabled="disabled">Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    );
  }
}

BookSelectBox.propTypes = {
  category: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default BookSelectBox;
