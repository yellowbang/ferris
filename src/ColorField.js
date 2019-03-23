import React, { Component } from 'react';
import './App.scss';

class ColorField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bets: props.bets,
            total: 0
        };
    }

    componentDidMount() {
    }

    onTextChange = (input) => {
        const inputNumbers = input.currentTarget.value.trim().split(' ');
        let sum = 0;
        if (inputNumbers.length > 1) {
            sum = input.currentTarget.value.trim().split(' ').reduce((partial_sum, a) => parseInt(partial_sum) + parseInt(a, 10));
        } else if (inputNumbers.length === 1 && parseInt(inputNumbers) && typeof(parseInt(inputNumbers)) === "number") {
            sum = parseInt(inputNumbers);
        }
        this.props.onBetsChange(this.props.index, input.currentTarget.value);
        if (sum && typeof(sum) === "number") {
            this.props.onTotalChange(this.props.index, sum);
            this.setState({
                total: sum
            })
        }
    };

    onTotalChange = (input) => {
        let total = parseInt(input.currentTarget.value) || 0;
        this.props.onTotalChange(this.props.index, total);
        this.setState(total);
    };

    componentWillReceiveProps(nextProps, nextState) {
        const inputNumbers = nextProps.bets.trim().split(' ');
        this.setState({
            bets:nextProps.bets,
            total: inputNumbers.reduce((partial_sum, a) => parseInt(partial_sum) + parseInt(a, 10))
        })
    }

    render() {
        const me = this;
        const style = {
            "backgroundColor": me.props.backgroundColor
        };

        return (
            <div className="color-field-container">
                <span className="label" style={style}>{me.props.label}</span>
                <input className="bets" onChange={me.onTextChange} value={this.state.bets}/>
                <input className="total" onChange={me.onTotalChange} value={this.state.total}/>
            </div>
        );
    }
}

export default ColorField;
