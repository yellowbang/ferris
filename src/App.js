import React, { Component } from 'react';
import util from './util';
import Field from './Field';
import ColorField from './ColorField';
import './App.scss';

const COLORS = [util.red, util.blue, util.green];
const COLOR_LABELS = ["红", "蓝", "绿"];
const COLOR_INDEXES = [0, 0, 1, 1, 2, 2, 0, 0, 1, 1, 2, 0, 0, 1, 1, 2, 2, 0, 0, 1, 2, 2, 0, 0, 1, 1, 2, 2, 0, 0, 1, 2, 2, 0, 0, 1, 1, 2, 2, 0, 1, 1, 2, 2, 0, 0, 1, 1, 2];
const ANIMAL_LABELS = ["猪", "狗", "鸡", "猴", "羊", "马", "蛇", "龙", "兔", "虎", "牛", "鼠"];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNumber: 0,
            numberTotal: 0,
            numberInputs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            colorTotal: 0,
            colorInputs: [0, 0, 0],
            animalTotal: 0,
            animalInputs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        };
    }

    saveData = () => {
        localStorage.lottory = JSON.stringify(this.state);
    };

    loadData = () => {
        this.setState(JSON.parse(localStorage.lottory));
    };

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

    addNumberField = (i) => {
        const me = this;
        return (
            <Field
                key={i}
                index={i}
                onTotalChange={me.onNumberTotalChange}
                onRadioChange={me.onRadioChange}
                number={i + 1}
                label={ANIMAL_LABELS[i % ANIMAL_LABELS.length]}
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

    onAnimalTotalChange = (index, value) => {
        let animalInputs = this.state.animalInputs.concat();
        animalInputs[index] = value;
        let animalTotal = animalInputs.reduce((partial_sum, a) => partial_sum + a);
        this.setState({
            animalInputs,
            animalTotal
        })
    };

    calculateBenefit = () => {
        const me = this;
        const state = me.state;
        let numberBenefit = state.numberTotal - state.numberInputs[state.selectedNumber - 1] * 44 - state.numberTotal * 0.1 || 0;
        // (49 - 4.9 - 44) / 49
        // 0.002
        let colorIndex = COLOR_INDEXES[state.selectedNumber - 1];
        let colorBenefit = state.colorTotal - state.colorInputs[colorIndex] * 2.5 - state.colorTotal * 0.1 || 0;
        // 32/49 -0.1 - 17/49 * 1.5
        // 0.03265306122448974
        let payTimes = (state.selectedNumber - 1) % ANIMAL_LABELS.length === 0 ? 9 : 11;
        let animalBenefit = state.animalTotal - state.animalInputs[(state.selectedNumber - 1) % ANIMAL_LABELS.length] * payTimes - state.animalTotal * 0.1 || 0;
        // ( 12 - 11.25 - 1.2 ) /12
        // -0.0375
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
        let animalsFields = [];

        for (i; i < 25; i++) {
            fields1.push(
                me.addNumberField(i)
            )
        }
        for (i; i < COLOR_INDEXES.length; i++) {
            fields2.push(
                me.addNumberField(i)
            )
        }

        for (j; j < COLOR_LABELS.length; j++) {
            colorFields.push(
                <ColorField
                    key={j}
                    index={j}
                    onTotalChange={me.onColorTotalChange}
                    label={COLOR_LABELS[j]}
                    backgroundColor={COLORS[j]}
                />
            )
        }

        for (k; k < ANIMAL_LABELS.length; k++) {
            animalsFields.push(
                <ColorField
                    key={k}
                    index={k}
                    onTotalChange={me.onAnimalTotalChange}
                    label={ANIMAL_LABELS[k]}
                />
            )
        }


        const { numberBenefit, colorBenefit, animalBenefit } = me.calculateBenefit();

        return (
            <div className="app">
                <button onClick={me.saveData}>Save</button>
                <button onClick={me.loadData}>Load</button>
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
                </div>

                <div className="guest-input">
                    {colorFields}
                </div>
                <div className="result-header">
                    <div className="header-item">
                        生肖总投注: {me.state.animalTotal}
                    </div>
                    <div className="header-item">
                        生肖收益: {animalBenefit}
                    </div>
                </div>
                <div className="guest-input">
                    {animalsFields}
                </div>

                <div className="result-header">
                    <div className="header-item">
                        总投注: {me.state.numberTotal + me.state.colorTotal + me.state.animalTotal}
                    </div>
                    <div className="header-item">
                        总收益: {numberBenefit + colorBenefit + animalBenefit}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
