import React from 'react'
import Styles from './card.module.css'

const index = () => {
  return (
    <>
        <div className="container">
            <div className="flex">
                <div className="hazz">Hazz & Umrah</div>
                <div className="hazz">Flight</div>
                <div className="hazz">Hotel</div>
                <div className="hazz">Visa</div>
                <div className="hazz">Tours</div>
                <div className="hazz">Buses</div>
                <div className="hazz">Trains</div>
            </div>

            <div className="tripPlan">
                <div className="o">One Way</div>
                <div className="R">Round Trip</div>
                <div className="M">Multi City</div>
            </div>

        </div>
    </>
  )
}

export default index;