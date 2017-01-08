import React from 'react';
import ReactDOM from 'react-dom';
import Wavesurfer from './react-wavesurfer';

var btn_play_pause = "PLAY";

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      pos: 0.01
    };
    this.handleTogglePlay = this.handleTogglePlay.bind(this);
    this.handlePosChange = this.handlePosChange.bind(this);
  }
  handleTogglePlay() {
    this.setState({
      playing: !this.state.playing
    });
  }
  handlePosChange(e) {
    this.setState({
      pos: e.originalArgs[0]
    });
  }
  play_pause(){
    if(!this.state.playing){
    this.setState({
      playing: true
      });
      btn_play_pause = "PAUSE";
    }
    else{
      this.setState({
        playing: false
        });
        btn_play_pause = "PLAY";          
    }
  }
  render() {
    return (
      <div>
        <Wavesurfer
          audioFile={'https://wavesurfer-js.org/example/media/demo.wav'}
          pos={this.state.pos}
          onPosChange={this.handlePosChange}
          playing={this.state.playing}
        />
        <button className={'botão_playepause'} onClick={this.play_pause.bind(this)} >{btn_play_pause}</button>
      </div>
      );
  }
}
