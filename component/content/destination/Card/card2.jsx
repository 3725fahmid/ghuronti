import React from 'react'
import Image  from 'next/image'
import style from './card.module.css'
import Rectangle from '../../../../public/svgs/Rectangle 32.svg'
const card2 = () => {
  return (
    <>
        <div className={style.Card}>
            <div className={style.Cardpic}>
                <Image
                src={Rectangle}
                alt='CardPic'
                width={325}
                height={256}
                />
            </div>
            <div className={style.Carddetails}>
                <div className={style.cardplace}>
                    <h1>Dubai: The city of life</h1>
                    <p><span>Start From</span>27,500TK</p>
                </div>
                <div className={style.daysOfjourney}>
                    <p> 4 days </p>
                </div>
            </div>
            <button className={style.Cardbutton}>View Details</button>
        </div>
    </>
  )
}

export default card2;