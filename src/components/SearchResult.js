import React, { Component } from 'react';

import MyComponent from '../mycomponent';
import Collections from './Collections';
import Description from './Description';
import Head from './Head';


export default class SearchResult extends Component {
  render() {
    return (
      <div className={'bg-color'}>
        <Head />
        <div> <Description /> </div>
        <div> <Collections /> </div>
        <div>
        <table>
          <tbody>
            <tr>
              <td>
                <MyComponent audio={'ACDC-TNT.mp3'}/>
                <div>
                  <MyComponent audio={'Queen - I Want To Break Free.mp3'}/>
                </div>
                <div>
                  <MyComponent audio={'Powerman 5000 - When Worlds Collide.mp3'}/>
                </div>
              </td>
              <td>
                <MyComponent audio={'Led Zeppelin - Kashmir.mp3'}/>
                <div>
                  <MyComponent audio={'System Of A Down - Chop Suey!.mp3'}/>
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
