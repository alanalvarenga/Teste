import React from 'react';
import ReactDOM from 'react-dom';
import Wavesurfer from '../../components/WaveSurfer';
import s from './styles.css';

var btn_play_pause = "PLAY";
var icon_play_pause = "icon-play";
var url_audio = "./src/audios/";

export default class Waves extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      pos: 0.01,
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
    url_audio = "./src/audios/" + this.props.audio;
    return (
      <div className={s['wave_com_btns']}>
        <table>
          <tbody>
            <tr>
              <td className={s['btn_play']}>
                <button className={s[icon_play_pause]} onClick={this.play_pause.bind(this)}></button>
              </td>
              <td className={s['wavesurferDIV']}>
                <div className={s['wavesurferClass']} >
                  <Wavesurfer
                    audioFile={url_audio}
                      pos={this.state.pos}
                        onPosChange={this.handlePosChange}
                          playing={this.state.playing}
                  />
                </div>
              </td>
              <td className={s['botoes']}>
                <td className={s['Valor']}>
                  $20
                </td>
                <td className={s['carrinho']}>
                  <div className={s['carrinho']}>
                    <button className={s['btn-cart']}></button>
                  </div>
                </td>
                <td className={s['favorito']}>
                  <button className={s['btn-heart']}></button>
                </td>
                <td className={s['info']}>
                  <div className={s['info']}>
                    <button className={s['btn-info']}></button>
                  </div>
                </td>
                <td className={s['cloud']}>
                  <button className={s['btn-cloud']}></button>
                </td>
                <div className={s['nome-audio']}>{this.props.audio}</div>
              </td>

        </tr>
        </tbody>
        </table>
        </div>
      );
  }
}

Waves.defaultProps = {
  audio: 'vazio'
}
