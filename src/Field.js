import React, { Component } from 'react';
import './App.scss';

class Field extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    onTextChange = (input) => {
        this.props.onChange(this.props.index, parseInt(input.currentTarget.value) || 0);
    };

    render() {
        const me = this;
        const style = {
            "backgroundColor": me.props.backgroundColor
        };

        return (
            <div className="field-container">
                <span className="number" style={style}>{me.props.number}</span>
                <input className="total" type='number' onChange={me.onTextChange}>
                </input>
            </div>
        );
    }
}

export default Field;
