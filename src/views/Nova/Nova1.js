import React, { Component } from "react";
import bgm from "../../sound/kannikanwo.mp3";
import Ferris from "../Components/Ferris";
import photos from "../../photos/nova1/photo";

class Nova1 extends Component {
  render() {
    return (
      <>
        #stars #stars2 #stars3
        <Ferris photos={photos} music={bgm} />
      </>
    );
  }
}

export default Nova1;
