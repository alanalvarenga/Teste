import React from 'react';
import ReactDOM from 'react-dom';
import Wavesurfer from './react-wavesurfer';

var btn_play_pause = "PLAY";
var icon_play_pause = "icon-play";
var audio_nome = "te";
var url_audio = "./src/";

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      pos: 0.01,
      //audio_nome: "ta"
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
      icon_play_pause = "icon-pause";
    }
    else{
      this.setState({
        playing: false
        });
        btn_play_pause = "PLAY";
        icon_play_pause = "icon-play";
    }
  }
  render() {
    url_audio = "./src/" + this.props.audio;
    return (
      <div className={'wave_com_btns'}>
        <table>
          <tbody>
            <tr>
              <td className={'btn_play'}>
                <button className={icon_play_pause} onClick={this.play_pause.bind(this)}></button>
              </td>
              <td className={'wavesurferDIV'}>
                <div className={'wavesurferClass'} >
                  <Wavesurfer
                    audioFile={url_audio}
                      pos={this.state.pos}
                        onPosChange={this.handlePosChange}
                          playing={this.state.playing}
                  />
                </div>
              </td>
              <td className={'botoes'}>
                <td className={'Valor'}>
                  $20
                </td>
                <td className={'carrinho'}>
                  <div className={'carrinho'}>
                    <button className={'btn-cart'}></button>
                  </div>
                </td>
                <td className={'favorito'}>
                  <button className={'btn-heart'}></button>
                </td>
                <td className={'info'}>
                  <div className={'info'}>
                    <button className={'btn-info'}></button>
                  </div>
                </td>
                <td className={'cloud'}>
                  <button className={'btn-cloud'}></button>
                </td>
                <div className={'nome-audio'}>{this.props.audio}</div>
              </td>

        </tr>
        </tbody>
        </table>
        </div>
      );
  }
}

MyComponent.defaultProps = {
  audio: 'vazio'
}
