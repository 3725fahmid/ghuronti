import React from 'react'
import Contact from './contact'
import Navbar from './headerSection/navbar'
import HeaderHeding from './headerSection/header'

const index = () => {
  return (
    <div className='flex flex-col'>
        <Contact/>
        <Navbar/>
        <HeaderHeding/>
    </div>
  )
}

export default index;