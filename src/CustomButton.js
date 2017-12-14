import React, { Component } from 'react';
import './App.css';

class CustomButton extends Component {
  render() {



    return(
        <button {...this.props}>{this.props.id}</button>
    );
  }
}


export default CustomButton;
