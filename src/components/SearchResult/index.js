import React, { Component } from 'react';

import Waves from '../../components/Waves';
import Description from '../../components/Description';
import Head from '../../components/Head';
import Collections from '../../components/Collections';
import s from './styles.css';


export default class SearchResult extends Component {
  render() {
    return (
      <div className={s['bg-color']}>
        <Head />
        <div> <Description /> </div>
        <div> <Collections /> </div>
        <div>
        <table>
          <tbody>
            <tr>
              <td>
                <Waves audio={'ACDC-TNT.mp3'}/>
                <div>
                  <Waves audio={'Queen - I Want To Break Free.mp3'}/>
                </div>
                <div>
                  <Waves audio={'Powerman 5000 - When Worlds Collide.mp3'}/>
                </div>
              </td>
              <td>
                <Waves audio={'Led Zeppelin - Kashmir.mp3'}/>
                <div>
                  <Waves audio={'System Of A Down - Chop Suey!.mp3'}/>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}
