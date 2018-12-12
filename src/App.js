import React, {Component} from 'react';
import {BarChart} from 'react-d3-components';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
	render () {

		var data = [
			{
				label: 'somethingA',
				values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
			}
		];

		const n = 10;
		let pics = [];

		for (let i = 0; i < n; i++) {
			let deg = 360 / n * i;
			let picDeg = -deg;
			pics.push(
				<div className="orbit-container" key={"pic" + i} style={{transform: "rotate(" + deg + "deg)"}}>
					<div className="orbit">
						<div className="pic-container">
							<img src={logo} alt="logo" style={{transform: "rotate(" + picDeg + "deg)"}}/>
						</div>
					</div>
				</div>
			)
		}
		return (
			<div className="app">
				<BarChart data={data} width={400} height={400} margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
				<div className="pics-container">
					{pics}
				</div>
			</div>
		);
	}
}

export default App;
