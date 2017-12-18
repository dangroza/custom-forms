import React, { Component } from 'react';
import './App.css';
import CustomInput from './CustomInput';

class CustomRadio extends Component {
  render() {
    let valueNodes = [];
    let value = this.props.value;

    for (let i = 0; i < value.length; i++) {

      let el = value[i];

      let obj = {
        ...el, key: i,
        type: this.props.type,
        name: this.props.name,
        value: this.props.value
      };

      let node = <CustomInput onChange={this.props.onChange} {...obj} />
      valueNodes.push(node);
    }

    return (
      <div className="form-group" id="radio-buttons">
        <div><h4>{this.props.label}</h4></div>
        {valueNodes}
      </div>
    );
  }
}

export default CustomRadio;
