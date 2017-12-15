import React, { Component } from 'react';
import './App.css';

class CustomTag extends Component {
    constructor(props) {
        super(props);
        this.toggleSelectedTag = this.handleChange.bind(this);
        this.state = {isSelected: false};
    }


    handleChange(e) {
        this.setState(prevState => ({
        isSelected: !prevState.isSelected
        }));
    }

    render() {
        const isSelected = this.state.isSelected;
        let tag = this.props.value;

        return (
            <span className={ "tag-element" + (isSelected? ' selected-tag' : '')} onClick={this.toggleSelectedTag}>
                {tag.name}
            </span>
        );
    }
}

export default CustomTag;