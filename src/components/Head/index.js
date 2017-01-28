import React, { Component } from 'react';
import Perfil from '../../components/Perfil';
import SearchBar from '../../components/SearchBar';
import s from './styles.css';


export default class Head extends Component {
  render() {
    return (
      <div className={s['head-bg']}>
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <img width="300" height="30" src="../src/imagens/logo2.png" />
                </td>
                <td>
                  <SearchBar />
                </td>
                <td>
                  <img width="20" height="20" className={s['open-book']} src="../src/imagens/open-book.png" />
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
                  <p className={s['nome-perfil']} > Julian J. Ludwig </p>
                  <p className={s['local']} > <img width="20" height="20" src="../src/imagens/placeholder.png" /> São Paulo - Brasil <span className={s['files']}> <img width="20" height="20" src="../src/imagens/files.png" /></span> 280 Files </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
