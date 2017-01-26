import React, {Component, PropTypes} from 'react'
import Dropdown from 'rc-dropdown'
import Menu, { Item as MenuItem } from 'rc-menu'
import '!style!css!rc-dropdown/assets/index.css'
import s from './styles.css'

class MyDropdown extends Component {
  constructor (props) {
    super(props)
    this.menu = (
      <Menu onSelect={this.onSelect} >
        {this.props.menuItems.map((item, idx) => (
          <MenuItem key={idx}>{item}</MenuItem>
        ))}
      </Menu>
    )
  }

  onSelect ({ key }) {
    console.log(`${key} selected`)
  }

  onVisibleChange (visible) {
    console.log(visible)
  }

  render () {
    return (
      <Dropdown
        trigger={['click']}
        overlay={this.menu}
        animation='slide-up'
        onVisibleChange={this.onVisibleChange}
      >
        <span className={s['menu-dropdown']}>
          {this.props.text} {' '} <i className='fa fa-caret-down' aria-hidden='true' />
        </span>
      </Dropdown>
    )
  }
}

MyDropdown.propTypes = {
  text: PropTypes.string.isRequired,
  menuItems: PropTypes.array.isRequired
}

export default MyDropdown
