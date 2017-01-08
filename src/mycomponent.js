import React from 'react';
import ReactDOM from 'react-dom';
import Wavesurfer from './react-wavesurfer';

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
    this.setState({
      playing: true
      });
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
        <button onClick={this.play_pause.bind(this)} >PLAY</button>
      </div>
      );
  }
}
