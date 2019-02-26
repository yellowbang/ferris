import React, { Component } from 'react';
import logo from './logo.svg';
import photos from './photos/photo';
import './App.scss';
import zuichibi from './sound/zuichibi.mp3';
import weiyi from './sound/weiyi.mp3';
const MUSICS = [zuichibi, weiyi];
const TOTAL_CIRCLE = photos.length;
const PHOTO_SWITCH_DELAY = 10000;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundMusicIndex: 0,
            selectedPhotoIndex: 0,
        };
        this.timeoutFn = null;
    }

    nextSong = () => {
        this.setState({
            backgroundMusicIndex: this.state.backgroundMusicIndex + 1,
        })
    };

    selectPhoto = (index) => {
        const me = this;
        this.setState({
            selectedPhotoIndex: index
        }, function() {
            if (me.timeoutFn) {
                clearTimeout(me.timeoutFn);
            }
            me.timeoutFn = setTimeout(me.selectPhoto.bind(me, index + 1), PHOTO_SWITCH_DELAY)
        })
    };

    componentDidMount () {
        this.selectPhoto(0);
    }

    render() {

        let pics = [];
        let svgSize = 50;
        let svgPosition = 21;
        let circlePosition = 13;
        let strokeWidth = 2;
        let circleSize = circlePosition - strokeWidth;
        svgSize = svgSize + 'vmin';
        svgPosition = svgPosition + 'vmin';
        circleSize = circleSize + 'vmin';
        circlePosition = circlePosition + 'vmin';
        strokeWidth = strokeWidth + 'vmin';

        for (let i = 0; i < TOTAL_CIRCLE; i++) {
            let deg = 360 / TOTAL_CIRCLE * i;
            let picDeg = -deg;
            pics.push(
                <div className="orbit-container" key={"pic" + i} style={{ transform: "rotate(" + deg + "deg)" }}>
                    <div className="orbit">
                        <svg width={svgSize} height={svgSize} style={{ position: 'absolute' }}>
                            <line x1={svgPosition} y1={svgPosition} x2={svgSize} y2={svgSize} strokeWidth={strokeWidth}
                                  style={{ stroke: "#cecece" }}
                                  fill="blue" width="30px"/>
                            <circle cx={circlePosition} cy={circlePosition} r={circlePosition} fill="#dedede"/>
                        </svg>
                        <div className="pic-container">
                            <div style={{ transform: "rotate(" + picDeg + "deg)" }}>
                                <img
                                    src={photos[i].src}
                                    alt="logo"
                                    className="pic"
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%"
                                    }}
                                />
                            </div>
                        </div>
                        <svg width={svgSize} height={svgSize} style={{ position: 'absolute' }}>
                            <circle
                                className="donut-segment" cx={circlePosition} cy={circlePosition} r={circleSize}
                                fill="transparent" stroke="#cfcf55" strokeWidth={strokeWidth} onClick={() => {
                                this.selectPhoto(i)
                            }}/>
                        </svg>
                    </div>
                </div>
            )
        }

        const selectedPhoto = photos[this.state.selectedPhotoIndex % TOTAL_CIRCLE];
        return (
            <div className="app">
                {/*<audio src={MUSICS[this.state.backgroundMusicIndex % 2]} controls autoPlay onEnded={this.nextSong}></audio>*/}
                <div className="stars"/>
                <div className="twinkling"/>
                <div className="pics-container">
                    {pics}
                </div>
                <div className="view-pic-container">
                    <img className="view-pic" src={selectedPhoto.src}/>
                    <span className="view-pic-descr">{selectedPhoto.descr}</span>
                </div>
            </div>
        );
    }
}

export default App;
