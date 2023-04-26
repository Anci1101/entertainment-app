import { useQuery } from '@tanstack/react-query'
import React from 'react'
import DisplayMainData from '../components/DisplayMainData'
const RecomendedMedia = () => {
  const {data} = useQuery(["recomendedMedia"], () => {
    return fetch('http://localhost:8000/data')
    .then((response) => response.json())
  })
  
  return (
    <div>
      <h4 className='mediaMainTitle'>Recomended for you</h4>  
      <div className='recomendedMediaWrapper'>
        {data?.map((media)=>(
          <DisplayMainData
          title={media.title}
          year={media.year}
          category={media.category}
          rating={media.rating}
          isBookmarked={media.isBookmarked}
          thumbnail={media.thumbnail}
          />
        ))}
      </div>
    </div>
  )
}

export default RecomendedMedia