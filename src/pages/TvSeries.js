import React from 'react'
import { useData } from '../App'
import DisplayMainData from '../components/DisplayMainData'
import '../scss/scss-style'

const TvSeries = () => {
  const { data } = useData()
  const tvSeries = data?.filter((tvSerie)=>tvSerie.category === "TV Series")
  return (
    <div className='tvSerieContainer'>
      <div className='mediaMainTitle'>Tv Series</div>
      <div className='tvSerieListWrapper'>
        {tvSeries?.map((movie)=> (
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