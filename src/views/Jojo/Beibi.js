import React, { Component } from 'react';
import Ferris from '../Components/Ferris';
import photos from '../../photos/beibi/photo';
import zuichibi from '../../sound/zuichibi.mp3';

class Beibi extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Ferris photos={photos} music={zuichibi}/>
        );
    }
}

export default Beibi;
