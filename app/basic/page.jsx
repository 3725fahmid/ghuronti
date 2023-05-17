import React from 'react'
import Card1 from '@/component/content/destination/Card/card1';
import Card from '../../component/CardofBooking'

const basic = () => {
  return (
    <div className='flex flex-col gap-10 items-center '>
        <Card1/>
        <Card/>
    </div>
  )
}

export default basic;