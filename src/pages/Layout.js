import React from 'react'
import NavBar from '../components/NavBar'
import '../scss/scss-style'

const Layout = ({children}) => {
  return (
    <div className='layout'>
            <NavBar/>
        <main className='main'>{children}</main>
    </div>
  )
}

export default Layout