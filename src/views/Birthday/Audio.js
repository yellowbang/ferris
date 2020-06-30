import React, { Component } from 'react';
import './Birthday20200703.scss';
import kannikanwo from '../../sound/kannikanwo.mp3';

class Audio extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="audio-container">
                <audio src={kannikanwo} controls autoPlay onEnded={this.nextSong}/>
            </div>
        );
    }
}

export default Audio;
