import React, { Component } from 'react';
import './App.css';
import CustomInput from './CustomInput.js';
import CustomTextarea from './CustomTextarea.js';
import CustomRadio from './CustomRadio.js';
import CustomSelect from './CustomSelect.js';
import CustomPassword from './CustomPassword.js';

class GenericForm extends Component {
  constructor(props) {
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    let childrenObj = {};
    this.props.fields.forEach(function (el, i) {
      let obj = { ...el, key: el.name }; // TODO: improve this key to make sure it is unique - prevent from allowing duplicate keys in hash
      childrenObj[el.name]= obj;
    });
    this.state ={
      isValid: false,
      isComplete: false,
      fields: childrenObj
    };
  }

  handleFieldChange(field, value) {
    console.log("We are updating '"+ field + "' with: '"+ value);
    let updatedFields = this.state.fields;
    updatedFields[field].value = value;
    this.setState({ fields: updatedFields });
  }
  render() {
    let childNodes = [];
    let fields = this.state.fields;

    for (var key in fields) {
       if (fields.hasOwnProperty(key)) {
          let el = fields[key];
          switch (el.type) {
            case "text":
              childNodes.push(<CustomInput {...el} onChange={this.handleFieldChange} />)
              break;
            case "password":
              childNodes.push(<CustomPassword {...el} onChange={this.handleFieldChange} />)
              break;
            case "textarea":
              childNodes.push(<CustomTextarea {...el} onChange={this.handleFieldChange} />)
              break;
            case "radio":
              childNodes.push(<CustomRadio {...el} onChange={this.handleFieldChange} />)
              break;
            case "select":
              childNodes.push(<CustomSelect {...el} onChange={this.handleFieldChange} />)
              break;
            default:
              childNodes.push(<CustomInput {...el} onChange={this.handleFieldChange} />)
          }
       }
    }

    return (
      <div className="form-container">
        <form onSubmit={this.props.onSubmit}>
          <h2 className="form-title">{this.props.title}</h2>
          {childNodes}
          <button className="submit-button">Submit</button>
        </form>
      </div>
    );
  }
}

export default GenericForm;
