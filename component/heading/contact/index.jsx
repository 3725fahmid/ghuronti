import React from 'react'
import Image from 'next/image'
import Styles from './contact.module.css'
import call from '../../../public/svgs/Call.svg'

const contact = () => {
  return (
    <>
    <section className={Styles.contact}>
      <div className={Styles.number}> 
        <span className='flex'> 
            <Image
              className='mx-4'
              width={25}
              height={30}
              src={call}
              alt='Call'
              >
            </Image> 
            <a>+88-01885-XXX-XXX</a>
          </span>
        <a>Contact Us</a>
      </div>
    </section>
    </>
  )
}

export default contact;