import React, { Component } from 'react';
import Perfil from './Perfil';


export default class Head extends Component {
  render() {
    return (
      <div className={'head-bg'}>
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <img width="300" height="30" src="../src/logo2.png" />
                </td>
                <td>
                  <span className={'search-bar'} >
                  <input type='text' className={'search-input'}></input>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <Perfil />
                </td>
                <td>
                  <p className={'nome-perfil'} > Julian J. Ludwig </p>
                  <p className={'local'} > <img width="20" height="20" src="../src/placeholder.png" /> São Paulo - Brasil <span className={'files'}> <img width="20" height="20" src="../src/files.png" /></span> 280 Files </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
