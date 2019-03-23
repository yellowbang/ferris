import React, { Component } from 'react';
import './App.scss';

class Field extends Component {
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
            this.props.onBetsChange(this.props.index, inputNumbers);
        }
        if (typeof(sum) === "number") {
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

    onRadioChange = () => {
        this.props.onRadioChange(this.props.number);
    };

    componentWillReceiveProps(nextProps, nextState) {
        this.setState({bets:nextProps.bets})
    }

    render() {
        const me = this;
        const style = {
            "backgroundColor": me.props.backgroundColor
        };

        return (
            <div className="field-container">
                <input type="radio" value={this.props.index} checked={this.props.isChecked}
                       onChange={me.onRadioChange}/>
                <span className="number" style={style}>{me.props.number}</span>
                <span className="label">{me.props.label}</span>
                <input className="bets" onChange={me.onTextChange} value={this.state.bets}/>
                <input className="total" type='number' value={this.state.total} onChange={me.onTotalChange}/>
            </div>
        );
    }
}

export default Field;
