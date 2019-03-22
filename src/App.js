import React, { Component } from 'react';
import util from './util';
import Field from './Field';
import './App.scss';

const COLORS = [util.red, util.blue, util.green];
const COLOR_INDEXES = [0, 0, 1, 1, 2, 2, 0, 0, 1, 1, 2, 0, 0, 1, 1, 2, 2, 0, 0, 1, 2, 2, 0, 0, 1, 1, 2, 2, 0, 0, 1, 2, 2, 0, 0, 1, 1, 2, 2, 0, 1, 1, 2, 2, 0, 0, 1, 1, 2];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNumber: 0,
            total: 0,
            inputs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        };
    }

    onTotalChange = (index, value) => {
        let inputs = this.state.inputs.concat();
        inputs[index] = value;
        let total = inputs.reduce((partial_sum, a) => partial_sum + a);
        this.setState({
            inputs,
            total
        })
    };

    onRadioChange = (number) => {
        this.setState({
            selectedNumber: number
        })
    };

    addField = (i) => {
        const me = this;
        return (
            <Field
                key={i}
                index={i}
                onTotalChange={me.onTotalChange}
                onRadioChange={me.onRadioChange}
                number={i + 1}
                isChecked={this.state.selectedNumber === i + 1}
                backgroundColor={COLORS[COLOR_INDEXES[i]]}
            />
        )
    };

    calculateBenefit = () => {
        const me = this;
        const state = me.state;
        let serviceFee = state.total * 0.1;
        let numberBenefit = state.total - state.inputs[state.selectedNumber - 1] * 44 - serviceFee || 0;
        let colorBenefit = state.total - state.inputs[state.selectedNumber - 1] * 44 - serviceFee;
        let animalBenefit = state.total - state.inputs[state.selectedNumber - 1] * 44 - serviceFee;
        return { numberBenefit, colorBenefit, animalBenefit }
    };

    componentDidMount() {
    }

    render() {

        const me = this;
        let i = 0, j = 0, k = 0;
        let fields1 = [];
        let fields2 = [];
        for (i; i < 25; i++) {
            fields1.push(
                me.addField(i)
            )
        }
        for (i; i < COLOR_INDEXES.length; i++) {
            fields2.push(
                me.addField(i)
            )
        }

        const { numberBenefit, colorBenefit, animalBenefit } = me.calculateBenefit();

        return (
            <div className="app">
                <div className="result-header">
                    <div className="header-item">
                        总投注: {me.state.total}
                    </div>
                    <div className="header-item">
                        号码收益: {numberBenefit}
                    </div>
                    {/*<div className="header-item">*/}
                        {/*颜色收益: {numberBenefit}*/}
                    {/*</div>*/}
                    {/*<div className="header-item">*/}
                        {/*生肖收益: {numberBenefit}*/}
                    {/*</div>*/}
                </div>
                <div className="guest-input">
                    <div className="guest-input-column">
                        {fields1}
                    </div>
                    <div className="guest-input-column">
                        {fields2}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
