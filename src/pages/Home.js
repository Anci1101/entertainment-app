import React, { useState } from 'react'
import { useData } from '../App'
import RecomendedMedia from '../components/RecomendedMedia'
import SearchBar from '../components/SearchBar'
import Trending from '../components/Trending'

const Home = () => {
  const { data } = useData()
  const [searchedWord, setSearchedWord] = useState('')

  const filteredMedia = data?.filter((item)=>{
    return (item.title.toLowerCase().includes(searchedWord.toLowerCase()))
  })

  const numberOfFilteredMedia = filteredMedia?.length
  
  const handleSearch = (e) => {
    setSearchedWord(e.target.value)
   }
  return (
    <div>
      <SearchBar handleSearch={handleSearch} searchedWord={searchedWord}/>
      {searchedWord === '' && (<Trending/>) }
      
      <RecomendedMedia numberOfFilteredMedia={numberOfFilteredMedia} searchedWord={searchedWord} filteredMedia={filteredMedia}/>
    </div>
  )
}

export default Home