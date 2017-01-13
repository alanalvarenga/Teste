import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  render() {
    return <input
    value={this.state.term}
    onChange={event => this.setState({term: event.target.value})} />;
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
