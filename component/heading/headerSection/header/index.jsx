import React from 'react'
import Styles from './header.module.css'

const headercontent = () => {
  return (
    <>
    <div className={Styles.heading}>
      <div className={Styles.content}>
        <h1>Welcome to Ghuronti! Find Flights, Hotels & Tour Packages</h1>
      </div>
    </div>
    </>
  )
}

export default headercontent