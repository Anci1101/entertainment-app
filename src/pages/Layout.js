import React from 'react'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import '../scss/scss-style'

const Layout = ({children}) => {
  return (
    <div className='layout'>
            <NavBar/>
            <SearchBar/>
        <main className='main'>{children}</main>
    </div>
  )
}

export default Layout