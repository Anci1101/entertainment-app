import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as HomeIcon} from '../assets/icon-nav-home.svg'
import {ReactComponent as MoviesIcon} from '../assets/icon-nav-movies.svg'
import {ReactComponent as TvSeriesIcon} from '../assets/icon-nav-tv-series.svg'
import {ReactComponent as BookmarkIcons} from '../assets/icon-nav-bookmark.svg'
import {ReactComponent as Logo} from '../assets/logo.svg'
import AvatarIcon from '../assets/image-avatar.png'
import '../scss/scss-style'

const NavBar = () => {
  return (
    <div className='navBarContainer'>
        <div className='navBar'>
            <Logo className='logInSingUpIcon'/>
            <div className='menuWrapper'>
                <Link to='/'>
                    <HomeIcon className='homeIcon'/>
                </Link>
                <Link to='/movies'>
                    <MoviesIcon className='moviesIcon'/>
                </Link>
                <Link to='/tvSeries'>
                    <TvSeriesIcon className='tvSeriesIcon'/>
                </Link>
                <Link to='/bookmarked'>
                    <BookmarkIcons className='bookmarkMenuIcon'/>
                </Link>
            </div>
            <div className='avatarIcon'>
                <img src={AvatarIcon} alt="" />
            </div>
        </div>
    </div>
  )
}

export default NavBar