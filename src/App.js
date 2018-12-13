import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
    render () {

        const n = 10;
        let pics = [];
        let circlePosition = 13;
        let strokeWidth = 2;
        let circleSize = circlePosition - strokeWidth;
        circleSize = circleSize + 'vmin';
        circlePosition = circlePosition + 'vmin';
        strokeWidth = strokeWidth + 'vmin';


        for (let i = 0; i < n; i++) {
            let deg = 360 / n * i;
            let picDeg = -deg;
            pics.push(
                <div className="orbit-container" key={"pic" + i} style={{transform: "rotate(" + deg + "deg)"}}>
                    <div className="orbit">
                        <svg width={"50vmin"} height={"50vmin"} style={{position: 'absolute'}}>
                            <line x1="21vmin" y1="21vmin" x2="50vmin" y2="50vmin" stroke-width={strokeWidth}
                                  style={{stroke: "rgb(33,0,0)"}}
                                  fill="blue" width="30px"/>
                            <circle cx={circlePosition} cy={circlePosition} r={circlePosition} fill="white"/>
                        </svg>
                        <div className="pic-container">
                            <div style={{transform: "rotate(" + picDeg + "deg)"}}>
                                <img
                                    src={logo}
                                    alt="logo"
                                    className="pic"
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%"
                                    }}/>
                            </div>
                        </div>
                        <svg width={"50vmin"} height={"50vmin"} style={{position: 'absolute'}}>
                            <circle
                                className="donut-segment" cx={circlePosition} cy={circlePosition} r={circleSize}
                                fill="transparent" stroke="#ce4b99" stroke-width={strokeWidth}/>
                        </svg>
                    </div>
                </div>
            )
        }

        return (
            <div className="app">
                <div className="stars"/>
                <div className="twinkling"/>
                <div className="pics-container">
                    {pics}
                </div>
            </div>
        );
    }
}

export default App;
