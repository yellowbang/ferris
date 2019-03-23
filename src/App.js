import React, { Component } from 'react';
import util from './util';
import Field from './Field';
import ColorField from './ColorField';
import './App.scss';

const COLORS = [util.red, util.blue, util.green];
const COLOR_LABELS = ["红", "蓝", "绿"];
const COLOR_INDEXES = [0, 0, 1, 1, 2, 2, 0, 0, 1, 1, 2, 0, 0, 1, 1, 2, 2, 0, 0, 1, 2, 2, 0, 0, 1, 1, 2, 2, 0, 0, 1, 2, 2, 0, 0, 1, 1, 2, 2, 0, 1, 1, 2, 2, 0, 0, 1, 1, 2];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNumber: 0,
            numberTotal: 0,
            numberInputs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            colorTotal: 0,
            colorInputs: [0, 0, 0],
        };
    }

    onNumberTotalChange = (index, value) => {
        let numberInputs = this.state.numberInputs.concat();
        numberInputs[index] = value;
        let numberTotal = numberInputs.reduce((partial_sum, a) => partial_sum + a);
        this.setState({
            numberInputs,
            numberTotal
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
                onTotalChange={me.onNumberTotalChange}
                onRadioChange={me.onRadioChange}
                number={i + 1}
                isChecked={this.state.selectedNumber === i + 1}
                backgroundColor={COLORS[COLOR_INDEXES[i]]}
            />
        )
    };

    onColorTotalChange = (index, value) => {
        let colorInputs = this.state.colorInputs.concat();
        colorInputs[index] = value;
        let colorTotal = colorInputs.reduce((partial_sum, a) => partial_sum + a);
        this.setState({
            colorInputs,
            colorTotal
        })
    };

    calculateBenefit = () => {
        const me = this;
        const state = me.state;
        let numberBenefit = state.numberTotal - state.numberInputs[state.selectedNumber - 1] * 44 - state.numberTotal * 0.1 || 0;
        // (49-4.9 -44)/49
        // 0.002
        let colorIndex = COLOR_INDEXES[state.selectedNumber - 1];
        let colorBenefit = state.colorTotal - state.colorInputs[colorIndex] * 2.5 - state.colorTotal * 0.1;
        // ( 3 - 2.5 - 0.3 ) /3
        // 0.067
        let animalBenefit = state.numberTotal - state.numberInputs[state.selectedNumber - 1] * 44;
        return { numberBenefit, colorBenefit, animalBenefit }
    };

    componentDidMount() {
    }

    render() {

        const me = this;
        let i = 0, j = 0, k = 0;
        let fields1 = [];
        let fields2 = [];
        let colorFields = [];

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

        for (j; j < COLOR_LABELS.length; j++) {
            colorFields.push(
                <ColorField
                    key={j}
                    index={j}
                    onTotalChange={me.onColorTotalChange}
                    color={COLOR_LABELS[j]}
                    backgroundColor={COLORS[j]}
                />
            )
        }


        const { numberBenefit, colorBenefit, animalBenefit } = me.calculateBenefit();

        return (
            <div className="app">
                <div className="result-header">
                    <div className="header-item">
                        号码总投注: {me.state.numberTotal}
                    </div>
                    <div className="header-item">
                        号码收益: {numberBenefit}
                    </div>
                </div>
                <div className="guest-input">
                    <div className="guest-input-column">
                        {fields1}
                    </div>
                    <div className="guest-input-column">
                        {fields2}
                    </div>
                </div>
                <div className="result-header">
                    <div className="header-item">
                        颜色总投注: {me.state.colorTotal}
                    </div>
                    <div className="header-item">
                        颜色收益: {colorBenefit}
                    </div>
                    {/*<div className="header-item">*/}
                    {/*生肖收益: {numberBenefit}*/}
                    {/*</div>*/}
                </div>
                <div className="guest-input">
                    {colorFields}
                </div>
            </div>
        );
    }
}

export default App;
