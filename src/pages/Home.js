import React from 'react'
import RecomendedMedia from '../components/RecomendedMedia'
import Trending from '../components/Trending'

const Home = () => {
  return (
    <div>
      <Trending/>
      <RecomendedMedia/>
    </div>
  )
}

export default Home