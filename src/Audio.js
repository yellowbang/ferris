import React, { Component } from 'react';
import './App.scss';
import zuichibi from './sound/zuichibi.mp3';
import _0do from './sound/0do.wav';
import _0re from './sound/0re.wav';
import _0me from './sound/0me.wav';
import _0fa from './sound/0fa.wav';
import _0so from './sound/0so.wav';
import _0la from './sound/0la.wav';
import _0xi from './sound/0xi.wav';
import _1do from './sound/1do.wav';
import _1re from './sound/1re.wav';
import _1me from './sound/1me.wav';
import _1fa from './sound/1fa.wav';
import _1so from './sound/1so.wav';
import _1la from './sound/1la.wav';
import _1xi from './sound/1xi.wav';
import _2do from './sound/2do.wav';
import _2re from './sound/2re.wav';
import _2me from './sound/2me.wav';
import _2fa from './sound/2fa.wav';
import _2so from './sound/2so.wav';
import _2la from './sound/2la.wav';
import _2xi from './sound/2xi.wav';
import _3do from './sound/3do.wav';
import _3re from './sound/3re.wav';
import _3me from './sound/3me.wav';
import _3fa from './sound/3fa.wav';
import _3so from './sound/3so.wav';
import _3la from './sound/3la.wav';
import _3xi from './sound/4xi.wav';
import _4do from './sound/4do.wav';
import _4re from './sound/4re.wav';
import _4me from './sound/4me.wav';
import _4fa from './sound/4fa.wav';
import _4so from './sound/4so.wav';
import _4la from './sound/4la.wav';
import _4xi from './sound/4xi.wav';
import _5do from './sound/5do.wav';
import _5re from './sound/5re.wav';
import _5me from './sound/5me.wav';

const MUSICS = [zuichibi, zuichibi];
const NOTES = 'uytwe trtyrw uytwe opouyu yuopoty yuoport e iuiouty uytwe trtyrw uytwe opouyu osapouy ous uiuyuouyu ertouyt';

class Audio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundMusicIndex: 0,
            currentNote: undefined,
            switchIndex: 0
        };
    }

    setNote = (note) => {
        const me = this;
        this.setState({
            currentNote: note.concat(),
            switchIndex: me.state.switchIndex + 1
        })
    };

    nextSong = () => {
        this.setState({
            backgroundMusicIndex: this.state.backgroundMusicIndex + 1,
        })
    };

    componentDidMount() {
        const me = this;
        document.addEventListener("keydown", function(eve) {
            console.log(eve.key)
            switch (eve.key) {
                case '1':
                    me.setNote(_0do);
                    break;
                case '2':
                    me.setNote(_0re);
                    break;
                case '3':
                    me.setNote(_0me);
                    break;
                case '4':
                    me.setNote(_0fa);
                    break;
                case '5':
                    me.setNote(_0so);
                    break;
                case '6':
                    me.setNote(_0la);
                    break;
                case '7':
                    me.setNote(_0xi);
                    break;
                case '8':
                    me.setNote(_1do);
                    break;
                case '9':
                    me.setNote(_1re);
                    break;
                case '0':
                    me.setNote(_1me);
                    break;
                case 'q':
                    me.setNote(_1fa);
                    break;
                case 'w':
                    me.setNote(_1so);
                    break;
                case 'e':
                    me.setNote(_1la);
                    break;
                case 'r':
                    me.setNote(_1xi);
                    break;
                case 't':
                    me.setNote(_2do);
                    break;
                case 'y':
                    me.setNote(_2re);
                    break;
                case 'u':
                    me.setNote(_2me);
                    break;
                case 'i':
                    me.setNote(_2fa);
                    break;
                case 'o':
                    me.setNote(_2so);
                    break;
                case 'p':
                    me.setNote(_2la);
                    break;
                case 'a':
                    me.setNote(_2xi);
                    break;
                case 's':
                    me.setNote(_3do);
                    break;
                case 'd':
                    me.setNote(_3re);
                    break;
                case 'f':
                    me.setNote(_3me);
                    break;
                case 'g':
                    me.setNote(_3fa);
                    break;
                case 'h':
                    me.setNote(_3so);
                    break;
                case 'j':
                    me.setNote(_3la);
                    break;
                case 'k':
                    me.setNote(_3xi);
                    break;
                case 'l':
                    me.setNote(_4do);
                    break;
                case 'z':
                    me.setNote(_4re);
                    break;
                case 'x':
                    me.setNote(_4me);
                    break;
                case 'c':
                    me.setNote(_4fa);
                    break;
                case 'v':
                    me.setNote(_4so);
                    break;
                case 'b':
                    me.setNote(_4la);
                    break;
                case 'n':
                    me.setNote(_4xi);
                    break;
                case 'm':
                    me.setNote(_5do);
                    break;
                case ',':
                    me.setNote(_5re);
                    break;
                case '.':
                    me.setNote(_5me);
                    break;
                default:
                    break;
            }
        })
    }

    render() {

        const notePlayer1 = this.state.currentNote && this.state.switchIndex % 2 === 0 ?
            <audio src={this.state.currentNote} controls autoPlay/>
            :
            null;

        const notePlayer2 = this.state.currentNote && this.state.switchIndex % 2 === 1 ?
            <audio src={this.state.currentNote} controls autoPlay/>
            :
            null;

        return (
            <div className="audio-container">
                <div style={{opacity: 0.3}}>
                    {notePlayer1}
                    {notePlayer2}
                </div>
                <audio src={MUSICS[this.state.backgroundMusicIndex % 2]} controls autoPlay onEnded={this.nextSong}/>
            </div>
        );
    }
}

export default Audio;
