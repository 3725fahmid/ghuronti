import React from 'react'
import Styles from './ourmission.module.css'

const ourmission = () => {
  return (
    <>
    <div className={Styles.mission}>
      <div className={Styles.details}>
        <h1>Our Mission &  Vision</h1>
        <p>Serving our customer, searching their entire satisfaction and providing touristic services of quality, committing to the social, cultural and environmental reality of our country.</p>
      </div>
      <div className={Styles.missionCard}>
        <div className={Styles.CardMission}>
          <h1>Mission</h1>
          <p>Providing advanced travel solutions with great care and satisfaction.</p>
        </div>
        <div className={Styles.CardMission}>
          <h1>Vision </h1>
          <p>Ghurtoni.com is partnering with you to reach your dream destinations.</p>
        </div>
      </div>

    </div>
    </>
  )
}

export default ourmission