import Image from 'next/image'
import Header from '../component/heading'
import VisitinBangladesh from '../component/content/bestplace'
import BookNow from '../component/content/booknow'
import Destination from '../component/content/destination'
import Ourmission from '../component/content/ourmission'
import TopP from '../component/content/Toppriority'
import Footer from '@/component/footer'

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Header/>
        <VisitinBangladesh/>
        <BookNow/>
        <Destination/>
        <Ourmission/>
        <TopP/>
        <Footer/>
      </div>
    </>
  )
}
