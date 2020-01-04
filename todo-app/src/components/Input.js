import React, { Component } from "react";

import "./Input.css"

export default class Input extends Component {
    state = {
        inputValue: ""
    }

    _handleSubmit = event => {
        event.preventDefault();
        this.props.onAdd(this.state.inputValue);
        this.setState({ inputValue: "" });
    };

    _handleChange = event => {
        this.setState({
            inputValue: event.target.value
        })
    }

    render() {
        const { inputValue } = this.state;
        return (
            <form onSubmit={this._handleSubmit} className="pt-5">
                <input 
                    type="text"
                    placeholder="Add your new tasks here"
                    className="input-bar"
                    value={inputValue}
                    onChange={this._handleChange}
                />
            </form>
        )
    }
}