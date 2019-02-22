import React, {Component} from 'react';
import './App.scss';
import ReactTable from "react-table";
import {LineChart} from "react-d3-components";
import 'react-table/react-table.css';
import Data from './Data.json';

const COLUMNS = [
    {
        Header: 'Port',
        accessor: 'portId',
    }, {
        id: 'temp',
        Header: 'Temperature',
        accessor: d => d.temps[d.temps.length - 1].y
    }, {
        Header: 'CPU',
        accessor: 'cpu',
    }, {
        Header: 'Other Props',
        accessor: 'other'
    }
];

class App extends Component {

    constructor (props) {
        super(props);
        this.state = {
            chartData: [
                {
                    label: '',
                    values: [{x: 0, y: 0}]
                }
            ]
        };
    }

    populateChart = (rowInfo) => {
        let chartData = [
            {
                label: rowInfo.portId,
                values: rowInfo.temps,
            }
        ];
        this.setState({
            chartData
        })
    };

    render () {
        const me = this;

        return (
            <div className="app">
                <div className="session-container left-container">
                    <ReactTable
                        data={Data}
                        columns={COLUMNS}
                        getTdProps={(state, rowInfo) => {
                            return {
                                onClick: () => {
                                    if (rowInfo) {
                                        me.populateChart(rowInfo.original);
                                    }
                                }
                            };
                        }}
                    />
                </div>
                <div className="session-container right-container">
                    <LineChart
                        data={this.state.chartData}
                        width={600}
                        height={600}
                        xAxis={{label: "time"}}
                        yAxis={{label: "temperature"}}
                        margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
                </div>
            </div>
        );
    }
}

export default App;
