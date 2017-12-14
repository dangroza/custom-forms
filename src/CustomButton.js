import React, { Component } from 'react';
import './App.css';

class CustomButton extends Component {
  render() {



    return(
      <div className="buttons">
        <button>{this.props.onClick}</button>
      </div>
    );
  }
}


export default CustomButton;
