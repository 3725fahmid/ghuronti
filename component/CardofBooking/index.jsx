import React from 'react'
import style from './cardBooking.module.css'

const index = () => {
  return (
    <>
        <div className={style.cardBooking}>
            <div className={style.header}>
                <h2>Hajj & Umrah </h2>
                <h2>Flight </h2>
                <h2>Hotel </h2>
                <h2>Visa </h2>
                <h2>Tours </h2>
                <h2>Buses </h2>
                <h2>Train </h2>
            </div>
            <div className={style.way}>
                <h2>One Way</h2>
                <h2>Round Trip</h2>
                <h2>Multi City</h2>
            </div>
            <div className={style.flightlocation}>
                <div className={style.whereFrom}>
                    <input type="text" name="name" id="name" />
                </div>
                <div className={style.endpoint}>
                    <input type="text" name="name" id="name" />
                </div>
            </div>
            <div className="">
                <div className={style.departTo}></div>
                <div className={style.returnTo}></div>
            </div>
            <div className={style.pasenger}>
                <input type="text" name="paseger" id="pasenger" />
            </div>

            
        </div>
    </>
  )
}

export default index