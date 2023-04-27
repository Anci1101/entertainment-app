import React from 'react'
import { useData } from '../App'
import DisplayMainData from '../components/DisplayMainData'
const RecomendedMedia = () => {
  const { data } = useData()
  
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