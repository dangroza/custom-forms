import React, { Component } from 'react';
import './App.css';

class CustomInput extends Component {
  render() {
    return (
      <div className="my-custom-container">
        {this.props.title}
      </div>
    );
  }
}

export default CustomInput;
