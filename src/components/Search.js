import React from 'react'

const Search = (props) => {
  return (
    <div>
      <input type='text' name='name' onChange={(e) => props.onChangeInput(e)}/>
      <br/>
      <button type='button' onClick={() => props.onSearch(props.name)}>Search</button>
    </div>
  )
}

export default Search
