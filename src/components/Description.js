import React, { Component } from 'react';
//import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem } from 'rc-menu';
import Dropdown from './Dropdown'


const options = [
  'one', 'two', 'three'
]

const defaultOption = options[0]

export default class Description extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
              <div className={'descricao'}>
                Esse texto corresponde à descrição. Esse texto corresponde à descrição.
                Esse texto corresponde à descrição. Esse texto corresponde à descrição.
                Esse texto corresponde à descrição. Esse texto corresponde à descrição.
                </div>
              </td>
              <td>
              <div className={'contato'}>
                <p>contato@jacarandaaudio.com</p>
                <p>www.jacarandaaudio.com</p>
                <p>+55 11 986-837-913</p>
                <button className={'icon-facebook'}></button>
                <button className={'icon-twitter'}></button>
                <button className={'icon-googleplus'}></button>
                </div>
              </td>
              <td>
                <span className={'element-right'}>
                <Dropdown text='Collections' menuItems={['Opção 1', 'Opção 2', 'Opção 3']} />
                <i class="fa fa-caret-down" aria-hidden="true"></i>
                </span>
                <span className={'element-right'}>
                <Dropdown text='Category' menuItems={['Opção 1', 'Opção 2', 'Opção 3']} />
                <i class="fa fa-caret-down" aria-hidden="true"></i>
                </span>
                <div>
                <span className={'element-right'}>
                <Dropdown text='Genre' menuItems={['Opção 1', 'Opção 2', 'Opção 3']} />
                <i class="fa fa-caret-down" aria-hidden="true"></i>
                </span>
                <span className={'element-right'}><input /></span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    );
  }
}
