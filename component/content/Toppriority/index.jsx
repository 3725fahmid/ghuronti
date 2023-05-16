import React from 'react'
import Image from 'next/image'
import Styles from './piority.module.css'
import Swip from './Swip'
import Quote from '../../../public/svgs/quote.svg'

const priority = () => {
  return (
    <>
    <div className={Styles.piority}>
      <div className={Styles.details}>
        <h1>Customer satisfaction is our top priority</h1>
        <p>Our clients praise us for our great results, personable service, <br /> expert knowledge. Here are what just a few of them had to say</p>
      </div>
      <div className={Styles.swip}>
          <Image
          src={Quote}
          alt='Quote'
          width={100}
          height={100}
          className={Styles.Quote}
          />
          <Swip/>
      </div>
      </div>
    </>
  )
}

export default priority;