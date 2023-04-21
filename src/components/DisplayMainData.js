import React from 'react'
import {ReactComponent as MoviesIcon} from '../assets/icon-nav-movies.svg'
import {ReactComponent as TvSeriesIcon} from '../assets/icon-nav-tv-series.svg'
import {ReactComponent as EmptyBookmark} from '../assets/icon-bookmark-empty.svg'
import '../scss/scss-style'

const DisplayMainData = ({title, year, category,rating, isBookmarked, thumbnail}) => {
  return (
    <div className='singleMediaWrapper'>
    <div className='mediaImg'>
        <img src={thumbnail.regular.small}  
            srcSet={`${thumbnail.regular.small} 328w,
                    ${thumbnail.regular.medium} 440w,
                    ${thumbnail.regular.large} 560w`}
            sizes="(max-width: 375px) 164px,
                    (max-width: 750px) 220px,
                     (min-width: 750px) 280px"
            alt={title} />
        <div className='bookmark'>
            <EmptyBookmark className='bookmarkIcon'/>
        </div>
        
    </div>
    <div className='mediaInfo'>
        <div className='year'>{year}</div>
        <span className='dot'></span>
        <div className='category'>
            <div className='mediaIcon'>
                {category === "Movie" ? <MoviesIcon /> : <TvSeriesIcon/>}
            
            </div>
            
            {category}
        </div>
        <span className='dot'></span>
        <div className='rating'>{rating}</div>
    </div>
    <div className='mediaTitle'>{title}</div>
</div>
  )
}

export default DisplayMainData