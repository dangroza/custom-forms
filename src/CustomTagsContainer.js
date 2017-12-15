import React, { Component } from 'react';
import './App.css';
import CustomTag from "./CustomTag";

class CustomTagsContainer extends Component {
    render() {
        let tagNodes = [];
        let values = this.props.value;

        for (let i = 0; i < values.length; i++) {

            let node = (<CustomTag value={values[i]}/>);
            tagNodes.push(node);
        }

        return (
            <div className="form-group">
                {tagNodes}
            </div>
        );
    }
}

export default CustomTagsContainer;