import React from 'react'
import Image from 'next/image'
import Styles from './place.module.css'
import CoxBazar from '../../../public/svgs/Coxbazar.svg'
import SwiperContent from '../../../component/Swiper'
import SliderHere from '../../content/bestplace'

const place = () => {
  return (
    <>
    <div className={Styles.place}>
      <h1>Best Place To Visit in Bangladesh</h1>
      <div className={Styles.Cards}>
        <div className={Styles.coxBazar}>
            <Image
             className={Styles.coxbazar}
             src={CoxBazar}
             alt='CoxBazar'
             width={540}
             height={350}
            />
            <div className={Styles.nameOfplace}>
              <p>Cox bazar</p>
              <p>15000 taka</p>
            </div>
        </div>
        <div className={Styles.otherPlace}>
            <div className={Styles.description}>
              Lorem ipsum dolor  Nihil blanditiis ex maiores quisquam eligendi hic quasi ipsam. Officia minima pariatur beatae nulla ea cumque voluptatibus, iure officiis impedit, aperiam adipisci animi quis placeat culpa magnam cupiditate rerum? Totam repellat, excepturi quam hic at provident error veritatis dicta obcaecati consectetur quae.
            </div>

            <div className={Styles.Anotherplace}>
                <SwiperContent/>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default place;