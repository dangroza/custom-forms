import React, { Component } from 'react';
import './App.css';
import GenericForm from './GenericForm.js';

class App extends Component {
  customHandleSubmit(params) {
    console.log('Params for server:');
    console.log(params);
  }

  onSubmit() {
    console.log('Trigger onSubmit from App');
  }

  onCancel() {
    console.log('Trigger onCancel from App');
  }

  render() {
    let myFields = {
      title: 'Login',
      fields: [
        { label: 'Email', name: 'email', type: 'text', value: 'dan@gmail.com', placeholder: 'Insert an email'},
        { label: 'Password', name: 'password', type: 'password', value: 'pass', placeholder: 'Insert a password' },
        { label: 'Comments', name: 'comments', type: 'textarea', value: 'val', placeholder: 'Add a comment' },
        { label: 'Select', name: 'select', type: 'select', value: ['Volvo', 'Saab', 'Opel', 'Audi', 'Bmw', 'Mercedes'] },
        {
          label: 'Gender', name: 'gender', type: 'radio', value: [
            { id: 'maleGender', value: 'male', label: 'Male', selected: true },
            { id: 'femaleGender', value: 'female', label: 'Female' },
            { id: 'otherGender', value: 'other', label: 'Other' }], validations: []
        },
        {
          label: 'Make', name: 'make', type: 'checkbox', value: [
            { id: 'maleMake', value: 'male', label: 'Male', selected: true },
            { id: 'femaleMake', value: 'female', label: 'Female' },
            { id: 'otherMake', value: 'other', label: 'Other' }], validations: []
        }
      ],
      buttons: [
        { id: 'submit', label: 'Submit', onClick: this.onSubmit, disabled: '' },
        { id: 'cancel', label: 'Cancel', onClick: this.onCancel, disabled: '' },
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
