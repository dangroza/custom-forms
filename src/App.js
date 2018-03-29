import React, { Component } from 'react';
import './App.css';
import CustomReactForm from 'custom-react-form';
import CustomInput from './CustomInput';

const formFields = {
  settings: {
    title: 'Add a resource:',
    subTitle: 'Required Info'
  },
  fields: [
    {
      label: 'Resource URL',
      id: 'resource_url',
      type: 'url',
      value: '',
      mandatory: true,
      tabIndex: 1,
      placeholder: 'Paste a resource URL',
      errors: []
    },
    {
      type: 'container',
      content: '<div>Boss</div>',
      cssClass: 'custom'
    },
    {
      type: 'hoc',
      component: CustomInput,
      componentProps: { title: 'dan' }
    },
    {
      label: 'Title',
      id: 'title',
      type: 'text',
      value: '',
      mandatory: true,
      tabIndex: 2,
      placeholder: 'Great Resource Title'
    },
    {
      label: 'Resource Type(s)',
      id: 'types',
      type: 'selectTab',
      value: ['red','blue'],
      options: [
        {
          label: 'Primary Colors', options: [
            { label: 'Yellow', value: 'yellow' },
            { label: 'Red', value: 'red' },
            { label: 'Blue', value: 'blue' }
          ]
        },
        {
          label: 'Secondary Colors', options: [
            { label: 'Orange', value: 'orange' },
            {
              label: 'Purple', options: [
                { label: 'Light Purple', value: 'light_purple' },
                { label: 'Medium Purple', value: 'medium_purple' },
                { label: 'Dark Purple', value: 'dark_purple' }
              ]
            },
            { label: 'Green', value: 'green' }
          ]
        },
        {
          label: 'White',
          value: 'white',
        }
      ],
      multi: true,
      mandatory: true,
      tabIndex: 3,
      placeholder: 'Resource Type(s)'
    },

    {
      label: 'Subject(s)',
      id: 'subjects',
      type: 'selectTab',
      options: [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' },
      ],
      value: '',
      mandatory: true,
      tabIndex: 4,
      placeholder: 'Select a subject'
    },
    {
      label: 'Grade Level(s)',
      id: 'grade_levels',
      type: 'selectTab',
      options: [],
      mandatory: true,
      tabIndex: 5,
      placeholder: 'Select a grade level'
    },
    {
      label: 'Rating',
      id: 'rating',
      type: 'selectTab',
      options: [],
      tabIndex: 6,
      placeholder: 'Select a rating',
      tooltip: 'Replace this with rating tooltip message'
    },
    {
      type: 'container',
      content: '* At least one <b>concept</b> or <b>aditional tag</b> is required to add a resource',
    },
    {
      label: 'Concept(s)',
      id: 'concepts',
      type: 'selectTab',
      options: [],
      tabIndex: 8,
      placeholder: 'Select a concept',
      tooltip: 'Replace this with concept tooltip message'
    },
    {
      label: 'Aditional tags',
      id: 'tags',
      type: 'selectTab',
      value: ['one'],
      options: [{ value: 'one', label: 'One' }],
      multi: true,
      allowNew: true,
      tabIndex: 9,
      placeholder: 'Provide additional tags',
      tooltip: 'Replace this with concept tooltip message'
    },
    {
      label: 'Description',
      id: 'description',
      type: 'richtext',
      value: '',
      tabIndex: 10,
      mandatory: true,
      placeholder: 'Provide an overview of the resource including tips for use and keywords.',
      tooltip: 'Replace this with description tooltip message'
    },

    {
      label: 'Random comments',
      id: 'comments',
      type: 'textarea',
      value: '',
      tabIndex: 111,
      mandatory: true,
      placeholder: 'Provide some random comment...',
      tooltip: 'Replace this with comment tooltip message'
    }


 /*
    {label: 'Email', name: 'email', type: 'text', value: 'dan@gmail.com', placeholder: 'Insert an email'},
    {label: 'Password', name: 'password', type: 'password', value: 'pass', placeholder: 'Insert a password'},
    {
      label: 'Tags', name: 'tags', type: 'tags', value: [
      {selected: false, name: 'tag1'},
      {selected: true, name: 'tag2'},
      {selected: false, name: 'tag3'},
      {selected: false, name: 'tag4'},
    ]
    },
    {label: 'Email', name: 'email', type: 'text', value: 'val', placeholder: 'Insert an e-mail', validations: []},
    {label: 'Password', name: 'password', type: 'password', value: 'password', placeholder: 'Insert a password'},
    {label: 'Comments', name: 'comments', type: 'textarea', value: 'val', placeholder: 'Add a comment'},
    {
      label: 'Select', name: 'select', type: 'select',
      value: [{slected: true, name: 'Volvo'},
        {name: 'Saab'},
        {name: 'Opel'},
        {name: 'Audi'},
        {name: 'Bmw'},
        {name: 'Mercedes'}]
    },
    {
      label: 'Gender', name: 'gender', type: 'radio', value: [
      {id: 'male', value: 'male', label: 'Male', selected: true},
      {id: 'female', value: 'female', label: 'Female'},
      {id: 'other', value: 'other', label: 'Other'}], validations: []
    },
    {
      label: 'Make', name: 'make', type: 'checkbox', value: [
      {id: 'male', value: 'male', label: 'Male', selected: true},
      {id: 'female', value: 'female', label: 'Female'},
      {id: 'other', value: 'other', label: 'Other'}], validations: []
    }

    */
  ]
};


class App extends Component {
  constructor(props) {
    super(props);
    this.onSave = this.onSave.bind(this);
    this.updateParentCallback = this.updateParentCallback.bind(this);
    this.state = {
      formFields: {
        ...formFields,
        fields: [
          ...formFields.fields,
          {id: 'cancel', type: 'button', label: 'Cancel', onClick: this.onCancel, tabIndex: 11, buttonTag: 'a' },
          {id: 'save', type: 'button', label: 'Save', onClick: this.onSave, tabIndex: 12, buttonTag: 'a' },
          {id: 'next_step', type: 'button', label: 'Next Step', onClick: this.onNextStep, tabIndex: 13, buttonTag: 'a' }
        ]
      }
    }
  }

  customHandleSubmit(params) {
    console.log('Params for server:');
    console.log(params);
  }

  onSave() {
    console.log('Trigger onSave from App');
    console.log(this.state.formFields);
  }

  onCancel() {
    console.log('Trigger onCancel from App');
  }

  onNextStep() {
    console.log('Trigger onNextStep from App');
  }

  updateParentCallback(updatedFields) {
    this.setState({ formFields: updatedFields });
  }

  render() {
    return (
      <div className="main-app">
        <CustomReactForm { ...this.state.formFields } updateParentCallback={this.updateParentCallback} />
      </div>
    );
  }
}

export default App;
