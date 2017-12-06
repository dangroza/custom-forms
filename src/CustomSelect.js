import React, { Component } from 'react';
import './App.css';

class CustomSelect extends Component {
  render() {

    let labelText = this.props.type === "select" ? this.props.label : this.props.name

    let selectNodes = [];
    let value = this.props.value;

    for (let i = 0; i < value.length; i++) {

      let obj = {
        value: value[i], key: i
      }

      let node = (<option key={obj.key} value={obj.value}>{obj.value}</option>);
      selectNodes.push(node);
    }

    return (
      <div className="form-group">
        <label>{labelText}</label>
        <select name={this.props.name}>
          {selectNodes}
        </select>
      </div>
    );
  }
}

export default CustomSelect;
