import { useQuery } from '@tanstack/react-query'
import React from 'react'
import DisplayMainData from '../components/DisplayMainData'
import '../scss/scss-style'

const TvSeries = () => {
  const {data} = useQuery(["tvSeries"], () => {
    return fetch('http://localhost:8000/data')
    .then((response)=> response.json())
  })
  const tvSeries = data?.filter((tvSerie)=>tvSerie.category === "TV Series")
  return (
    <div className='tvSerieContainer'>
      <div className='title'>Movies</div>
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