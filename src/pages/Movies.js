import React from 'react'
import { useQuery } from '@tanstack/react-query'
import '../scss/scss-style'
import DisplayMainData from '../components/DisplayMainData'

const Movies = () => {
  const {data} = useQuery(["movie"], () => {
    return fetch('http://localhost:8000/data')
    .then((response) => response.json())
  })
  const movies = data?.filter((movie)=>movie.category === "Movie")
  return (
    <div className='movieContainer'>
      <div className='mediaMainTitle'>Movies</div>
      <div className='movieListWrapper'>
        {movies?.map((movie)=> (
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