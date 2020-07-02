import React, {Component} from 'react';
import './Birthday20200703.scss';
import kannikanwo from '../../sound/kannikanwo.mp3';

class Audio extends Component {
  render() {
    return (
      <div className="audio-container">
        <audio id={'kannikanwo'} src={kannikanwo} controls autoPlay onEnded={this.nextSong}/>
      </div>
    );
  }
}

export default Audio;
