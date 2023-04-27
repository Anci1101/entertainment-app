import React, { useState } from 'react'
import { useData } from '../App'
import DisplayMainData from '../components/DisplayMainData'
import SearchBar from '../components/SearchBar'
import '../scss/scss-style'

const TvSeries = () => {
  const { data } = useData()
    const [searchedWord, setSearchedWord] = useState('')

  const tvSeries = data?.filter((tvSerie)=>tvSerie.category === "TV Series")

    const filteredTvSeries = tvSeries?.filter((item)=>{
    return (item.title.toLowerCase().includes(searchedWord.toLowerCase()))
  })

  const handleSearch = (e) => {
   setSearchedWord(e.target.value)
  }

  return (
    <div className='tvSerieContainer'>
      <SearchBar handleSearch={handleSearch} searchedWord={searchedWord}/>
      <div className='mediaMainTitle'>Tv Series</div>
      <div className='tvSerieListWrapper'>
        {filteredTvSeries?.map((movie)=> (
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

export default TvSeries