import React, { Component } from 'react';
import './App.css';

class CustomButton extends Component {
  render() {
    let showButton = this.props.disabled
    if (showButton === true){
      return (<button {...this.props} disabled>{this.props.id}</button>)
    }else {
      return (<button {...this.props}>{this.props.id}</button>)
    }


  }
}
export default CustomButton;
