import React, { Component } from 'react';
import s from './styles.css';

export default class Collections extends Component {
  testando(){

  }
  render() {
    return (
      <div>
        <div> Collections </div>
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <div className={s['imgCollection']}>
                    <img src="../src/imagens/imagemCollection.png" width={100}  onClick={this.testando.bind(this)}/>
                  </div>
                  <div> TEXTO </div>
                </td>
                <td>
                  <div className={s['imgCollection']}>
                    <img src="../src/imagens/imagemCollection.png" width={100} onClick={this.testando.bind(this)}/>
                  </div>
                  <div> TEXTO 2 </div>
                </td>
                <td>
                  <div className={s['imgCollection']}>
                    <img src="../src/imagens/imagemCollection.png" width={100} onClick={this.testando.bind(this)}/>
                  </div>
                  <div> TEXTO 3 </div>
                </td>
                <td>
                  <div className={s['imgCollection']}>
                    <img src="../src/imagens/imagemCollection.png" width={100} onClick={this.testando.bind(this)}/>
                  </div>
                  <div> TEXTO 4 </div>
                </td>
                <td>
                  <div className={s['imgCollection']}>
                    <img src="../src/imagens/imagemCollection.png" width={100} onClick={this.testando.bind(this)}/>
                  </div>
                  <div> TEXTO 5 </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
