import React, { Component } from 'react';

class BookSelectBox extends Component {
  state = {
    value: ''
  };

  render() {
    return (
      <select>
        <option value="move" disabled="disabled">Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    );
  }
}

export default BookSelectBox;
