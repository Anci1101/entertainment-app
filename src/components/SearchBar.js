import React from 'react'
import '../scss/scss-style'
import {ReactComponent as SearchBarIcon} from '../assets/icon-search.svg'

const SearchBar = () => {
  return (
    <div className='searchBarContainer'>
        <div className='searchBar'>
            <SearchBarIcon className='SearchBarIcon'/>
            <input className='searchBarInput' type="text" placeholder='Search for movies or TV series'/>
        </div>
    </div>
  )
}

export default SearchBar