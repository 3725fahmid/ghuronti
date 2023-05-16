import React from 'react'
import Image from 'next/image'
import Styles from './navbar.module.css'
import Logo from '@/public/svgs/Logo.svg'
import Search from '@/public/svgs/Search.svg'
 
const navbar = () => {
  return (
    <>
     <div className={Styles.navBar}>
      <div className={Styles.logoGroup}>
        <Image
          className={Styles.Logo}
          src={Logo}
          width={200}
          height={70}
          alt='Logo'
        />
        <a href="#">About</a>
      </div>
        <div className={Styles.searchbar}>
          <input type="text" placeholder='Search Flight, Hotal, Visa'/>
          <div className={Styles.Serchbtn}>
          <Image
          className={Styles.Search}
          src={Search}
          width={26}
          height={24}
          alt='Logo'
        />
          </div>
        </div>
        <div className={Styles.btnGroup}>
          <button className={Styles.login}>Login</button>
          <button className={Styles.signup}>Sign Up</button>
        </div>
     </div>
    </>
  )
}

export default navbar