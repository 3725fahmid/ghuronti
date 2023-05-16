import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Styles from './booknow.module.css'
import Video from '../../../public/svgs/video.svg'

const booknow = () => {
  return (
    <>
      <div className={Styles.booknow}>
        <div className={Styles.content}>
        <Link href={'/'}>
          <Image
            src={Video}
            alt='Video'
            className={Styles.Video}
          />
        </Link>
        <Link href={'/'}>
            <button className={Styles.btn}>

            </button>
        </Link>
        </div>
      </div>
    </>
  )
}

export default booknow