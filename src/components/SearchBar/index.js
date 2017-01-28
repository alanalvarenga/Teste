import React from 'react';
import s from './styles.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  submit (event) {
    event.preventDefault()
    hashHistory.push('/search')
  }

  render() {
    return (
      <form onSubmit={this._submit} className={s['form']} >
        <span className={s['searchbar-icons']}>
          <i className={'fa fa-search ' + s['search-icon']} aria-hidden='true' />
           <input
            value={this.state.term}
            onChange={event => this.setState({term: event.target.value})}
            type='text'
            className={s['search-input']} />
        </span>
      </form>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
