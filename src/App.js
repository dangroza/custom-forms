import React, { Component } from 'react';
import './App.css';
import GenericForm from './GenericForm.js';

class App extends Component {
  customHandleSubmit(e) {
    e.preventDefault();
    console.log('test');
  }

  render() {
    let myFields = {
      title: 'Register Form',
      fields: [
        { label: 'Email', name: 'email', type: 'text', value: 'val', placeholder: 'Insert an e-mail', validations: [] },
        { label: 'Password', name: 'password', type: 'password', value: 'password', placeholder: 'Insert a password' },
        { label: 'Comments', name: 'comments', type: 'textarea', value: 'val', placeholder: 'Add a comment' },
        { label: 'Select', name: 'select', type: 'select', value: ['Volvo', 'Saab', 'Opel', 'Audi', 'Bmw', 'Mercedes'] },
        {
          label: 'Gender', name: 'gender', type: 'radio', value: [
            { id: 'male', value: 'male', label: 'Male', selected: true },
            { id: 'female', value: 'female', label: 'Female' },
            { id: 'other', value: 'other', label: 'Other' }], validations: []
        }
      ],

      onSubmit: this.customHandleSubmit
    }
    return (
      <div className="main-app">
        <GenericForm {...myFields} />
      </div>
    );
  }
}

export default App;
