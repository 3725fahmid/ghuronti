import React from 'react'
import Styles from './destination.module.css'
import CardSwipe from './Card/Swiper'

const destination = () => {
  return (
    <>
      <div className={Styles.destination}>
        <h1>Trending International Destinations</h1>
        <p>The world is now just a hop, skip and jump away and here’s how <br/> you can make your travel easier and better. </p>
        <div className={Styles.cards}>
            <CardSwipe/>
        </div>
      </div>
    </>
  )
}

export default destination;