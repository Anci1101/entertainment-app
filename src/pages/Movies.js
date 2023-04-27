import React, { useState } from 'react'
import '../scss/scss-style'
import DisplayMainData from '../components/DisplayMainData'
import { useData } from '../App'
import SearchBar from '../components/SearchBar'

const Movies = () => {
  const { data } = useData()
  const [searchedWord, setSearchedWord] = useState('')

  const movies = data?.filter((movie)=>movie.category === "Movie")

  const filteredMovies = movies?.filter((item)=>{
    return (item.title.toLowerCase().includes(searchedWord.toLowerCase()))
  })

  const handleSearch = (e) => {
   setSearchedWord(e.target.value)
  }

  return (
    <div className='movieContainer'>
      <SearchBar handleSearch={handleSearch} searchedWord={searchedWord}/>
      <div className='mediaMainTitle'>Movies</div>
      <div className='movieListWrapper'>
        {filteredMovies?.map((movie)=> (
          <DisplayMainData key={movie.title}
                title={movie.title}
                year={movie.year}
                category={movie.category}
                rating={movie.rating}
                isBookmarked={movie.isBookmarked}
                thumbnail={movie.thumbnail}
                />
        ))}
      </div>
      
    </div>
  )
}

export default Movies