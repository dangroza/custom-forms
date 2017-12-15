import React, { Component } from 'react';
import './App.css';
import CustomInput from './CustomInput.js';
import CustomTextarea from './CustomTextarea.js';
import CustomRadio from './CustomRadio.js';
import CustomCheckbox from './CustomCheckbox.js';
import CustomSelect from './CustomSelect.js';
import CustomPassword from './CustomPassword.js';
import CustomTagsContainer from "./CustomTagsContainer";

class GenericForm extends Component {
  constructor(props) {
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  updateFileds(fields,filedName,fieldValue) {
    switch (filedName) {
        case "tags":
          fields.tags.value.forEach(function(tag){
            if(tag.name === fieldValue.name)
              tag.selected = !tag.selected;
          });
          return fields;
      default:
        fields[filedName].value = fieldValue;
        return fields;
    }

  }

  handleFieldChange(field, value) {
    let updatedFields = this.updateFileds(this.state.fields,field,value);
    this.setState({ fields: updatedFields });
  }

  render() {
    let childNodes = [];
    let fields = this.state.fields;

    for (var key in fields) {
      if (fields.hasOwnProperty(key)) {
        let el = fields[key];
        el.id = key;
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
          case "checkbox":
            childNodes.push(<CustomCheckbox {...el} onChange={this.handleFieldChange} />)
            break;
          case "select":
            childNodes.push(<CustomSelect {...el} onChange={this.handleFieldChange} />)
            break;
          case "tags":
            childNodes.push(<CustomTagsContainer {...el} onChange={this.handleFieldChange} />)
            break;
          default:
            childNodes.push(<CustomInput {...el} onChange={this.handleFieldChange} />)
        }
      }
    }

    return (
      <div className="form-container">
        <form onSubmit={this.onSubmit}>
          <h2 className="form-title">{this.props.title}</h2>
          {childNodes}
          <button className="submit-button">Submit</button>
        </form>
      </div>
    );
  }
  onSubmit() {
      console.log(this.state.fields);
      this.props.onSubmit(this.state.fields);
  }
}

export default GenericForm;
