import React from 'react'
// import SearchBar from './SearchBar'
// import ClearButton from './ClearButton'
import { Line, Clear, Search } from './styles'

const SearchLine = ({
  setTodos, setState,
}) => (
  <Line>
    <Search placeholder="Search Todos" onChange={e => setState(e.target.value)} />
    <Clear onClick={() => {
      setTodos([])
    }}
    >
Clear all Todos

    </Clear>
  </Line>
)

export default SearchLine
