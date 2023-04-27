import React from 'react'
import {ReactComponent as MoviesIcon} from '../assets/icon-nav-movies.svg'
import {ReactComponent as TvSeriesIcon} from '../assets/icon-nav-tv-series.svg'
import {ReactComponent as EmptyBookmark} from '../assets/icon-bookmark-empty.svg'
import { useData } from '../App'

const Trending = () => {
  const { data } = useData()

  const trendingMedia = data?.filter((singleMedia)=>singleMedia.isTrending === true)
  

  return (
    <>
      <div className='mediaMainTitle'>Trending</div>
      <div className='trendingMediaContainer'>
          
          {trendingMedia?.map((singleTrendingMedia)=>(
            <div className='trendingSingleMediaWrapper' key={singleTrendingMedia.id}>
              <div className='trendingMediaImg'>
                <img src={singleTrendingMedia.thumbnail.regular.medium} alt="" />
                <div className='bookmark'>
                  <EmptyBookmark className='bookmarkIcon'/>
                </div>
              </div>
              
              <div className='trendingMediaInfoWrapper'>
                  <div className='trendingMediaInfo'>
                      <div className='trendingMediaYear'>{singleTrendingMedia.year}</div>
                      <span className='trendingMediaDot'></span>
                      <div className='trendingMediaCategory'>
                        <div className='trendingMediaIcon'>
                          {singleTrendingMedia.category === "Movie" ? <MoviesIcon className='trendingMovieIcon'/> : <TvSeriesIcon className='trendingTvSeriesIcon'/>}
                        </div>
                        {singleTrendingMedia.category}
                      </div>
                      <span className='trendingMediaDot'></span>
                      <div className='trendingMediaRating'>{singleTrendingMedia.rating}</div>
                  </div>
                  

                  <div className='trendingMediaTitle'>{singleTrendingMedia.title}</div>
              </div>
            
            </div>
          ))}
      </div>
    </>
  )
}

export default Trending