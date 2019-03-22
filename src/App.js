import React, { Component } from 'react';
import Field from './Field';
import './App.scss';

const COLORS = ['#ff0000de', '#03a9f4', '#008000a1'];
const COLOR_INDEXES = [0, 0, 1, 1, 2, 2, 0, 0, 1, 1, 2, 0, 0, 1, 1, 2, 2, 0, 0, 1, 2, 2, 0, 0, 1, 1, 2, 2, 0, 0, 1, 2, 2, 0, 0, 1, 1, 2, 2, 0, 1, 1, 2, 2, 0, 0, 1, 1, 2];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            inputs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        };
    }

    onFieldChange = (index, value) => {
        let inputs = this.state.inputs.concat();
        inputs[index] = value;
        this.setState({
            inputs
        })
    };

    componentDidMount() {
    }

    render() {

        const me = this;
        let i = 0;
        let fields1 = [];
        let fields2 = [];
        for (i; i < 25; i++) {
            fields1.push(
                <Field
                    key={i}
                    index={i}
                    onChange={me.onFieldChange}
                    number={i+1}
                    backgroundColor={COLORS[COLOR_INDEXES[i]]}
                />
            )
        }
        for (i; i < COLOR_INDEXES.length; i++) {
            fields2.push(
                <Field
                    key={i}
                    index={i}
                    onChange={me.onFieldChange}
                    number={i+1}
                    backgroundColor={COLORS[COLOR_INDEXES[i]]}
                />
            )
        }

        const sum = this.state.inputs.reduce((partial_sum, a) => partial_sum + a);

        return (
            <div className="app">
                <div className="result-header">
                    {sum}
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
