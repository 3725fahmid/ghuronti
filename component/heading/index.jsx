import React from 'react'
import Contact from './contact/contact'
import Navbar from './headerSection/navbar/navbar'

const index = () => {
  return (
    <div className='flex flex-col'>
        <Contact/>
        <Navbar/>
    </div>
  )
}

export default index;