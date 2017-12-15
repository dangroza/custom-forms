import React, { Component } from 'react';
import './App.css';

class CustomTag extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange() {
        this.props.onChange(this.props.tagId,this.props.value);
    }

    render() {
        let tag = this.props.value;
        let isSelected = this.props.value.selected;

        return (
            <span className={ "tag-element" + (isSelected? ' selected-tag' : '')} onClick={this.handleChange}>
                {tag.name}
            </span>
        );
    }
}

export default CustomTag;