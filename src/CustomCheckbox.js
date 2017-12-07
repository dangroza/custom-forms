import React, { Component } from 'react';
import './App.css';
import CustomInput from './CustomInput';

class CustomCheckbox extends Component {
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
      }

      let node = <CustomInput {...obj} />
      valueNodes.push(node);
    }

    return (
      <div className="form-group" id="checkbox">
        <div><h4>{this.props.label}</h4></div>
        {valueNodes}
      </div>
    );
  }
}

export default CustomCheckbox;
