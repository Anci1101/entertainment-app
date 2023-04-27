import React from 'react'
import DisplayMainData from '../components/DisplayMainData'

const RecomendedMedia = ({filteredMedia, searchedWord, numberOfFilteredMedia}) => {
  return (
    <div>
      {searchedWord === '' ? 
      (<div className='mediaMainTitle'>Recomended for you</div> ) : 
      (<div className='mediaMainTitle'>Found {numberOfFilteredMedia} results for '{searchedWord}'</div> )}
      
      <div className='recomendedMediaWrapper'>
        {filteredMedia?.map((media)=>(
          <DisplayMainData
          key={media.id}
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