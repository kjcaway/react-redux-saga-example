import React, { Component } from 'react'
import {connect } from 'react-redux'
import Search from '../components/Search'
import SearchResult from '../components/SearchResult'

import * as SearchActions from '../store/actions'

class SearchContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
  }
  onChanageInput = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  render() {
    return (
      <div>
        <Search 
          name={this.state.name}
          onSearch={this.props.onSearch}
          onChangeInput={this.onChanageInput}
        />
        { 
          this.props.error?<div>Something wrong!</div>
          :
          <SearchResult 
            data={this.props.data}
          />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data : state.search.data,
    error: state.search.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (text) => {
      dispatch({type: SearchActions.SEARCH, payload: text});
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps)(SearchContainer);
