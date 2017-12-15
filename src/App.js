import React, { Component } from 'react';
import './App.css';
import GenericForm from './GenericForm.js';

class App extends Component {
  customHandleSubmit(params) {
    console.log('Params for server:');
    console.log(params);
  }

  render() {
    let myFields = {
      title: 'Login',
      fields: [
        { label: 'Email', name: 'email', type: 'text', value: 'dan@gmail.com', placeholder: 'Insert an email'},
        { label: 'Password', name: 'password', type: 'password', value: 'pass', placeholder: 'Insert a password' },
        {
            label: 'Tags', name: 'tags', type: 'tags', value: [
                {selected:false, name:'tag1'},
                {selected:false, name:'tag2'},
                {selected:false, name:'tag3'},
                {selected:false, name:'tag4'},
            ]
        }
      /*  { label: 'Email', name: 'email', type: 'text', value: 'val', placeholder: 'Insert an e-mail', validations: [] },
        { label: 'Password', name: 'password', type: 'password', value: 'password', placeholder: 'Insert a password' },
        { label: 'Comments', name: 'comments', type: 'textarea', value: 'val', placeholder: 'Add a comment' },
        { label: 'Select', name: 'select', type: 'select', value: ['Volvo', 'Saab', 'Opel', 'Audi', 'Bmw', 'Mercedes'] },
        {
          label: 'Gender', name: 'gender', type: 'radio', value: [
            { id: 'male', value: 'male', label: 'Male', selected: true },
            { id: 'female', value: 'female', label: 'Female' },
            { id: 'other', value: 'other', label: 'Other' }], validations: []
        },
        {
          label: 'Make', name: 'make', type: 'checkbox', value: [
            { id: 'male', value: 'male', label: 'Male', selected: true },
            { id: 'female', value: 'female', label: 'Female' },
            { id: 'other', value: 'other', label: 'Other' }], validations: []
        } */
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
